import {
  GET_POST_DATA,
  GET_POST_DATA_SUCCESS,
  GET_POST_DATA_FAIL,
  ADD_NEW_POST,
  ADD_NEW_POST_SUCCESS,
  ADD_NEW_POST_FAIL,
  EDIT_THIS_POST,
  EDIT_THIS_POST_SUCCESS,
  EDIT_THIS_POST_FAIL,
} from "../constants";
import axios from "axios";
import { toast } from "react-toastify";

export const fetchDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_POST_DATA,
    });

    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await axios.get(url);

    dispatch({
      type: GET_POST_DATA_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_POST_DATA_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const addPost = (name, body) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_NEW_POST,
    });

    const config = {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await axios.post(
      url,
      {
        name: name,
        email: body,
        // userId: 1,
      },
      config
    );

    dispatch({
      type: ADD_NEW_POST_SUCCESS,
      payload: response,
    });
    toast("Post added Successfully");
  } catch (error) {
    dispatch({
      type: ADD_NEW_POST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const editPost = (id, name, body) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_THIS_POST,
    });

    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const data = await axios.put(url, {
      id: id,
      name: name,
      email: body,
    });
    dispatch({
      type: EDIT_THIS_POST_SUCCESS,
      payload: data,
    });
    toast("Post edited Successfully");
  } catch (error) {
    dispatch({
      type: EDIT_THIS_POST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
