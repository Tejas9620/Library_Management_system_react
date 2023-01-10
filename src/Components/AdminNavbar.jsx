import { Link } from "react-router-dom";
import "../Styles/AdminNavbar.css"


const AdminNavbar = () => {
    return (
        <div className="adminNav">
            <div className="navbar">
                <div className="title">
                    <h2>Admin Portal</h2>
                </div>
                <div className="links">
                    <Link to="/admin/" className="link">Dashboard</Link>
                    <Link to="/admin/addBooks" className="link">Add Books</Link>
                    <Link to="/admin/addUsers" className="link">Add User</Link>
                    <Link to="/admin/bookList" className="link">Books List</Link>
                    <Link to="/admin/userList" className="link">Users List</Link>
                    <Link to="/" className="link">LogOut</Link>
                </div>
            </div>
        </div>
    );
}

export default AdminNavbar;