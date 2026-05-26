import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  // Temporary Admin 
  const loginUser = { role: "admin" };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:3001/users");
    setUsers(res.data);
  };

  // Delete
  const deleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    await axios.delete(`http://localhost:3001/users/${id}`);
    fetchUsers();
  };

  //  Start Edit
  const startEdit = (user) => {
    setEditingId(user.id);
    setEditData({ ...user });
  };

  //  Handle Input
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  //  Save
  const saveEdit = async (id) => {
    await axios.put(`http://localhost:3001/users/${id}`, editData);
    setEditingId(null);
    fetchUsers();
  };

  //  Cancel
  const cancelEdit = () => {
    setEditingId(null);
    setEditData({});
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User List</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>

              <td>
                {editingId === user.id ? (
                  <input
                    name="username"
                    value={editData.username || ""}
                    onChange={handleChange}
                  />
                ) : (
                  user.username
                )}
              </td>

              <td>
                {editingId === user.id ? (
                  <input
                    name="password"
                    value={editData.password || ""}
                    onChange={handleChange}
                  />
                ) : (
                  user.password
                )}
              </td>

              <td>
                {editingId === user.id ? (
                  <input
                    name="email"
                    value={editData.email || ""}
                    onChange={handleChange}
                  />
                ) : (
                  user.email
                )}
              </td>

              <td>
                {editingId === user.id ? (
                  <input
                    name="phone_number"
                    value={editData.phone_number || ""}
                    onChange={handleChange}
                  />
                ) : (
                  user.phone_number
                )}
              </td>

              <td>
                {editingId === user.id ? (
                  <>
                    <button className="save-btn" onClick={() => saveEdit(user.id)}>Save</button>
                    <button className="cancel-btn" onClick={cancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="edit-btn" onClick={() => startEdit(user)}>Edit</button>
                    <button className="delete-btn" onClick={() => deleteUser(user.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;