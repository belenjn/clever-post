import { NavigateFunction, useNavigate } from "react-router-dom";
import { STRINGS } from "../utils/strings";

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
    <div 
    className="sidebar" 
    >
      <div className="sidebar__userImage" />
      <h3 className="sidebar__userName">{STRINGS.sidebarUsername}</h3>
      <button
        data-cy="logout"
        className="sidebar__logOutButton"
        onClick={handleClickLogOut}
      >
        {STRINGS.sidebarButton}
      </button>
    </div>
  );
};
