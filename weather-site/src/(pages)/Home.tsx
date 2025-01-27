import Header from "@/components/Header";
import LastSearchedData from "@/components/LastSearchedData";
import Alerts from "@/components/Alerts";
import WeatherNews from "@/components/WeatherNews";
import { useAlertContext } from "@/context/AlertContext";

const Home = () => {
  const { savedAlerts } = useAlertContext();

  return (
    <div className="flex flex-col min-h-screen w-screen gradient-background">
      <section>
        <Header />
      </section>
      <section className="flex flex-row mx-auto pt-5">
        <div className="flex sm:flex-row gap-4 mx-auto w-[80vw] lg:w-[70vw] pt-10 justify-between flex-col-reverse">
          <div className="flex border-4  rounded-lg gradient-container-background border-blue-500">
            <WeatherNews />
          </div>
          <div className="flex flex-col gap-10 rounded-lg">
            <div>
              <LastSearchedData />
            </div>
            <div className="flex mx-auto h-[50px] items-center justify-center w-full pb-5">
              <Alerts alerts={savedAlerts} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
