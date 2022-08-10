import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 2px solid #ffff;
  border-radius: 12px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #fee402;
  color: #483401;
`;

const Job = ({ job, index }) => {
  return (
    <Draggable draggableId={job._id} index={index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {job.title}
        </Container>
      )}
    </Draggable>
  );
};

export default Job;
