import React, { useState,useEffect } from 'react';
import List from '../services/List';
import {Row,Col,Table,Button} from 'react-bootstrap'
import axios from 'axios'
import { Link,useHistory } from 'react-router-dom';

function UserList() {
    const[userList, setUserList] = useState([])
    const history= useHistory()

    useEffect(() => {
       let UserData=  List()
          .then(items => {
           console.log(items, '=====')
           setUserList(items)
          })
      }, [])
      

      const handleDelete=(id)=>{
          console.log(id, '====,,,')
          axios.delete(`http://localhost:8000/users/${id}`)
          .then(response => {
            console.log("Status: ", response.status);
            window.location.reload(false);


        }).catch(error => {
            console.error('Something went wrong!', error);
        });

      }

     

    return (
        <div>
             <li>
              <Link to="/add">Add</Link>
            </li>
            <div className="container">

            <Table striped bordered hover>
                    <thead>
                        <tr>
                       <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Action</th>

                        </tr>
                    </thead>
                    {userList.map(item => (

                            <tbody>
                                <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                <td>{item.status}</td>
                                <td>
                                <Button variant="danger" onClick={()=>handleDelete(item.id)}>Delete</Button>
                                </td>
                                </tr>
                                
                            </tbody>
                    ))}
       </Table>
        </div>
        </div>
    )
}

export default UserList
