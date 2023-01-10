import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {

    let [name,setName] = useState('')
    let [age,setAge] = useState('')
    let [email,setEmail] = useState('')
    let [phone, setPhone] = useState('')
    
    let navigate = useNavigate()
    let handleSubmit = (e) => {
        e.preventDefault();
        // The data to be posted to the server
        let userData = { name,age,email,phone }

        //Posting the data to the server
        fetch("http://localhost:4001/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(userData)
        })
        
        alert(`User Added Successfully`)
        navigate('/admin/userList')
    }
    return ( 
        <div className="addUsers">
            <h1>Add Users to the Database</h1>
            <div className="addUser_form">
                <form onSubmit={handleSubmit} action="">
                    <div className="userFormDiv">
                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
                    </div>
                    <div className="userFormDiv">
                        <input value={age} onChange={(e)=>setAge(e.target.value)} type="number" min='1' placeholder="Enter Age" />
                    </div>
                    <div className="userFormDiv">
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email" />
                    </div>
                    <div className="userFormDiv">
                        <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="tel" minLength='10' maxLength='10' placeholder="Enter Phone Number" />
                    </div>
                    <button>Add User</button>
                </form>
            </div>
        </div>
    );
}

export default AddUser;