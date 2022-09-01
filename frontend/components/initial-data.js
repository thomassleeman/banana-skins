const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2'],
};

export default initialData;

[
  {
    _id: '62c702a671263bc37e52667b',
    title: 'Category 1',
    description: 'Aenean sit amet justo. Morbi ut odio.',
    subtotal: 0,
    index: 0,
  },
  {
    _id: '62c702a671263bc37e52667c',
    title: 'Category 2',
    description: 'Sit amet justo. Morbi ut.',
    subtotal: 0,
    index: 1,
  },
  {
    _id: '62c702a671263bc37e52667d',
    title: 'Category 3',
    description: 'Amet justo. Morbi.',
    subtotal: 0,
    index: 2,
  },
];
