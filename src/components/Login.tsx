import { NavigateFunction, useNavigate } from "react-router-dom";
import { user1 } from "../types/user";
import { STRINGS } from "../utils/strings";

export const Login = ({
  setAuthenticated,
}: {
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate: NavigateFunction = useNavigate();

  const handleClick = (): void => {
    setAuthenticated(true);

    let date: Date = new Date();
    const loginKey: string = "LoginKey";

    localStorage.setItem("login", date.toLocaleString());

    navigate("/");
  };

  return (
    <div className="login animate__animated animate__fadeIn animate__faster">
      <h1 className="login__title">{STRINGS.loginTitle}</h1>
      <h3 className="login__secondTitle">{STRINGS.loginSecondTitle}</h3>

      <div className="login__data--container">
        <div className="login__data--logo" />

        <h4 className="login__data--title">{STRINGS.loginUsername}</h4>
        <input
          required
          type="text"
          defaultValue={user1.username}
          className="login__data--input"
        />

        <h4 className="login__data--title">{STRINGS.loginPassword}</h4>
        <input
          required
          type="password"
          defaultValue={user1.password}
          className="login__data--input"
        />

        <button className="login__data--button" onClick={handleClick}>
          {STRINGS.loginButton}
        </button>
      </div>
    </div>
  );
};
