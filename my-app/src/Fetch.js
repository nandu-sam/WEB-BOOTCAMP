import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {user.map((user) => {
          return <li key={user.id}>{user.login}</li>;
        })}
      </ul>
    </div>
  );
};

export default Fetch;
