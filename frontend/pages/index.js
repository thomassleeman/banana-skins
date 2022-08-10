import Kanban from '../components/Kanban';
import { useGlobalContext } from '../utils/context';
import { useFetch } from '../utils/useFetch';
import Loading from '../components/Loading';
import 'normalize.css';

export default function Home() {
  const { loading } = useGlobalContext();
  useFetch('categories/');

  switch (loading) {
    case true:
      return (
        <main>
          <Loading />
        </main>
      );
    case false:
      return (
        <main>
          <Kanban />
        </main>
      );
    default:
      return <h1>Nothing rendered</h1>;
  }
}
