import {
  GET_TABLE_DATA,
  GET_TABLE_DATA_SUCCESS,
  GET_TABLE_DATA_FAIL,
  DELETE_THIS_USER,
  DELETE_THIS_USER_SUCCESS,
  DELETE_THIS_USER_FAIL,
  GET_POST_DATA,
  GET_POST_DATA_SUCCESS,
  GET_POST_DATA_FAIL,
  EDIT_THIS_POST,
  EDIT_THIS_POST_SUCCESS,
  EDIT_THIS_POST_FAIL,
  ADD_NEW_POST,
  ADD_NEW_POST_SUCCESS,
  ADD_NEW_POST_FAIL,
} from "../constants";

export const fetchProductReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case GET_TABLE_DATA:
      return {
        ...state,
      };
    case GET_TABLE_DATA_SUCCESS:
      return {
        loading: false,
        products: [action.payload],
      };
    case GET_TABLE_DATA_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteUserReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_THIS_USER:
      return { loading: true };

    case DELETE_THIS_USER_SUCCESS:
      return { loading: false, success: true };

    case DELETE_THIS_USER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const addUserReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      return { loading: true };

    case ADD_NEW_POST_SUCCESS:
      return { loading: false, success: true };

    case ADD_NEW_POST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const fetchPostReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case GET_POST_DATA:
      return {
        ...state,
      };
    case GET_POST_DATA_SUCCESS:
      return {
        loading: false,
        products: [action.payload],
      };
    case GET_POST_DATA_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updatePostReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_THIS_POST:
      return { loading: true };

    case EDIT_THIS_POST_SUCCESS:
      return { loading: false, success: true };

    case EDIT_THIS_POST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
