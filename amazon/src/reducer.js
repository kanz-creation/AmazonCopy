export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      ///logic fro adding items
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
