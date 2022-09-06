import styled from 'styled-components';
import { useState } from 'react';
import Job from './Job';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import AddJob from './AddJob';
import { useGlobalContext } from '../utils/context';
import { VscAdd } from 'react-icons/vsc';
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

const Column = ({ catId, title, description, index, jobs }) => {
  const { catsData, dispatch } = useGlobalContext();
  const [showAddJob, setShowAddJob] = useState(false);

  const handleAddJob = (catId) => {};

  return (
    <Draggable draggableId={catId} index={index}>
      {(provided) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Title {...provided.dragHandleProps}>{title}</Title>
          <p>
            {description}
            {`...index: ${index}`}
          </p>

          <Droppable droppableId={catId} type="job">
            {(provided) => (
              <Tasklist ref={provided.innerRef} {...provided.droppableProps}>
                {jobs.map((job, index) => {
                  return <Job key={job._id} job={job} index={index} />;
                })}

                {provided.placeholder}
              </Tasklist>
            )}
          </Droppable>
          {showAddJob === true ? (
            <AddJob
              catId={catId}
              showAddJob={showAddJob}
              setShowAddJob={setShowAddJob}
            />
          ) : (
            <button
              style={{ cursor: 'pointer' }}
              onClick={() => setShowAddJob(true)}
            >
              <VscAdd />
            </button>
          )}
        </Container>
      )}
    </Draggable>
  );
};
// };

export default Column;
