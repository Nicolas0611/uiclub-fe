import { ToastContainer } from "react-toastify";

const Toast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      pauseOnHover={true}
      draggable={false}
    />
  );
};

export default Toast;
