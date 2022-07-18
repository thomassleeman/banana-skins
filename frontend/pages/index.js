import Kanban from '../components/Kanban';
import { useGlobalContext } from '../context';
import { useFetch } from '../useFetch';
import Loading from '../components/Loading';
import 'normalize.css';

export default function Home() {
  const { loading, dispatch } = useGlobalContext();
  useFetch('jobs');

  switch (loading) {
    case false:
      return (
        <main>
          <Loading />
        </main>
      );
    case true:
      return (
        <main>
          <Kanban />
        </main>
      );
    default:
      return <h1>Nothing rendered</h1>;
  }
}
