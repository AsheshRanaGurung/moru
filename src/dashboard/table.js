import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTable } from "react-table";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { deleteuser } from "../redux/actions/getTableDAta";
import { NavLink } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { addPost } from "../redux/actions/PostDetail";
import CreateUserForm from "./Form";
import EditUserForm from "./EditUserForm";

const ReactTable = () => {
  const tableColumn = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Email",
      accessor: "email",
    },

    {
      Header: "Action",
      Cell: ({ row }) => (
        <>
          <NavLink to={`/post/${row.original.id}`}>
            <button
              className="tableButton"
              style={{ color: "green", marginRight: "0.75rem" }}
            >
              <VisibilityIcon />
            </button>
          </NavLink>
          <button
            className="tableButton"
            style={{ color: "blue", marginRight: "0.75rem" }}
            onClick={() =>
              editThisPost(
                row.original.id,
                row.original.name,
                row.original.email
              )
            }
          >
            <EditIcon />
          </button>
          <button
            className="tableButton"
            style={{ color: "#e78787" }}
            onClick={() => deleteThisUser(row.original.id)}
          >
            <DeleteIcon />
          </button>
        </>
      ),
    },
  ];
  const [isOpen, setIsOpen] = React.useState(false);
  const [isEditOpen, setIsEditOpen] = React.useState(false);
  const [editId, setEditId] = useState("");
  const [editname, setEditname] = useState("");
  const [editemail, setEditemail] = useState("");

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const showModal2 = () => {
    setIsEditOpen(true);
  };

  const hideModal2 = () => {
    setIsEditOpen(false);
  };

  const userdetails = useSelector((state) => state.fetchData);
  const { products, loading } = userdetails;

  const dispatch = useDispatch();
  const columns = useMemo(() => tableColumn, []);
  const data = useMemo(() => products[0]?.data, [products[0]?.data]);

  const deleteThisUser = (id) => {
    dispatch(deleteuser(id));
  };

  const editThisPost = (id, title, body) => {
    setEditId(id);
    setEditname(title);
    setEditemail(body);
    setIsEditOpen(true);
  };
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: data || [],
    });

  useEffect(() => {
    // dispatch(fetchUser(userInfo));
  }, []);

  return (
    <div>
      <div className="User-heading">
        <div>
          <button className="add-users" onClick={showModal}>
            Create Post
          </button>
          {isOpen && (
            <Modal style={{ top: "4.25rem" }} show={isOpen} onHide={hideModal}>
              <Modal.Header>
                <Modal.Title>Create Post by Formik</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CreateUserForm setIsOpen={setIsOpen} />
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="add-users"
                  style={{ background: "#d32d2d" }}
                  onClick={hideModal}
                >
                  Cancel
                </button>
                {/* <button onClick={() => addNewPost()}>Save</button> */}
              </Modal.Footer>
            </Modal>
          )}
          {isEditOpen && (
            <Modal
              style={{ top: "4.25rem" }}
              show={isEditOpen}
              onHide={hideModal2}
            >
              <Modal.Header>
                <Modal.Title>Edit Post by Formik</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <EditUserForm
                  setIsEditOpen={setIsEditOpen}
                  id={editId}
                  name={editname}
                  body={editemail}
                />
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="add-users"
                  style={{ background: "#d32d2d" }}
                  onClick={hideModal2}
                >
                  Cancel
                </button>
                {/* <button onClick={() => addNewPost()}>Save</button> */}
              </Modal.Footer>
            </Modal>
          )}
        </div>
      </div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <Table variant="striped" colorScheme="gray" {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <TableCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default ReactTable;
