import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";

const Home = () => {
  return (
    <section>
      <Header />
      {/* Section with background image */}
      <div className="relative h-screen ">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 1, 0.8), rgba(0, 0, 0, 0.5)), " +
              "url(/images/blueMap.jpg)",
          }}
        ></div>

        {/* Overlay content */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 items-center p-20">
          <div className="p-4 bg-white shadow-md rounded-lg max-w-lg max-h-screen h-auto w-auto">
            <h2 className="text-lg font-bold">Weather Wherever</h2>
            <p className="text-sm text-gray-600 h-[200px]">
              Just enter the location where you need a weather forecast for.
            </p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg max-w-lg max-h-screen h-auto w-auto">
            <h2 className="text-lg font-bold">Weather Warnings</h2>
            <p className="text-sm text-gray-600">Description of Card 2</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg max-w-lg max-h-screen h-auto w-auto">
            <h2 className="text-lg font-bold">Weather news items</h2>
            <p className="text-sm text-gray-600">Description of Card 3</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default Home;
