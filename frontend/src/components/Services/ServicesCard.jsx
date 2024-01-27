import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div className=" py-[30px] px-3 lg:px-[20px] ">
      <h2 className="text-[26px] leading-9 font-[700] text-headingColor">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {desc}
      </p>

      <div className="flex items-center justify-between mt-[30px]">
        <Link
          to="/lawyers"
          className=" w-[28px] h-[28px] rounded-full border border-solid border-[#181A1E] flex  items-center justify-center group hover:bg-[#0067FF] hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-4" />
        </Link>

        <span
          className={`w-[30px] h-[30px] flex items-center justify-center  text-[18px] leading-[30px] font-[600]  `}
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
