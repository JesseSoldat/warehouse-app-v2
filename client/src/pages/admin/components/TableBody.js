import React from "react";

const TableBody = ({ users, handleChange, handleDelete }) => {
  console.log(users);

  const tableData = users.map((user, i) => (
    <tr key={user._id}>
      <td> </td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>Role TODO</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(user.email)}
        >
          <i className="fas fa-trash-alt mr-2" /> Delete User
        </button>
      </td>
    </tr>
  ));

  return <tbody>{tableData}</tbody>;
};

export default TableBody;
