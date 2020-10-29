const initState = {
  firstName: "Mirko",
  lastName: "Rajović",
};

const user = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "EDIT_USER":
      return {
        ...state,
        isLoading: true,
      };
    case "EDIT_USER_ERROR":
      return {
        ...state,
        isLoading: false,
      };
    case "EDIT_USER_SUCCES":
      return {
        ...state,
        firstName: payload.firstName,
        lastName: payload.lastName,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default user;
