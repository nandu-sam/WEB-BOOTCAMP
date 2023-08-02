import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      /* In the useEffect hook, you are making an 
      API request to fetch user data from the GitHub API. 
      Once the response is received, it is converted to 
      JSON using response.json(), and then the setUsers(data) 
      function is called to update the users state with the 
      fetched data.
In the JSX rendering part, you're using the map() function to
 iterate over the users array and render a list of user logins. You're using the user.id as the key for each list item to help React efficiently update the virtual DOM.*/
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch(error=> console.error(error))
  }, []);

  return (
    <div>
      <h1>User List</h1>
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

export default Fetch;
