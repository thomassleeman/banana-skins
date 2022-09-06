import styled from 'styled-components';
import { VscChromeClose } from 'react-icons/vsc';

const Container = styled.div`
  border: 2px solid #ffff;
  border-radius: 12px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #fee402;
  color: #483401;
`;

const AddJob = ({ catId, showAddJob, setShowAddJob }) => {
  return (
    <Container>
      <form>
        <textarea placeholder="Title"></textarea>
        <textarea placeholder="Description"></textarea>
        <button>ADD</button>
        <VscChromeClose
          style={{ cursor: 'pointer' }}
          onClick={() => setShowAddJob(false)}
        />
      </form>
    </Container>
  );
};

export default AddJob;
