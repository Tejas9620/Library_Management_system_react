import "../Styles/AdminLogin.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()

    let Login = (e) => {
        e.preventDefault()

        // data from input
        // let data = { email, password }

        //To validate with default credentials
        if (email === "admin@gmail.com" && password === "1234") {
            navigate('/admin/')
        }
        else {
            alert(`Invald Credentials`)
        }
    }

    return (
        <div className="adminLogin">
            <div className="adminformContainer">
                <div className="adminloginH1">
                    <h1>Login As Admin</h1>
                </div>
                <div className="adminform">
                    <form onSubmit={Login}>
                        <div className="inputs">
                        <div className="email">
                            <input type="text" required value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Email/phone" />
                        </div>
                        <div className="password">
                            <input type="password" required value={password} onChange={(p) => { setPassword(p.target.value) }} placeholder="Enter Password" />
                        </div>
                        </div>
                        <div className="button">
                            <button>LOGIN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;