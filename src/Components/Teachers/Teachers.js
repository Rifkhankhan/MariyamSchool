import React, { useEffect } from "react";
import './Teachers.css'
import {

  Add
} from "@material-ui/icons";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../Actions/MovieAction";
import teachers from '../../Data/teachers'
// id:1,
// firstName:'Mohammed',
// lastName:'Rifkhan',
// grade:12,
// dob:'1998-04-14',
// age:20,
// address:'454,common road palamunai',
// contactNo:'758524635',
// image:'',
const Teachers = () => {
const navigate = useNavigate()
const dispatch = useDispatch()
const items = useSelector(state => state.netflixAuth.items)
const series = items.filter(item => item.type === 'movie')
console.log(teachers);
  const addHandler = (e) => {
    e.preventDefault()
    navigate('/netflix/profile/teachers/add')
  }
  const LoadDetail = (e) => {
    console.log(e);
    navigate(`/netflix/profile/teachers/${e}`)
  }

  useEffect(() => {
    dispatch(getItems())
  },[dispatch])


  return <div className="netflix-profile-Content">
      <div className="netflix-profile-Content-title">
          <h2 >Teachers</h2>
          <Add className="addbtn" onClick={addHandler}/>
      </div>
      <div className="netflix-profile-Content-container">
        <table className="netflix-profile-Content-table" >
            <thead className="table-head">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Address</th>
                  <th>Age</th>
                </tr>
						</thead>

            <tbody className="table-body">
									{teachers &&
										teachers.map((item,index) => (
											<tr key={item.id} onClick={() => LoadDetail(item.id)}>
												<td>{index+1}</td>
												<td>{item.firstName} {item.lastName}</td>
												<td>{item.classes.join(', ')}</td>
												<td>{item.address}</td>
												<td>{item.age}</td>
											</tr>
										))}
								</tbody>
        </table>
      </div>
  </div>;
};

export default Teachers;
