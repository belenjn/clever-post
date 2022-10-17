import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { user1 } from "../types/user";
import { STRINGS } from "../utils/strings";

export const Login = ({
  setAuthenticated,
}: {
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate: NavigateFunction = useNavigate();

  const handleClick = (): void => {
    if (username === user1.username && password === user1.password) {
      setAuthenticated(true);

      let date: Date = new Date();

      localStorage.setItem("login", date.toLocaleString());

      navigate("/");
    } else {
      Swal.fire("Login failed", "Try again", "error");
      navigate("/login");
    }
  };

  return (
    <div className="login animate__animated animate__fadeIn animate__faster">
      <h1 className="login__title animate__animated animate__flipInX">{STRINGS.loginTitle}</h1>
      <h3 className="login__secondTitle animate__animated animate__flipInX">{STRINGS.loginSecondTitle}</h3>

      <div className="login__data--container animate__animated animate__flipInX">
        <div className="login__data--logo" />

        <h4 className="login__data--title">{STRINGS.loginUsername}</h4>
        <input
          placeholder="user1"
          data-cy="user-input"
          required
          type="text"
          onChange={(event) => setUsername(event.target.value)}
          className="login__data--input"
        />

        <h4 className="login__data--title">{STRINGS.loginPassword}</h4>
        <input
          placeholder="123456"
          data-cy="password-input"
          required
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          className="login__data--input"
        />

        <button
          data-cy="click"
          className="login__data--button"
          onClick={handleClick}
        >
          {STRINGS.loginButton}
        </button>
      </div>
    </div>
  );
};
