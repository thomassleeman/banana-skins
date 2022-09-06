// import handleOnDragEnd from '../utils/handleOnDragEnd';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import { Droppable } from 'react-beautiful-dnd';
import { useGlobalContext } from '../utils/context';
import styled from 'styled-components';
import React, { useCallback } from 'react';
import { useUpdateDatabase } from '../utils/useUpdateDatabase';

const Container = styled.section`
  display: flex;
`;

const Kanban = () => {
  const { catsData, dispatch } = useGlobalContext();

  console.log(catsData);

  ///////////////////////////////////////////
  /////////HANDLE ON DRAG END////////////////
  ///////////////////////////////////////////
  const handleOnDragEnd = useCallback((result) => {
    const { destination, source, draggableId, type } = result;
    console.log('result: ', result);

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
      let newColumnOrder = [...catsData];

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
      const start = source.droppableId;
      const finish = destination.droppableId;
      const sourceCat = catsData.find((cat) => cat._id === start);
      const destinationCat = catsData.find((cat) => cat._id === finish);
      const sourceCatIndex = catsData.indexOf(sourceCat);
      const destinationCatIndex = catsData.indexOf(destinationCat);

      const newSourceJobs = sourceCat.jobs;
      const newDestinationJobs = destinationCat.jobs;
      const movingJob = sourceCat.jobs[source.index];

      newSourceJobs.splice(source.index, 1);

      if (start === finish) {
        newSourceJobs.splice(destination.index, 0, movingJob);
      } else {
        newDestinationJobs.splice(destination.index, 0, movingJob);
      }

      const newSourceCat = {
        ...sourceCat,
        jobs: newSourceJobs,
      };

      const newDestinationCat = {
        ...destinationCat,
        jobs: newDestinationJobs,
      };

      //update catsData by replacing original with updated source column
      const newCatsData = [...catsData];
      newCatsData.splice(sourceCatIndex, 1, newSourceCat);
      newCatsData.splice(destinationCatIndex, 1, newDestinationCat);

      dispatch({ type: 'UPDATE_CATS', payload: newCatsData });
      useUpdateDatabase('categories/reorder', newCatsData);
      return;
    }
  });

  ///////////////////////////////////////////
  ///////////////////////////////////////////

  switch (catsData === []) {
    case true:
      return (
        <>
          <Loading />
          <h1>No Data</h1>
        </>
      );
    case false:
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
                      jobs={cat.jobs}
                      index={index} //Will category order persist using this? If so do we need catIndex?
                    />
                  );
                })}
                {provided.placeholder}
              </Container>
            )}
          </Droppable>
        </DragDropContext>
      );
  }
};

export default Kanban;
