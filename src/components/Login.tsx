import { NavigateFunction, useNavigate } from "react-router-dom";
import { user1 } from "../types/user";
import { strings } from "../utils/strings";

export const Login = ({
  setAuthenticated,
}: {
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate: NavigateFunction = useNavigate();

  const handleClick = (): void => {
    setAuthenticated(true);

    let date: Date = new Date();

    localStorage.setItem("login", date.toLocaleString());

    navigate("/");
  };

  return (
    <div className="login">
      <h1 className="login__title">{strings.loginTitle}</h1>
      <h3 className="login__secondTitle">{strings.loginSecondTitle}</h3>

      <div className="login__data--container">
        <div className="login__data--logo" />

        <h4 className="login__data--title">{strings.loginUsername}</h4>
        <input
          required
          type="text"
          defaultValue={user1.username}
          className="login__data--input"
        />

        <h4 className="login__data--title">{strings.loginPassword}</h4>
        <input
          required
          type="password"
          defaultValue={user1.password}
          className="login__data--input"
        />

        <button className="login__data--button" onClick={handleClick}>
          {strings.loginButton}
        </button>
      </div>
    </div>
  );
};
