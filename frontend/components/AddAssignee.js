import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import {
  CalendarIcon,
  PaperClipIcon,
  TagIcon,
  UserCircleIcon,
} from '@heroicons/react/20/solid';

const assignees = [
  { name: 'Unassigned', value: null },
  {
    name: 'Wade Cooper',
    value: 'wade-cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More items...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function AddAssignee() {
  const [assigned, setAssigned] = useState(assignees[0]);

  return (
    <Listbox
      as="div"
      value={assigned}
      onChange={setAssigned}
      className="flex-shrink-0"
    >
      {({ open }) => (
        <>
          <Listbox.Label className="sr-only"> Assign </Listbox.Label>
          <div className="relative">
            <Listbox.Button className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 py-2 px-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
              {assigned.value === null ? (
                <UserCircleIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-300 sm:-ml-1"
                  aria-hidden="true"
                />
              ) : (
                <img
                  src={assigned.avatar}
                  alt=""
                  className="h-5 w-5 flex-shrink-0 rounded-full"
                />
              )}

              <span
                className={classNames(
                  assigned.value === null ? '' : 'text-gray-900',
                  'hidden truncate sm:ml-2 sm:block'
                )}
              >
                {assigned.value === null ? 'Assign' : assigned.name}
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {assignees.map((assignee) => (
                  <Listbox.Option
                    key={assignee.value}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-gray-100' : 'bg-white',
                        'relative cursor-default select-none py-2 px-3'
                      )
                    }
                    value={assignee}
                  >
                    <div className="flex items-center">
                      {assignee.avatar ? (
                        <img
                          src={assignee.avatar}
                          alt=""
                          className="h-5 w-5 flex-shrink-0 rounded-full"
                        />
                      ) : (
                        <UserCircleIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                      )}

                      <span className="ml-3 block truncate font-medium">
                        {assignee.name}
                      </span>
                    </div>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
