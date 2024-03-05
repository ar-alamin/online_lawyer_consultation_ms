/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";

const Booking = ({ myAppointments , userName}) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Specialization
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            Time Slots
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {myAppointments?.map(item => (
          <tr key={item._id} className="bg-white border-b  hover:bg-gray-50 ">
            <td className="px-6 py-4">{item.name}</td>
            <td className="px-6 py-4">{item.email}</td>
            <td className="px-6 py-4">{item.specialization}</td>
            <td className="px-6 py-4">{item.ticketPrice}</td>
            <td className="px-6 py-4">{item.timeSlots[0]?.day}</td>
            <td className="px-6 py-4">
              <Link to={`/chat/${userName}/${item.name}`}>
                <button type="button" class="btn btn-primary">Chat</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Booking;