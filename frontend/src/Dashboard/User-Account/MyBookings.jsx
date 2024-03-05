import { BASE_URL } from "./../../config";
import useFetchData from "./../../hooks/useFetchData";
import useGetProfile from "../../hooks/useFetchData";
import HashLoader from "react-spinners/HashLoader";
import Booking from "./Booking";

const MyBookings = () => {
  const {
    data: myAppointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  const {
    data: userData,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);


  return (
    <div>
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
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-5">
            <Booking myAppointments={myAppointments} userName={userData.name}/>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
