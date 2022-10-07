export const Login = () => {
  return (
    <div className="login">
      <h1 className="login__title">WELCOME TO CLEVER-POST</h1>
      <h3 className="login__secondTitle">
        Log in and share your day with the rest of the world.
      </h3>

      <div className="login__data--container">
        <div className="login__data--logo" />

        <h4 className="login__data--title">Username:</h4>
        <input type="text" className="login__data--input" />

        <h4 className="login__data--title">Password:</h4>
        <input type="password" className="login__data--input" />

        <button className="login__data--button">Log In</button>
      </div>
    </div>
  );
};
