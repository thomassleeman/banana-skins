import React, { useContext, useReducer } from 'react';
import reducer from './reducer';

const defaultState = {
  loading: true,
  showAddJob: false,
  showJob: false,
  newJobCategory: {},
  user: null,
  userData: [],
  catsData: [],
  jobsData: [],
  endPoint: '',
  options: {},
  currency: '£',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
