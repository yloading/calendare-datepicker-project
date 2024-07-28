import { useNavigate } from "react-router-dom";

export const useNavBar = () => {
  const navigate = useNavigate();
  const handleOnClick = (path: string) => navigate(path);

  const getActiveColor = (path: string) => {
    if (location.pathname === path) {
      return "bg-nav-color text-white before:h-0 before:content-[' '] before:absolute before:border-x-8 before:border-x-transparent before:border-b-8 before:border-b-white before:top-8 before:ml-6";
    }
    return "text-black bg-[#DDE6ED]";
  };

  return {
    handleOnClick,
    getActiveColor,
  };
};
