import React, { useContext, useReducer } from 'react';
import reducer from './reducer';

const defaultState = {
  loading: true,
  user: null,
  userData: [],
  catData: [],
  jobsData: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const endPoints = {
    user: {
      projects: '',
      amend: '',
    },
    projects: {
      all: '',
      create: '',
      delete: '',
      amend: '',
    },
    columns: {
      all: '',
      create: '',
      delete: '',
      amend: '',
    },
    jobs: {
      all: '',
      create: '',
      delete: '',
      amend: '',
    },
  };

  const hello = 'hello World';

  return (
    <AppContext.Provider value={{ ...state, endPoints, dispatch, hello }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
