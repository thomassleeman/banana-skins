const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_CATS':
      return {
        ...state,
        catsData: action.payload,
        loading: false,
      };
    case 'FETCH_JOBS':
      return {
        ...state,
        jobsData: action.payload,
        jobsLoading: false,
      };
    default:
      return { ...state };
  }
};

export default reducer;
