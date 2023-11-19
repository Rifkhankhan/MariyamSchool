
import React from "react";
import './StudentTable.css'
const StudentTable = ({headColor,color,backgroundColor}) => {
  return <>
      <table className="student-table" style={{backgroundColor:backgroundColor}}>
        <tr className="table-head" style={{backgroundColor:headColor,color:color}}>
            <th>No</th>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Classes</th>
        </tr>

        <tr>
            <td>1</td>
            <td>895265</td>
            <td>Rifkhan</td>
            <td>51,main road palamunai</td>
            <td>12,11</td>
        </tr>
        <tr>
            <td>1</td>
            <td>895265</td>
            <td>Rifkhan</td>
            <td>51,main road palamunai</td>
            <td>12,11</td>
        </tr>

        <tr>
            <td>1</td>
            <td>895265</td>
            <td>Rifkhan</td>
            <td>51,main road palamunai</td>
            <td>12,11</td>
        </tr>

        <tr>
            <td>1</td>
            <td>895265</td>
            <td>Rifkhan</td>
            <td>51,main road palamunai</td>
            <td>12,11</td>
        </tr>
      </table>
  </>;
};

export default StudentTable;
