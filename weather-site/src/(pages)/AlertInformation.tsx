import Header from "@/components/Header";
import { useLocation } from "react-router-dom";
import { formatDateTime } from "@/lib/utils";

const AlertInformation = () => {
  const location = useLocation();
  const alerts = location.state as Alert[];

  return (
    <div className="flex flex-col w-screen min-h-screen ">
      <div>
        <Header />
      </div>
      <div>
        <div>
          <h1 className="p-10">Alerts</h1>
        </div>
        <div>
          {alerts?.length > 0 ? (
            <div className="flex flex-col pl-5 pr-5 items-center text-left">
              {alerts?.map((_alert, index) => {
                const [mainMessage, prepareMessage] =
                  _alert.desc.split("What Should I Do?");

                return (
                  <div key={index} className="flex flex-col w-[80vw] pb-14">
                    <div className="pb-5">{_alert.headline}</div>
                    <div className="font-bold">
                      {_alert.event}: {_alert.severity}
                    </div>
                    <div>
                      {formatDateTime(_alert.effective)} to{" "}
                      {formatDateTime(_alert.expires)}
                    </div>
                    <div className="pb-10 font-bold">
                      Certainty: {_alert.certainty}
                    </div>
                    <div>{mainMessage}</div>
                    <h2 className="pt-5 font-bold">What Should I do?</h2>
                    <div>{prepareMessage}</div>
                    <div>----------</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>No alert information available</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default AlertInformation;
