import Kanban from '../components/Kanban';
import { useState } from 'react';
import { useGlobalContext } from '../utils/context';
import { useFetch } from '../utils/useFetch';
import Loading from '../components/Loading';
import Nav from '../components/Nav';
import Modal from '../components/Modal';
import AddJobForm from '../components/AddJobForm';

export default function Home() {
  const { loading, showAddJob } = useGlobalContext();

  useFetch('categories/includingJobs');
  // useFetch('jobs/');

  switch (loading) {
    case true:
      return (
        <main>
          <Nav />
          <Loading />
        </main>
      );
    case false:
      return (
        <main>
          <Nav />
          {showAddJob === true ? <Modal form={AddJobForm} /> : null}

          <Kanban />
        </main>
      );
    default:
      return <h1>Nothing rendered</h1>;
  }
}
