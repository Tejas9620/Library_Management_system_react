import { useEffect, useState } from "react";

const UserList = () => {
    let [users, setUsers] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch("http://localhost:4001/users")
            let data = await response.json()
            setUsers(data)
        }
        fetchData();
    }, [])

    let handleClick = (id,title) => {
        setUsers(users.filter(x => x.id !== id))
        alert(` ${title} has been deleted`)
    }
    return (
        <div className="userList">
            <h1>User List</h1>
            <div className="users">
                {
                    users.map((user) => (
                        <div className="usersList">
                            <h1>{user.name}</h1>
                            <h2>{user.age}</h2>
                            <h2>{user.phone}</h2>
                            <h2>{user.email}</h2>
                            <button onClick={()=>{handleClick(user.id,user.title)}}>Remove</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default UserList;