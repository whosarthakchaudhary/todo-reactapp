import React, { useState } from 'react'

export const ToDo = () => {
    const [users, setUsers] = useState("");
    const [arr, setArr] = useState([]);
    const [sid, setSid] = useState();
    const [flag, setFlag] = useState(true);

    const inputHandler = (event)=>{
        setUsers(event.target.value);
    }
    const addUser = (event)=>{
        event.preventDefault();
        setArr([...arr,users]);
        setUsers("");
    }
    const deleteUser = (id)=>{
        let newArray = arr.filter((items,index)=>{
            return id !== index;
        })
        setArr(newArray);
    }
    const editUser = (uid) =>{
        setFlag(false);
        setSid(uid);
        let newArray = arr.filter((items,index)=>{
            return uid == index;
        });
        setUsers(newArray[0]);
    }
    const updateUser = ()=>{
        setFlag(true);
        arr[sid] = users;
        setUsers("");
    }
  return (
   <div className="container">
    <div className="row mt-5">
        <div className="col-sm-6">
            <div className="card p-3">
                <div className="alert alert-dark">
                    <h4>Add User</h4>
                </div>
                <form method="post" onSubmit={addUser}>
                    <div className="mt-3">
                        <label htmlFor="">Enter UserName</label>
                        <input type="text" required name='name' className='form-control' onChange={inputHandler} value={users}/>
                    </div>
                    <div className="mt-3">
                        {flag == true ? 
                        <button className='btn btn-dark'>Add</button> :""
                        }
                    </div>
                </form>
                <div>
                {
                    flag == false ?
                        <button className='btn btn-dark' onClick={updateUser}>Update</button> :""
                }
                    </div>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="card p-3">
                <div className="alert alert-dark">
                    <h4>Manage User</h4>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((items,index)=>{
                                return(
                        <tr key={index}>
                            <td>{items}</td>
                            <td><button className='btn btn-secondary' onClick={()=> editUser(index)} >Edit User</button></td>
                            <td><button className='btn btn-primary' onClick={()=> deleteUser(index)} >Delete User</button></td>
                        </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
   </div>
  )
}
