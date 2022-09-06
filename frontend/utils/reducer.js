const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'UPDATE_CATS':
      return {
        ...state,
        catsData: action.payload,
        loading: false,
      };
    case 'UPDATE_JOBS':
      return {
        ...state,
        jobsData: action.payload,
        // jobsLoading: false,
      };

    default:
      return { ...state };
  }
};

export default reducer;
