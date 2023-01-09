let initialValue = { count: 0 };
export const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "INCREMENT_BY_ONE":
      return { ...state, count: state.count + 1 };
    case "DECREMENT_BY_ONE":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
