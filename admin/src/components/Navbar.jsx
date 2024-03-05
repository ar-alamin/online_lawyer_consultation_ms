import { AiOutlineSearch } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { BsFullscreen } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="h-[50px] px-5 border-b border-borderColor flex items-center justify-between">
      <div>
        <span className="text-[20px] font-bold text-primaryColor">OLCMS</span>
      </div>

      <div className="flex items-center">
        <div className="item">
          <AiOutlineSearch className="text-[20px] cursor-pointer" />
        </div>

        <div className="item">
          <RxDashboard className="text-[20px]" />
        </div>

        <div className="item">
          <BsFullscreen />
        </div>

        <div className="item">
          <IoMdNotificationsOutline className="text-[20px]" />
          <div className="counter">1</div>
        </div>

        <div className="item">
          <img
            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="w-[30px] h-[30px] rounded-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
