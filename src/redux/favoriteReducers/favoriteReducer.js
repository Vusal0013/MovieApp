const initialState = {
  favorite: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };
    default:
      return state;
  }
};

export default favoriteReducer;
