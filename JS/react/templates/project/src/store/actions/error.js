export const setError = (payload) => {
  return (dispatch, getState) => {
    dispatch({ type: "ERROR", payload });
  };
};

export const clearError = () => {
  return (dispatch, getState) => {
    dispatch({ type: "ERROR_CLEAR" });
  };
};
