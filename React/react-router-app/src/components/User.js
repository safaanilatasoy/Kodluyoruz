import {useParams, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";

function User() {
    const {id} = useParams();
    const [user, setUser] = useState({});
     const [loading, setLoading] = useState(true);

    useEffect(() =>{
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setUser(res.data))
        .finally(() => setLoading(false));
        
        
        
    }, [id])

  return (
    <div>
      <h1>User Detail</h1>
      {loading && <div>Loading...</div>}
      {!loading && <code>{JSON.stringify(user)}</code>}
      <p>
        {
          `name: ${user.name}`
        }
        </p>
      <p>
        <Link to={`/user/${parseInt(id) + 1}`}>Next User</Link>
      </p>
      
      <p>
        <Link to={`/user/${parseInt(id) - 1}`}>Previous User</Link>
      </p>
    </div>
  );
}

export default User
