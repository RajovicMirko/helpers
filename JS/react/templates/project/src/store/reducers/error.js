const initState = {
  message: null,
  details: null,
};

const error = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ERROR":
      return {
        ...state,
        message: payload.message,
        details: {
          componentStack: payload.stack,
        },
      };
    case "ERROR_CLEAR":
      return {
        ...state,
        message: null,
        details: null,
      };
    default:
      return state;
  }
};

export default error;
