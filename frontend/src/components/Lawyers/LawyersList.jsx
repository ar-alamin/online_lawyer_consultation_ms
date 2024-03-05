import LawyerCard from "./LawyerCard.jsx";
import { BASE_URL } from "../../config.js";
import useFetchData from "../../hooks/useFetchData.js";
import HashLoader from "react-spinners/HashLoader.js";

const LawyersList = () => {
  const { data: lawyers, loading, error } = useFetchData(`${BASE_URL}/lawyers`);
  return (
    <>
      {loading && (
        <div className="flex items-center justify-center w-full h-full">
          <HashLoader color="#0067FF" />
        </div>
      )}

      {error && (
        <div className="flex items-center justify-center w-full h-full">
          <h3 className="text-headingColor text-[20px] font-semibold leading-[30px]">
            {error}
          </h3>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {lawyers?.map(lawyer => (
            <LawyerCard lawyer={lawyer} key={lawyer._id} />
          ))}
        </div>
      )}
    </>
  );
};

export default LawyersList;
