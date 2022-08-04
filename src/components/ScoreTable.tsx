import React from 'react';
import { useParams } from 'react-router-dom';

const ScoreTable = () => {
  let params = useParams();
  // TODO: Use the parameter supplied to render dynamic score specific to each game
  return (
    <table className="w-[100%]">
      <tr>
        <th>Name</th>
        <th>Time</th>
      </tr>
      <tr>
        <td>Opey</td>
        <td>0:20</td>
      </tr>
      <tr>
        <td>Abdul</td>
        <td>0:30</td>
      </tr>
      <tr>
        <td>Rich</td>
        <td>0:35</td>
      </tr>
      <tr>
        <td>Cap</td>
        <td>0:40</td>
      </tr>
      <tr>
        <td>Juice</td>
        <td>0:45</td>
      </tr>
    </table>
  );
};

export default ScoreTable;
