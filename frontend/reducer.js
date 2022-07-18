const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'DATA_UPDATE':
      return {
        ...state,
        jobsData: action.payload,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default reducer;
