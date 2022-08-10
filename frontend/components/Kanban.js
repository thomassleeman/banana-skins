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
          {catsData.data.data.map((cat, index) => {
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
    // </DragDropContext>
  );
};

export default Kanban;
