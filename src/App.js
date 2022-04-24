import logo from "./logo.svg";
import "./App.css";
import ResponsiveDrawer from "./dashboard/dashboard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getData } from "./redux/actions/getTableDAta";

function App() {
  const userdetails = useSelector((state) => state.fetchData);
  const { products, loading } = userdetails;

  const useradd = useSelector((state) => state.addUser);
  const { success: addsuccess } = useradd;

  const userupdate = useSelector((state) => state.updatePost);
  const { success: updatesuccess } = userupdate;

  const userDelete = useSelector((state) => state.deleteUser);
  const { success } = userDelete;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [success, addsuccess, updatesuccess]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
      />
      <ResponsiveDrawer />
    </>
  );
}

export default App;
