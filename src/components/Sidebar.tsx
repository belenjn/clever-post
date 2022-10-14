import { NavigateFunction, useNavigate } from "react-router-dom";
import { strings } from "../utils/strings";

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
      <h3 className="sidebar__userName">{strings.sidebarUsername}</h3>
      <button className="sidebar__logOutButton" onClick={handleClickLogOut}>
        {strings.sidebarButton}
      </button>
    </div>
  );
};
