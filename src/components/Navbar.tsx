import { useState } from "react";
import { STRINGS } from "../utils/strings";
import { Sidebar } from "./Sidebar";

export const Navbar = ({
  setAuthenticated,
}: {
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickHamburger = (): void => {
    setIsOpen(true);
  };

  const handleClickCross = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__icon--container">
          <h1>{STRINGS.navbar}</h1>
          <div className="navbar__image" />
        </div>
        <div
        data-cy="hamburger"

          className={
            isOpen === true ? "navbar__cross--hidden" : "navbar__hamburger"
          }
          onClick={handleClickHamburger}
        />
        <div
          className={
            isOpen === true ? "navbar__cross" : "navbar__cross--hidden"
          }
          onClick={handleClickCross}
        />
      </div>
      {isOpen === true ? <Sidebar setAuthenticated={setAuthenticated} /> : ""}
    </>
  );
};
