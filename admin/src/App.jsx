import React, { useContext } from "react";
import LoginAdmin from "./pages/LoginAdmin";
import { ToastContainer, toast } from "react-toastify";
import { AdminContext } from "./context/AdminContext";

const App = () => {
  const { aToken } = useContext(AdminContext);

  return aToken ? (
    <div>
      <ToastContainer />
    </div>
  ) : (
    <>
      <LoginAdmin />
      <ToastContainer />
    </>
  );
};

export default App;
