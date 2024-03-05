import { FiMoreVertical } from "react-icons/fi";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const Featured = () => {
  return (
    <div className="flex-[2] shadow-boxShadow p-[10px]">
      <div className="flex items-center justify-between text-[gray]">
        <h1 className="text-[14px] font-medium">Total Clients</h1>
        <FiMoreVertical fontSize="small" />
      </div>
      <div className="p-5 flex flex-col items-center justify-center gap-[15px]">
        <div className="w-[100px] h-[100px]">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="font-medium text-[gray]">Total clients made today</p>
        <p className="text-[30px]">20</p>
        <p className="font-light text-[12px] text-[gray] items-center">
          Previous clients. Last client may not be included.
        </p>

        <div className="w-full flex items-center justify-between">
          <div className="text-center">
            <div className="text-[14px] text-[gray]">Target</div>
            <div className="itemResult text-[red]">
              <MdOutlineKeyboardArrowDown fontSize="small" />
              <div className="resultAmount">50</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-[14px] text-[gray]">Last Week</div>
            <div className="itemResult text-[green]">
              <MdOutlineKeyboardArrowUp fontSize="small" />
              <div className="resultAmount">12</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-[14px] text-[gray]">Last Month</div>
            <div className="itemResult text-[green]">
              <MdOutlineKeyboardArrowUp fontSize="small" />
              <div className="resultAmount">50</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
