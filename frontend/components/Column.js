import Job from './Job';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { PlusIcon } from '@heroicons/react/24/outline';

const Column = ({ catId, title, description, index, jobs }) => {
  const showAddJob = false;

  return (
    <Draggable draggableId={catId} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          // className="flex flex-col rounded-xl min-w-24	 bg-yellow-400 m-5"
          className="self-start snap-always snap-center flex-none flex flex-col basis-full md:basis-1/5 sm:basis-1/3 shrink-0 bg-yellow-400 max-h-fit  rounded-xl shadow sm:rounded-md p-3 "
        >
          <h2
            {...provided.dragHandleProps}
            className="p-6 text-2xl font-light text-yellow-900 bg-yellow-300 rounded-lg"
          >
            {title}
          </h2>
          <h5 className="px-4 py-6 text-yellow-900">{description}</h5>
          <Droppable droppableId={catId} type="job">
            {(provided) => (
              <ul
                ref={provided.innerRef}
                {...provided.droppableProps}
                // className="py-5 px-2 grow-[1] min-h-10"
                className="max-h-fit"
              >
                {jobs.map((job, index) => {
                  return <Job key={job._id} job={job} index={index} />;
                })}

                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          <button
            style={{ cursor: 'pointer' }}
            onClick={(e) =>
              dispatch({
                type: 'TOGGLE_SHOWADDJOB',
                payload: { title: title, id: catId },
              })
            }
          >
            {showAddJob === false ? (
              <PlusIcon className="h-8 w-8 text-blue-500 m- position-fixed hover:text-green-700 m-2" />
            ) : null}
          </button>
        </div>
      )}
    </Draggable>
  );
};
// };

export default Column;
