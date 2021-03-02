export const initialState = {
  loading: true,
  response: [],
};

export const SUCCESS = "success";

export const reducer = (state, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        loading: false,
        response: [action.payload],
        error: null,
      };

    default:
      return state;
  }
};
