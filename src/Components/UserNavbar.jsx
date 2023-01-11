import { Link } from "react-router-dom";
import "../Styles/UserNavbar.css"
const UserNavbar = () => {
    return ( 
        <div className="adminNav">
            <div className="navbar">
                <div className="title">
                    <h2>User Portal</h2>
                </div>
                <div className="links">
                    <Link to="/user/" className="link">Dashboard</Link>
                    <Link to="/user/bookList" className="link">Book List</Link>
                    <Link to="/" className="link">LogOut</Link>
                </div>
            </div>
        </div>
    );
}

export default UserNavbar;