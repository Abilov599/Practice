//ACTION CREATORS

export const addToFavoritesAction = (obj) => {
  return {
    type: "ADD_TO_FAVORITES",
    payload: obj,
  };
};
export const removeFromFavoritesAction = (id) => {
  console.log(id);
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: id,
  };
};
export const removeAllFavoritesAction = () => {
  return {
    type: "REMOVE_ALL_FAVORITES",
  };
};
