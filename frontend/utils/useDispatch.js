import { useGlobalContext } from './context';

export const useDispatch = () => {
  const { dispatch } = useGlobalContext();
};
