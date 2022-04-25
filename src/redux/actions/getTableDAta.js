import axios from "axios";
import {
  GET_TABLE_DATA,
  GET_TABLE_DATA_SUCCESS,
  GET_TABLE_DATA_FAIL,
  DELETE_THIS_USER,
  DELETE_THIS_USER_SUCCESS,
  DELETE_THIS_USER_FAIL,
} from "../constants";
import { toast } from "react-toastify";

export const getData = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_TABLE_DATA,
    });
    // const url = "https://jsonplaceholder.typicode.com/users/1/posts";
    const url = "https://jsonplaceholder.typicode.com/users";
    // const url = "https://electronic-ecommerce.herokuapp.com/api/v1/product";

    const response = await axios.get(url);

    dispatch({
      type: GET_TABLE_DATA_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_TABLE_DATA_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteuser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_THIS_USER,
    });

    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    const { data } = await axios.delete(url);
    console.log(data);
    dispatch({
      type: DELETE_THIS_USER_SUCCESS,
      payload: data,
    });
    toast("User deleted Successfully");
  } catch (error) {
    dispatch({
      type: DELETE_THIS_USER_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
