import Chart from "../components/Chart";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="menuContainer">
          <Sidebar />
        </div>

        <div className="contentContainer">
          <div className="flex p-5 gap-5">
            <Widget type="user" />
            <Widget type="lawyer" />
            <Widget type="client" />
            <Widget type="balance" />
          </div>

          <div className="flex gap-5 py-[5px] px-5">
            <Featured />
            <Chart title="Last 6 Months (Clients)" aspect={2 / 1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
