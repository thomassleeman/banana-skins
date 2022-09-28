// import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { ChevronRightIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

// const Container = styled.div`
//   border: 2px solid #ffff;
//   border-radius: 12px;
//   padding: 8px;
//   margin-bottom: 8px;
//   background-color: #fee402;
//   color: #483401;
// `;

const Job = ({ job, index }) => {
  const [newJob, setNewJob] = useState(false);
  // job._id.includes('-') ? setNewJob(true) : setNewJob(false);

  return (
    <Draggable draggableId={job._id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`bg-yellow-300 border-solid rounded-lg p-4 mb-8 ${
            job._id.includes('-') ? setNewJob(true) : setNewJob(false)
          }`}
          // className="overflow-hidden rounded-md bg-white px-6 py-4 shadow"
        >
          <div className="flex">
            <div className="w-4/5">
              <h4 className="text-md font-bold cursor-pointer">{job.title}</h4>
              <p className="mt-1 text-sm">
                {job.description?.length >= 29
                  ? `${job.description?.substring(0, 30)}...`
                  : job.description}
              </p>
            </div>
            {/* <div className="ml-4 flex-shrink-0"> */}
            <ChevronRightIcon
              onClick={null}
              className="self-center ml-1 w-8 text-green-400 cursor-pointer"
            />

            {/* <svg
                className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
                preserveAspectRatio="none"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 200 200"
                aria-hidden="true"
              >
                <path
                  vectorEffect="non-scaling-stroke"
                  strokeWidth={1}
                  d="M0 0l200 200M0 200L200 0"
                />
              </svg> */}
            {/* </div> */}
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default Job;
