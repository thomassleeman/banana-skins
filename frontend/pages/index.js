import Kanban from '../components/Kanban';
import Nav from '../components/Nav';
import Test from '../components/Test';
// import Modal from '../components/Modal';
// import AddJobForm from '../components/AddJobForm';

export default function Home() {
  // switch (loading) {
  //   case true:
  return (
    <main>
      <Nav />
      <Kanban />
    </main>
  );
  //   case false:
  //     return (
  //       <main>
  //         <Nav />
  //         {showAddJob === true ? <Modal form={AddJobForm} /> : null}

  //         <Kanban />
  //       </main>
  //     );
  //   default:
  //     return <h1>Nothing rendered</h1>;
  // }
}
