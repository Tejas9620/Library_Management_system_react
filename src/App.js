import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AdminLogin from './Components/AdminLogin';
import LandingPage from './Components/LandingPage';
import UserLogin from './Components/UserLogin';
import AdminPortal from './Components/AdminPortal';
import UserPortal from './Components/UserPortal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/userLogin' element={<UserLogin/>}/>
          <Route path='/admin/*' element={<AdminPortal />} />
          <Route path='/user/*' element={<UserPortal/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
