import styled from 'styled-components';
import Task from './Task';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 8px;
  border: solid 4px #ffff;
  border-radius: 12px;
  background-color: #f1c40f;
  width: 20rem;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
  color: #483401;
`;
const Tasklist = styled.div`
  padding: 8px;
  flex-grow: 1;
  min-height: 100px;
`;

const Column = ({ column, tasks, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Title {...provided.dragHandleProps}>{column.title}</Title>
          <Droppable droppableId={column.id} type="tasks">
            {(provided) => (
              <Tasklist ref={provided.innerRef} {...provided.droppableProps}>
                {tasks.map((task, index) => {
                  return <Task key={task.id} task={task} index={index} />;
                })}
                {provided.placeholder}
              </Tasklist>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
};

export default Column;
