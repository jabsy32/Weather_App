import SearchBar from "@/components/SearchBar.tsx";

const Header = () => {
  return (
    <section className="flex flex-col top-0 w-screen bg-gradient-to-r h-[150px] bg-gray-800 text-center">
      <div className=" flex flex-row font-bold h-[50px] items-center justify-between text-white pt-5 pr-5">
        <h1 className="flex-1">Weather Forecast</h1>
        <div className="">
          <img src="/icons/settingsIcon.jpg" alt="icon" className="w-6" />
        </div>
      </div>

      <div className="p-5">
        <SearchBar />
      </div>
    </section>
  );
};
export default Header;
