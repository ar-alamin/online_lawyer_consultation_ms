import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './table.css'

const Lawyertable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllLawyr=()=>{
    // Make an Axios GET request when the component mounts
    axios.get('http://localhost:5000/api/v1/lawyers/all')
    .then((response) => {
      // Update the data state with the response data
      console.log(response?.data)
      setData(response?.data);
      setLoading(false);
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      console.error('Error:', error);
      setLoading(false);
    });
 }

  useEffect(() => {
    getAllLawyr();
  }, []); // Empty dependency array to run the effect only once


  const handleDelete = (id) => {
    setLoading(true);
    const apiUrl = `http://localhost:5000/api/v1/lawyers/${id}`;
    axios.delete(apiUrl)
      .then((res) => {
        console.log(`Successfully deleted resource with ID: ${id}`);
        // Handle any other actions after successful deletion.
        getAllLawyr();
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors, e.g., show an error message to the user.
        setLoading(false);
    });
  };

  const handleApproved=(id)=>{
    setLoading(true);
    const apiUrl = `http://localhost:5000/api/v1/lawyers/isApprove/${id}`;
    axios.put(apiUrl)
      .then((res) => {
        console.log(`Successfully updated resource with ID: ${id}`);
        // Handle any other actions after successful deletion.
        getAllLawyr();
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors, e.g., show an error message to the user.
        setLoading(false);
    });
  }

  return (
    <div className="h-[580px] pt-1">
      <div className="w-full text-[24px] text-[gray] flex items-center justify-between mb-2.5">
        Lawyer List
        <Link
          to="/lawyers/new"
          className="no-underline text-[green] text-base font-normal border cursor-pointer p-[5px] rounded-[5px] border-solid border-[green]"
        >
          Add New
        </Link>
      </div>
      {loading && <h1 className="loading">Loading . . .</h1>}
      {data?.length>0 && <table id="customers">
        <thead>
          <tr>
            <th>ID</th>
            <th>Photo</th>
            <th>Lawyer Name</th>
            <th>Lawyer Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody> {/* Add a tbody element here */}
          {data?.map((d,i) => (
            <tr key={d._id}>
              <td>{i+1}</td>
              <td><img style={{width:'80px',height:'80px'}} src={d.photo} alt="U_Photo"/></td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td style={{ color: d.isApproved === 'approved' ? 'green' : 'lightcoral',backgroundColor:'#d2d2d2',display:'inline-block',margin:'5px',borderRadius:'5px'}}>
                {d.isApproved}
              </td>
              <td>
                <div>
                  {d.isApproved==="approved" && <button className="approved" disabled>Approved</button>}
                  {d.isApproved==="pending" && <button onClick={() => handleApproved(d._id)} className="approvebtn">Approve</button>}
                  <button onClick={() => handleDelete(d._id)} className="delbtn">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  );
};

export default Lawyertable;
