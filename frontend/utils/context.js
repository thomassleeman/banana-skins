import React, { useContext, useReducer } from 'react';
import reducer from './reducer';

const defaultState = {
  loading: true,
  jobsLoading: true,
  user: null,
  userData: [],
  catsData: [],
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

  return (
    <AppContext.Provider value={{ ...state, endPoints, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
