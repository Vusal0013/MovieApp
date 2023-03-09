const initialState = {
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      if (action.payload) {
        return {
          ...state,
          movies: action.payload,
        };
      }
    default:
      return state;
  }
};

export default movieReducer;
