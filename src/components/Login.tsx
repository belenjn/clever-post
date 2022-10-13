import { Navigate, NavigateFunction, useNavigate } from "react-router-dom";

export const Login = ({
  setAuthenticated,
}: {
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate: NavigateFunction = useNavigate();

  interface User {
    username: string;
    password: string;
  }

  const user1: User = {
    username: "user1",
    password: "123456",
  };

  const handleClick = (): void => {
    setAuthenticated(true);

    let date: Date = new Date();

    localStorage.setItem("login", date.toLocaleString());

    navigate("/");
  };

  return (
    <div className="login">
      <h1 className="login__title">WELCOME TO CLEVER-POST</h1>
      <h3 className="login__secondTitle">
        Log in and share your day with the rest of the world.
      </h3>

      <div className="login__data--container">
        <div className="login__data--logo" />

        <h4 className="login__data--title">Username:</h4>
        <input
          required
          type="text"
          defaultValue={user1.username}
          className="login__data--input"
        />

        <h4 className="login__data--title">Password:</h4>
        <input
          required
          type="password"
          defaultValue={user1.password}
          className="login__data--input"
        />

        <button className="login__data--button" onClick={handleClick}>
          Log In
        </button>
      </div>
    </div>
  );
};
