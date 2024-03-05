import Datatable from "../components/Datatable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const User = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="menuContainer">
          <Sidebar />
        </div>

        <div className="contentContainer">
          <Datatable />
        </div>
      </div>
    </div>
  );
};

export default User;
