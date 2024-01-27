import useFetchData from "../../hooks/useFetchDats";
import { BASE_URL } from "../../config";
import LawyerCard from "./../../components/Lawyers/LawyerCard";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loader/Loading";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  return (
    <div>
      {loading && !error && <Loading />}

      {error && !loading && <Error drrMessage={error} />}

      {!loading && !error && (
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-5">
          {appointments?.map((lawyer) => (
            <LawyerCard lawyer={lawyer} key={lawyer.id} />
          ))}
        </div>
      )}

      {!loading && !error && appointments.length === 0 && (
        <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-[#0067FF]">
          Your did not book any lawyer yet!
        </h2>
      )}
    </div>
  );
};

export default MyBookings;
