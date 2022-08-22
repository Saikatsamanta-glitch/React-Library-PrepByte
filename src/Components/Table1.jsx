import Table from 'react-bootstrap/Table';

import React from 'react';


function BasicExample({data}) {
  console.log(data);
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
        {
            data.map((val,i)=>{
              return (
                <tr>
          <td>{i+1}</td>
          <td>{val.data.bookname}</td>
          <td>{val.data.author} </td>
          <td>{val.data.type}</td>
        </tr>
              )
            })
        }
      </tbody>
    </Table>
  );
}

export default BasicExample; 
{/* <tr>
          <td>1</td>
          <td>{data.book}</td>
          <td>{data.author} </td>
          <td>{data.type}</td>
        </tr> */}