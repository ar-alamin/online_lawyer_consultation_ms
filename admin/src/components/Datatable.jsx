import { Link } from "react-router-dom";
import { useState,useEffect} from "react";
import axios from 'axios';
import './table.css'

const Datatable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const getAllUsers=()=>{
     // Make an Axios GET request when the component mounts
     axios.get('http://localhost:5000/api/v1/users')
     .then((response) => {
       // Update the data state with the response data
       setData(response?.data?.data);
       console.log(response?.data?.data)
       setLoading(false);
     })
     .catch((error) => {
       // Handle any errors that occur during the request
       console.error('Error:', error);
       setLoading(false);
     });
  }

  useEffect(() => {
    getAllUsers();
  }, []); // Empty dependency array to run the effect only once


  const handleDelete = (id) => {
    setLoading(true);
    const apiUrl = `http://localhost:5000/api/v1/users/${id}`;
    axios.delete(apiUrl)
      .then((res) => {
        console.log(`Successfully deleted resource with ID: ${id}`);
        // Handle any other actions after successful deletion.
        getAllUsers();
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors, e.g., show an error message to the user.
        setLoading(false);
      });
  };

  return (
    <div className="h-[580px] pt-1">
      <div className="w-full text-[24px] text-[gray] flex items-center justify-between mb-2.5">
        Add New User
        <Link
          to="/users/new"
          className="no-underline text-[green] text-[16px] font-normal border cursor-pointer p-[5px] rounded-[5px] border-solid border-[green]"
        >
          Add New
        </Link>
      </div>
      {loading&& <h1 className="loading">Loading . . .</h1>}
      {data?.length>0 && <table id="customers">
        <tr>
          <th>ID</th>
          <th>Photo</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
        {
          data?.map((d,i)=>(
            <tr key={d._id}>
              <td>{i+1}</td>
              <td><img style={{width:'80px',height:'80px'}} src={d.photo} alt="U_Photo"/> </td>
              <td>  
                {d.name}
              </td>
              <td>
                {d.email}
              </td>
              <td>{d.gender}</td>
              <td>Client</td>
              <td><button onClick={()=>handleDelete(d._id)} className="delbtn">Delete</button></td>
          </tr>))
        }
      </table>}
    </div>
  );
};

export default Datatable;
