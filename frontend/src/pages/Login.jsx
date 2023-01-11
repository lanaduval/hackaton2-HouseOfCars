import "../assets/styles/Login.css";

function Login() {
  return (
    <div className="Login">
      <form className="loginForm">
        <input
          className="email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="password"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button className="SubmitLogin" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
