import React, {useState, useEffect} from 'react';

const Api = () => {

    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch("https://reqres.in/api/users")
            .then(data => data.json())
            .then(json => setUsers(json.data));   
    }, []);

    console.log(users);

    return(
        <div>
            <h2 className='mt-3 text-center'>Ejemplo de Api</h2>
            <ul>
                {users.map(user =>(
                    <li><img src={user.avatar} /> </li>

                ))}
            </ul>
        </div>
    );
}

export default Api;