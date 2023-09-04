import { Routes, Route, Link } from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from 'axios';
import User from "./User"
import Home from "./Home";

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then(res => setUsers(res.data))
        .finally(() => setLoading(false));
    }, [])
  return (
    <div>
      <h1>Users</h1>
      {loading && <div>Loading...</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route index element={<Home />} />
        <Route path=":id" element={<Home />} />
      </Routes>

      
    </div>
  );
}

export default Users
