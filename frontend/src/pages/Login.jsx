import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../assets/styles/Login.css";
import NavbarOtherPages from "@components/layout-components/NavbarOtherPages/NavbarOtherPages";
import Footer from "@components/layout-components/Footer/Footer";
import instance from "../helpers/axios";

function Login() {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    instance
      .post("/login", loginUser)
      .then(() => navigate("/CompanyPage"))
      .catch((err) =>
        console.error(err, toast.error("Wrong informations ! ❌"))
      );
  };

  return (
    <>
      <ToastContainer
        theme="dark"
        autoClose={2000}
        position="bottom-center"
        className="toast-container"
        toastClassName="dark-toast"
      />
      <NavbarOtherPages />
      <div className="Container">
        <div className="Login">
          <form className="loginForm" onSubmit={handleLogin}>
            <input
              className="email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChangeLogin}
              required
            />
            <input
              className="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChangeLogin}
              required
            />
            <button className="SubmitLogin" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
