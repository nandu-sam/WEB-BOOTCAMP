import React, { useState, useEffect } from "react";

const MultipleReturn = () => {
  const [user, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://api.gihub.com/users");
        const data = await response.json();
        setUsers(data);
        setisLoading(false);
      } catch (error) {
        setError(error);
        setisLoading(false);
      }
    }
    fetchUsers();
  }, []);
  if (isLoading) {
    return <p>Loading Please Wait...</p>;
  }
  if (error) {
    return <p>Error:{error.message}</p>;
  }
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {user.map((user) => {
          return (
            <li key={user.id}>
              <a href={user.html_url}>{user.login}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MultipleReturn;
