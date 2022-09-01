///////////////////////////////////////////
/////////HANDLE ON DRAG END////////////////
///////////////////////////////////////////
const handleOnDragEnd = useCallback((result) => {
  const { destination, source, draggableId, type } = result;
  // console.log('result: ', result);

  const copyArray = (array) => {
    const arrayString = JSON.stringify(array);
    const arrayCopy = JSON.parse(arrayString);

    return arrayCopy;
  };

  const reorder = (dataIn, dispatchType, endPoint) => {
    const newOrderString = JSON.stringify(dataIn);
    const newOrder = JSON.parse(newOrderString);

    //Update state optimistically
    //a) reorder columns based on drag
    newOrder.splice(source.index, 1);
    newOrder.splice(destination.index, 0, dataIn[source.index]);
    //b) Update index of each category
    newOrder.map((item) => {
      //BUG This works for columns but not for jobs.

      item.index = newOrder.indexOf(item);
    });
    //c) Update state
    dispatch({ type: dispatchType, payload: newOrder });

    //update database
    const body = JSON.stringify({
      data: newOrder,
    });
    useUpdateDatabase(endPoint, body);
    return;
  };

  /_ If DRAG CANCELLED _/;
  if (!destination) {
    return;
  }

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  /_ COLUMNS _/;
  if (type === 'column') {
    reorder(catsData, 'UPDATE_CATS', 'categories/reorder');
  }

  /_ JOBS _/;
  if (type === 'job') {
    // 1. Moving within the same column
    if (destination.droppableId === source.droppableId) {
      reorder(jobsData, 'UPDATE_JOBS', 'jobs/reorderColumn');
    }

    //2. Moving between columns
    if (destination.droppableId !== source.droppableId) {
      //a. Get Full draggable object and give it its new category and index
      const draggableJob = jobsData.find((job) => job._id === draggableId);
      // draggableJob.index = destination.index
      console.log(draggableJob);
      console.log({ result: result, jobsData: jobsData, catsData: catsData });
      //Reorder indicies of jobs within source column
      const jobsDataCopy = copyArray(jobsData);

      //b. Get array of jobs in source column excluding draggable job and amend indicies
      const sourceJobsArray = jobsDataCopy.filter((job) => {
        if (
          source.droppableId === job.category._id &&
          draggableId !== job._id
        ) {
          if (job.index < draggableJob.index) {
            return job;
          }
          if (job.index > draggableJob.index) {
            job.index = job.index - 1;
            return job;
          }
        }
      });

      //c. Get array of jobs in destination column plus draggable job and amend indicies

      //c. Get array of jobs exluding those in source column
      const jobsExlSourceCol = jobsDataCopy.filter((job) => {
        if (source.droppableId !== job.category._id) {
          return job;
        }
      });

      //Change category of draggable
      //Reorder indicies of jobs within destination column
    }
  }

  // Moving within the same list
  // const start = catsData[source.droppableId];
  // const finish = catsData[destination.droppableId];

  // if (start === finish) {
  // const newTaskIds = Array.from(start.taskIds);
  // newTaskIds.splice(source.index, 1);
  // newTaskIds.splice(destination.index, 0, draggableId);
  // const newColumn = {
  // ...start,
  // taskIds: newTaskIds,
  // };
  // const newData = {
  // ...data,
  // columns: {
  // ...data.columns,
  // [newColumn.id]: newColumn,
  // },
  // };
  // setData(newData);
  // }

  //Moving from one list to another
  // const startTaskIds = Array.from(start.taskIds);
  // startTaskIds.splice(source.index, 1);
  // const newStart = {
  // ...start,
  // taskIds: startTaskIds,
  // };
  // const finishTaskIds = Array.from(finish.taskIds);
  // finishTaskIds.splice(destination.index, 0, draggableId);
  // const newFinish = {
  // ...finish,
  // taskIds: finishTaskIds,
  // };

  // const newData = {
  // ...data,
  // columns: {
  // ...data.columns,
  // [newStart.id]: newStart,
  // [newFinish.id]: newFinish,
  // },
  // };
  // setData(newData);
});
///////////////////////////////////////////
///////////////////////////////////////////
