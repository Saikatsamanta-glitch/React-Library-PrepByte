import Table from 'react-bootstrap/Table';
import React from 'react';


function BasicExample({data}) {

  function deleteRow(r){
    const rowindex= r.target.parentNode.parentNode.rowIndex;
    console.log(rowindex-1);
    const tbody= document.getElementsByTagName('tbody')[0];
    tbody.deleteRow(rowindex-1);
    let bookdata=data;
    bookdata.splice(rowindex-1,1)
    console.log(bookdata)
    localStorage.setItem('data', JSON.stringify(bookdata))
  }

  console.log(data);
  return (
    <Table striped bordered hover  >
      <thead>
        <tr>
          <th>S No</th>
          <th>Book name</th>
          <th>Author</th>
          <th>Type</th>
          <th> Delete ⚡ </th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((val,i)=>{
              return (
                <tr key={i}  >
          <td>{i+1}</td>
          <td>{val.bookname}</td>
          <td>{val.author} </td>
          <td>{val.type}</td>
          <td className='h5 text-center'><i className="fi fi-rr-trash delete" onClick={(e)=>{
            deleteRow(e)
          }}></i></td>
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