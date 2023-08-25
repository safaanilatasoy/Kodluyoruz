import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

function User() {
    const {id} = useParams();
    const [user, setUser] = useState({});

    useEffect(() =>{
        axious(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setUser(res.data)
        
        )
    }, [])

  return (
  <div>
    <h1>User Detail</h1>
    id: {id}
      
    </div>
  )
}

export default User
