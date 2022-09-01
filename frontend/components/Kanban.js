// import handleOnDragEnd from '../utils/handleOnDragEnd';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import { Droppable } from 'react-beautiful-dnd';
import { useGlobalContext } from '../utils/context';
import styled from 'styled-components';
import React, { useCallback } from 'react';
import { useCreateOptions } from '../utils/useCreateOptions';
import { useFetch } from '../utils/useFetch';
import { useHandleOnDragEnd } from '../utils/useHandleOnDragEnd';
import { useUpdateDatabase } from '../utils/useUpdateDatabase';
import useCopyArray from '../utils/useCopyArray';
import { useOrderJobs } from '../utils/useOrderJobs';

const Container = styled.section`
  display: flex;
`;

const Kanban = () => {
  const { jobsData, catsData, dispatch } = useGlobalContext();

  ///////////////////////////////////////////
  /////////HANDLE ON DRAG END////////////////
  ///////////////////////////////////////////
  const handleOnDragEnd = useCallback((result) => {
    const { destination, source, draggableId, type } = result;
    console.log('result: ', result);

    const copyArray = (array) => {
      const arrayString = JSON.stringify(array);
      const arrayCopy = JSON.parse(arrayString);

      return arrayCopy;
    };

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    /* COLUMNS */
    if (type === 'column') {
      let newColumnOrder = copyArray(catsData);

      //a) reorder columns based on drag
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, catsData[source.index]);
      //b) Update index of each category
      newColumnOrder = newColumnOrder.map((col) => {
        col.catIndex = newColumnOrder.indexOf(col);
        return col;
      });

      //c) Update state optimistically
      dispatch({ type: 'UPDATE_CATS', payload: newColumnOrder });

      //update database
      useUpdateDatabase('categories/reorder', newColumnOrder);
      return;
    }

    /* JOBS */
    if (type === 'job') {
      let newJobsData = copyArray(jobsData);
      const spreadArray = [...jobsData];
      console.log('spreadArray: ', spreadArray);

      //Determine what kind of move has happened
      let jobDragType = '';
      if (destination.droppableId === source.droppableId) {
        jobDragType =
          source.index < destination.index ? 'position_down' : 'position_up';
      } else jobDragType = 'column_change';

      //1) Update index of each job that has moved
      newJobsData = newJobsData.map((job) => {
        //i) Change jobIndex of job that moved
        if (job._id === draggableId) {
          job.jobIndex = destination.index;
          job.category._id = destination.droppableId;
          return job;
        }
        //ii) Change jobIndex of any other jobs that have moved as a result of the drag
        else {
          switch (jobDragType) {
            case 'position_down':
              if (
                job.category._id === source.droppableId &&
                job.jobIndex <= destination.index &&
                job.jobIndex > source.index
              ) {
                job.jobIndex -= 1;
              }
              break;
            case 'position_up':
              if (
                job.category._id === source.droppableId &&
                job.jobIndex >= destination.index &&
                job.jobIndex < source.index
              ) {
                job.jobIndex += 1;
              }
              break;
            case 'column_change':
              if (
                job.category._id === source.droppableId &&
                job.jobIndex > source.index
              ) {
                job.jobIndex -= 1;
              }

              if (
                job.category._id === destination.droppableId &&
                job.jobIndex >= destination.index
              ) {
                job.jobIndex += 1;
              }
              break;
            default:
          }
        }

        //iii) Return all jobs
        return job;
      });

      newJobsData = useOrderJobs(newJobsData);
      console.log('jobsData: ', newJobsData);

      //c) Update state optimistically
      //BUG Currently the only way that jobs are being ordered by jobIndex is when they are fetched according to category
      // this is why a refresh is required to get the column orders correct.
      dispatch({ type: 'UPDATE_JOBS', payload: newJobsData });

      //update database
      useUpdateDatabase('jobs/reorder', newJobsData);
      return;
    }
  });
  ///////////////////////////////////////////
  ///////////////////////////////////////////

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="Kanban" direction="horizontal" type="column">
        {(provided) => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {catsData.map((cat, index) => {
              return (
                <Column
                  key={cat._id}
                  catId={cat._id}
                  title={cat.title}
                  description={cat.description}
                  index={index}
                />
              );
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Kanban;
