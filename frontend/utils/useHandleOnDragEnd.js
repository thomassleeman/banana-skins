import { useGlobalContext } from './context';
import { useCreateOptions } from '../utils/useCreateOptions';
import { useFetch } from './useFetch';

// import { useDispatch } from './useDispatch';
// import { useHandleUpdateColumns } from './useHandleUpdateColumns';

export function useHandleOnDragEnd(result) {
  // const { dispatch, catsData } = useGlobalContext();
  const { destination, source, draggableId, type } = result;
  // dispatch({ type: 'LOADING' });
  console.log(result);

  if (!destination) {
    return;
  }

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  if (type === 'column') {
    const newColumnOrderString = JSON.stringify(catsData);
    const newColumnOrder = JSON.parse(newColumnOrderString);

    //Update state optimistically
    newColumnOrder.splice(source.index, 1);
    newColumnOrder.splice(destination.index, 0, catsData[source.index]);
    // dispatch({ type: 'UPDATE_CATS', payload: newColumnOrder });

    //update database
    console.log(newColumnOrder);
    const body = JSON.stringify({
      // startIndex: source.index,
      // finishIndex: destination.index,
      data: newColumnOrder,
    });
    const options = useCreateOptions('PUT', body);
    // useFetch('categories/reorder', options);

    return;
  }

  const start = catsData[source.droppableId];
  const finish = catsData[destination.droppableId];

  // Moving within the same list
  if (start === finish) {
    const newTaskIds = Array.from(start.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);
    const newColumn = {
      ...start,
      taskIds: newTaskIds,
    };
    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
    };
    setData(newData);
  }

  //Moving from one list to another
  const startTaskIds = Array.from(start.taskIds);
  startTaskIds.splice(source.index, 1);
  const newStart = {
    ...start,
    taskIds: startTaskIds,
  };
  const finishTaskIds = Array.from(finish.taskIds);
  finishTaskIds.splice(destination.index, 0, draggableId);
  const newFinish = {
    ...finish,
    taskIds: finishTaskIds,
  };

  const newData = {
    ...data,
    columns: {
      ...data.columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    },
  };
  setData(newData);
}
