import React, { useState } from 'react';

export const Crud = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    username: '',
    userpassword: '',
    useremail: '',
    userdate:''
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = form;
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setUsers([...users, form]);
    }
    setForm({ username: '', userpassword: '', useremail: '', userdate:'', status:''});
  };

  const handleEdit = (index) => {
    setForm(users[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className='container mt-5'>
      <div>
      <h3>CRUD Application</h3>
      </div>
      <div className="row">
        <div className="col-md-6">
      <div className="mt-3">
      <form onSubmit={handleSubmit}>
        <div className='m-3'>
          <label className='m-2'>UserTitle: </label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </div>
        <div className='m-3'>
          <label className='m-2'>Password: </label>
          <input
            type="password"
            name="userpassword"
            value={form.userpassword}
            onChange={handleChange}
          />
        </div>
        <div className='m-3'>
          <label className='m-2'>Email: </label>
          <input
            type="email"
            name="userdate"
            value={form.userdate}
            onChange={handleChange}
          />
        </div>
        <div className='m-3'>
          <label className='m-2'>Date: </label>
          <input
            type="date"
            name="useremail"
            value={form.userdate}
            onChange={handleChange}
          />
        </div>
        <div className='m-3'>
          <label className='m-2'>Completion Status: </label>
          <input
            type="text"
            name="status"
            value={form.status}
            placeholder='Completed/ Pending'
            onChange={handleChange}
          />
        </div>
        <button className='btn btn-dark m-3' type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
      </form>
      </div>
        </div>
      </div>
      <h3>User List</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} - {user.useremail} - {user.userpassword} - {user.userdate} - {user.status}
            <button className='btn btn-primary m-2' onClick={() => handleEdit(index)}>Edit</button>
            <button className='btn btn-secondary m-2' onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

