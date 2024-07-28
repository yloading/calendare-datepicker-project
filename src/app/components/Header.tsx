import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleOnClick = (path: string) => navigate(path);

  console.log(location.pathname);
  return (
    <div className="cd-nav">
      <ul>
        <li
          onClick={() => handleOnClick("/")}
          className={`${location.pathname === "/" && "active"}`}
        >
          Calendar
        </li>
        <li
          onClick={() => handleOnClick("/date-picker")}
          className={`${location.pathname === "/date-picker" && "active"}`}
        >
          DatePicker
        </li>
      </ul>
    </div>
  );
};

export default Header;
