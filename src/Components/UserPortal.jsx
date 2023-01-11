import { Route, Routes } from "react-router-dom";
import BookList from "./BookList";
import ReadBooks from "./ReadBooks";
import UserDashboard from "./UserDashboard";
import UserNavbar from "./UserNavbar";

const UserPortal = () => {
    return ( 
        <div className="userPortal">
            <UserNavbar/>
            <Routes >
                <Route path="/" element={<UserDashboard/>} />
                <Route path="/bookList" element={<BookList/>} />
                <Route path="/bookList/:id" element={<ReadBooks/>} />
            </Routes>
        </div>
    );
}

export default UserPortal;