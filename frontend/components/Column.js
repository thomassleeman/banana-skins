import styled from 'styled-components';
import Job from './Job';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useGlobalContext } from '../utils/context';
import Loading from './Loading';
import { useFetch } from '../utils/useFetch';

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

const Column = ({ catId, title, description, index }) => {
  useFetch('jobs/');
  const { jobsLoading, jobsData } = useGlobalContext();
  switch (jobsLoading) {
    case true:
      return (
        <Draggable draggableId={catId} index={index}>
          {(provided) => (
            <Container {...provided.draggableProps} ref={provided.innerRef}>
              <Title {...provided.dragHandleProps}>{title}</Title>
              <p>{description}</p>
              <Loading />
            </Container>
          )}
        </Draggable>
      );
    case false:
      const jobs = jobsData.data.data;
      return (
        <Draggable draggableId={catId} index={index}>
          {(provided) => (
            <Container {...provided.draggableProps} ref={provided.innerRef}>
              <Title {...provided.dragHandleProps}>{title}</Title>
              <p>{description}</p>

              <Droppable droppableId={catId} type="jobs">
                {(provided) => (
                  <Tasklist
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {jobs.map((job, index) => {
                      if (job.category._id === catId) {
                        console.log(job.title);
                        return <Job key={job._id} job={job} index={index} />;
                      }
                    })}
                    {provided.placeholder}
                  </Tasklist>
                )}
              </Droppable>
            </Container>
          )}
        </Draggable>
      );
  }
};

export default Column;
