
import React from "react";
import './FeesTable.css'
const FeesTable = ({headColor,color,backgroundColor}) => {
  return <>
      <table className="student-table" style={{backgroundColor:backgroundColor}}>
        <tr className="table-head" style={{backgroundColor:headColor,color:color}}>
            <th>No</th>
            <th>Date</th>
            <th>Name</th>
            <th>For</th>
        </tr>

        <tr>
            <td>1</td>
            <td>2023-12-23</td>
            <td>Rifkhan</td>
            <td>First term</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2023-12-03</td>

            <td>Rifkhan</td>
            <td>First term</td>

        </tr>

        <tr>
            <td>1</td>
            <td>2023-12-12</td>

            <td>Rifkhan</td>
            <td>second term</td>

        </tr>

        <tr>
            <td>1</td>
            <td>2023-11-23</td>

            <td>Rifkhan</td>
            <td>3rd term</td>

        </tr>
      </table>
  </>;
};

export default FeesTable;
