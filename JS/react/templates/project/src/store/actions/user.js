export const editUser = (data) => {
  return async (dispatch, getState, { api }) => {
    dispatch({ type: "EDIT_USER" });

    // some api call using middleware that is imported in index.js and passed to thunk
    // const payload = await api.user.get(data.id)
    const payload = data;
    payload.status = 200;

    if (payload.status < 400) {
      dispatch({ type: "EDIT_USER_SUCCES", payload });
    } else {
      dispatch({ type: "EDIT_USER_ERROR" });
      dispatch({ type: "ERROR", payload: { message: "Error on user Update" } });
    }
  };
};
