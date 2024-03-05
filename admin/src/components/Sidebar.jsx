import { GoHome } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { BsListTask } from "react-icons/bs";
import { BiFolder } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";
import { AiOutlineSetting } from "react-icons/ai";
import {
  MdPsychology,
  MdInsertChart,
  MdOutlineNotificationsNone,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="pl-3">
      <ul className="list-none m-0 p-0">
        <p className="title">MAIN</p>
        <Link to="/">
          <li>
            <GoHome className="icon" />
            <span>Home</span>
          </li>
        </Link>

        <p className="title">LISTS</p>
        <li>
          <BsListTask className="icon" />
          <span>Task</span>
        </li>

        <Link to="/users">
          <li>
            <HiOutlineUsers className="icon" />
            <span>Users</span>
          </li>
        </Link>

        <Link to="/lawyers">
          <li>
            <HiOutlineUsers className="icon" />
            <span>Lawyers</span>
          </li>
        </Link>

        <li>
          <BiFolder className="icon" />
          <span>Documents</span>
        </li>

        <p className="title">USEFUL</p>
        <li>
          <MdInsertChart className="icon" />
          <span>States</span>
        </li>

        <li>
          <MdOutlineNotificationsNone className="icon" />
          <span>Notifications</span>
        </li>

        <p className="title">SERVICES</p>
        <li>
          <MdPsychology className="icon" />
          <span>Logs</span>
        </li>

        <li>
          <AiOutlineSetting className="icon" />
          <span>Settings</span>
        </li>

        <p className="title">USER</p>
        <li>
          <FaRegUserCircle className="icon" />
          <span>Profile</span>
        </li>

        <li>
          <LuLogOut className="icon" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
