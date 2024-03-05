import Lawyertable from "../components/LawyerTable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Lawyer = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="menuContainer">
          <Sidebar />
        </div>

        <div className="contentContainer">
          <Lawyertable />
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
