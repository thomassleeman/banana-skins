import { useGlobalContext } from './context';

export const useHandleUpdateColumns = (source, destination) => {
  const { dispatch, catsData } = useGlobalContext();

  const newColumnOrder = catsData;
  newColumnOrder.splice(source.index, 1);
  newColumnOrder.splice(destination.index, 0, draggableId);

  dispatch({ type: 'UPDATE_CATS', payload: newColumnOrder });
};
