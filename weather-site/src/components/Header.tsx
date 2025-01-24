import SearchBar from "@/components/SearchBar.tsx";
import { useLocation, Link } from "react-router-dom";
import { clsx } from "clsx";

const Header = () => {
  const path = useLocation();

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center w-screen pb-3",
        path.pathname !== "/" && "gradient-background",
      )}
    >
      <div className="p-5">
        <h1 className="text-white">Weather Forecast</h1>
      </div>
      <div className=" flex items-center justify-center">
        <div className="p-5 ">
          {path.pathname !== "/" && <Link to="/">Home</Link>}
        </div>
        <SearchBar />
      </div>
    </div>
  );
};
export default Header;
