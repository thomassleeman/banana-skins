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
      // console.log('dispatch Jobs');
      return {
        ...state,
        jobsData: action.payload,
        // jobsLoading: false,
      };
    case 'TOGGLE_SHOWADDJOB':
      return {
        ...state,
        showAddJob: !state.showAddJob,
        newJobCategory: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
