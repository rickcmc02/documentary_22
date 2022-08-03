export const initialState = {
  page: "tech",
};

export const PUT_PAGE_REQUEST = "PUT_PAGE_REQUEST";

export const putPageRequest = (status) => ({
  type: PUT_PAGE_REQUEST,
  status,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_PAGE_REQUEST:
      return { ...state, page: action.data };
    default:
      return state;
  }
};

export default reducer;
