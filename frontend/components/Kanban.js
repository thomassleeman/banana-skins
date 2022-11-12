import { DragDropContext } from 'react-beautiful-dnd';
import {
  useGetCategoriesQuery,
  useReorderCategoriesMutation,
} from '../features/api/apiSlice';
import Column from './Column';
import { Droppable } from 'react-beautiful-dnd';
import Loading from 'react-loading';

const Kanban = () => {
  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCategoriesQuery();

  const [reorderCategories, reOrderCategoriesMetaData] =
    useReorderCategoriesMutation();

  ///////////////////////////////////////////
  /////////HANDLE ON DRAG END////////////////
  ///////////////////////////////////////////
  const handleOnDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    /* COLUMNS */
    if (type === 'column') {
      let newColumnOrder = JSON.parse(JSON.stringify(categories));

      // a) reorder columns based on drag
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, categories[source.index]);

      // b) Update index of each category
      newColumnOrder = newColumnOrder.map((col) => {
        col.catIndex = newColumnOrder.indexOf(col);
        return col;
      });

      return;
    }

    /* JOBS */
    if (type === 'job') {
      const start = source.droppableId;
      const finish = destination.droppableId;
      const sourceCat = categories.find((cat) => cat._id === start);
      const destinationCat = categories.find((cat) => cat._id === finish);
      const sourceCatIndex = categories.indexOf(sourceCat);
      const destinationCatIndex = categories.indexOf(destinationCat);

      const newSourceJobs = sourceCat.jobs;
      const newDestinationJobs = destinationCat.jobs;
      const movingJob = sourceCat.jobs[source.index];

      newSourceJobs.splice(source.index, 1);

      if (start === finish) {
        newSourceJobs.splice(destination.index, 0, movingJob);
      } else {
        newDestinationJobs.splice(destination.index, 0, movingJob);
      }

      const newSourceCat = {
        ...sourceCat,
        jobs: newSourceJobs,
      };

      const newDestinationCat = {
        ...destinationCat,
        jobs: newDestinationJobs,
      };

      //update categories by replacing original with updated source column
      const newcategories = JSON.parse(JSON.stringify(categories));
      newcategories.splice(sourceCatIndex, 1, newSourceCat);
      newcategories.splice(destinationCatIndex, 1, newDestinationCat);

      dispatch({ type: 'UPDATE_CATS', payload: newcategories });
      // useUpdateDatabase('categories/reorder', 'PUT', newcategories);
      return;
    }
  };
  ///////////////////////////////////////////
  ///////////////////////////////////////////

  switch (isSuccess) {
    case false:
      return (
        <>
          <Loading />
        </>
      );
    case true:
      return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="Kanban" direction="horizontal" type="column">
            {(provided) => (
              <div
                className=" flex flex-nowrap gap-x-8 overflow-x-scroll snap-x snap-mandatory pt-2 px-2 sm:px-6 md:px-8"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {categories.map((cat, index) => {
                  return (
                    <Column
                      key={cat._id}
                      catId={cat._id}
                      title={cat.title}
                      description={cat.description}
                      jobs={cat.jobs}
                      index={index}
                    />
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      );
  }
};

export default Kanban;
