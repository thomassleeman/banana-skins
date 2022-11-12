import { useGetCategoriesQuery } from '../features/api/apiSlice';
import { useCopyArray } from '../utils/useCopyArray';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';

const Test = () => {
  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCategoriesQuery();

  const handleOnClick = () => {
    if (isSuccess) {
      let categoriesCopy = useCopyArray(categories);

      //This is the line that breaks everything. Why?
      categoriesCopy[0].title = 'new title';
      console.log(categoriesCopy);
    } else {
      console.log('else');
    }
  };

  //   if (isSuccess) {
  //     let categoriesCopy = useCopyArray(categories);

  //This is the line that breaks everything. Why?
  // categoriesCopy[0].title = 'new title';
  // console.log(categoriesCopy);
  //   }

  return (
    <DragDropContext onDragEnd={handleOnClick}>
      <Droppable droppableId="Kanban" direction="horizontal" type="column">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <Draggable draggableId="1">
              <btn>Button</btn>
            </Draggable>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
export default Test;
