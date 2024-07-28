import React from "react";
import { useNavBar } from "./hooks/useNavBar";

const NavBar = () => {
  const { getActiveColor, handleOnClick } = useNavBar();

  const defaultNavClassName =
    "w-full py-2 border-[#DDDDDD] text-center cursor-pointer";

  return (
    <div className="mb-6 cd-nav">
      <ul className="flex list-none p-0 m-0">
        <li
          onClick={() => handleOnClick("/")}
          className={`${defaultNavClassName} ${getActiveColor("/")}`}
        >
          Calendar
        </li>
        <li
          onClick={() => handleOnClick("/date-picker")}
          className={`${defaultNavClassName} ${getActiveColor("/date-picker")}`}
        >
          DatePicker
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
