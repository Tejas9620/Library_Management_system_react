import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import AdminNavbar from "./AdminNavbar";
import BookList from "./BookList";
import UserList from "./UserList";
import ReadBooks from "./ReadBooks";
import AddBooks from "./AddBooks";
import AddUser from "./AddUser";


const AdminPortal = () => {
    return ( 
        <div className="adminPortal">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="/bookList" element={<BookList />} />
                <Route path="/userList" element={<UserList />} />
                <Route path="/bookList/:id" element={<ReadBooks />} /> {/* :id is the route parameters( Can be reffered as parameters) */}
                <Route path="/addBooks" element={<AddBooks />} />
                <Route path="/addUsers" element={<AddUser/>} />
            </Routes>
        </div>
    );
}

export default AdminPortal;