import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetail } from "../redux/actions/PostDetail";

const DetailPost = () => {
  let { id } = useParams();

  const postdetails = useSelector((state) => state.fetchPost);
  const { products, loading } = postdetails;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetail(id));
  }, []);
  return (
    <>
      <NavLink to={"/"}>
        <button className="add-users">Go Back</button>
      </NavLink>
      <div>DetailPost</div>
      <b>id:</b>
      {products[0]?.data.id} <br></br>
      <b> Name:</b>
      {products[0]?.data.name}
      <br />
      <b> Email:</b>
      {products[0]?.data.email}
      <br />
      <b>Phone:</b>
      {products[0]?.data.phone}
      <br />
      <b>Website:</b>
      {products[0]?.data.website}
    </>
  );
};

export default DetailPost;
