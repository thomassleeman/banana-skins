// import { useRouter } from 'next/router';
import { useState } from 'react';
import Column from './Column';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import initialData from './initial-data';
import { useGlobalContext } from '../utils/context';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
`;

const Kanban = () => {
  // const router = useRouter();

  const { jobsData, catsData } = useGlobalContext();
  console.log('jobsData:', jobsData);
  // console.log(jobsData.data);

  console.log('catsData:', catsData);
  // console.log(catsData.data);
  // const [data, setData] = useState(initialData);

  return (
    <Droppable droppableId="all-columns" direction="horizontal" type="column">
      {(provided) => (
        <Container {...provided.droppableProps} ref={provided.innerRef}>
          {data.columnOrder.map((columnId, index) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks}
                index={index}
              />
            );
          })}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
    // </DragDropContext>
  );
};

export default Kanban;
