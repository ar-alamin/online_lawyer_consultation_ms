import {
  MdKeyboardArrowUp,
  MdOutlineAccountBalanceWallet,
} from "react-icons/md";

import { BsFillPersonFill, BsPerson } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <BsFillPersonFill
            className="icons"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "lawyer":
      data = {
        title: "LAWYERS",
        isMoney: false,
        link: "View all lawyers",
        icon: (
          <BsPerson
            className="icons"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "client":
      data = {
        title: "CLIENTS",
        isMoney: false,
        link: "View all clients",
        icon: (
          <HiUsers
            className="icons"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <MdOutlineAccountBalanceWallet
            className="icons"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="flex justify-between flex-1 p-[10px] shadow-boxShadow rounded-[10px] h-[100px]">
      <div className="flex flex-col justify-between">
        <span className="font-bold text-[14px] text-[rgb(160,160,160)]">
          {data.title}
        </span>
        <span className="text-[28px] font-light text-[black]">
          {data.isMoney && "$"} {amount}
        </span>
        <span className=" w-max border-b-[gray] border-b border-solid ">
          {data.link}
        </span>
      </div>
      <div className="flex flex-col justify-between">
        <div className="percentage text-[green]">
          <MdKeyboardArrowUp />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
