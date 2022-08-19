import Table from 'react-bootstrap/Table';
import { Bookdata } from '../Pages/Home';
import React, {useContext} from 'react';


function BasicExample() {
  const data= useContext(Bookdata);
  console.log(data)
  return (
    <Table striped bordered hover  >
      <thead>
        <tr>
          <th>S No</th>
          <th>Book name</th>
          <th>Author</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{data.book}</td>
          <td>{data.author} </td>
          <td>{data.type}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicExample;