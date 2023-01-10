import '../Styles/LandingPage.css'
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="landingPage">
            <div className="loginType">
                <div className="Title">
                    <h1>Library Management System</h1>
                </div>
                <div className="Admin">
                    <div className="Admin_box">
                        <div className='b1 btn1'>
                            <div className="i">
                                <img src="./Images/admin.jfif" alt="" />
                            </div>
                            <div className='aa'>
                                <Link to='/AdminLogin'>ADMIN LOGIN</Link>
                            </div>
                        </div>
                        <div className='b1 btn2'>
                            <div className="i">
                                <img src="./Images/User.png" alt="" />
                            </div>
                            <div className='aa'>
                                <Link to='/UserLogin'>USER LOGIN</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;