import axios from "axios";
import React, { useEffect, useState } from "react";
import ListItems from "../ListItem/ListItems";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, id: Date.now(), name: e.target.value });
  };

  const sendUser = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        Workshop API
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Type your name"
          onChange={handleChange}
        />
        <button onClick={sendUser}>Send</button>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          padding: "40px",
        }}
      >
        {users.map((user, index) => (
          <ListItems user={user} key={index} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
