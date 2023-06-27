import UserManagementInterface from "../components/UserManagementInterface";
import "../index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Main() {
  return (
    <div className="Main">
      <UserManagementInterface />
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default Main;
