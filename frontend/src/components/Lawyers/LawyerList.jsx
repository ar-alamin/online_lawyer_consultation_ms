import { lawyers } from "../../assets/data/lawyers";
import LawyerCard from "./LawyerCard";

import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchDats";
import Loader from "../Loader/Loading";
import Error from "../Error/Error";

const LawyerList = () => {
  const { data: lawyers, loading, error } = useFetchData(`${BASE_URL}/lawyers`);

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {lawyers.map((lawyer) => (
            <LawyerCard key={lawyer._id} lawyer={lawyer} />
          ))}
        </div>
      )}
    </>
  );
};

export default LawyerList;
