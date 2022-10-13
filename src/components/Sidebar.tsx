import { NavigateFunction, useNavigate } from "react-router-dom";

export const Sidebar = ({
  setAuthenticated,
}: {
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate: NavigateFunction = useNavigate();

  const handleClickLogOut = (): void => {
    setAuthenticated(false);
    localStorage.removeItem("login");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <div className="sidebar__userImage" />
      <h3 className="sidebar__userName">User Test Name</h3>
      <h5 className="sidebar__titleLatestPosts">Latest posts edited:</h5>
      <ul className="sidebar__latestPost--list">
        <li className="sidebar__latestPost--items">Primera card</li>
        <li className="sidebar__latestPost--items">Segunda card</li>
        <li className="sidebar__latestPost--items">Tercera card</li>
      </ul>
      <button className="sidebar__logOutButton" onClick={handleClickLogOut}>
        Log Out
      </button>
    </div>
  );
};
