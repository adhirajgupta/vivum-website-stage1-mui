// Main.js or Routes.js
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import SignInSide from '../screens/SignInScreen';
import SignUp from '../screens/SignUpScreen';
import ResponsiveDrawer from './drawer';
import { Dashboard } from '../screens/DashboardScreen';
import { Events } from '../screens/EventsScreen';
import { Home } from '../screens/HomeScreen';

const isAuthenticated = () => {
  // Add your authentication logic here
  // For example, check if a user token exists in localStorage or context
  return localStorage.getItem('authToken') !== null;
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const ErrorPage = () => {
    console.log("exec")
    const navigate = useNavigate()
  const changePath = () => {
    navigate('/dashboard')
  }
 
  return (
    <Navigate to="/login" />
  );

}


const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Your login logic here (e.g., API call)
    localStorage.setItem('authToken', 'sample_token');
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};



const Main = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />


        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <Events />
            </ProtectedRoute>
          }
        /> */}
        <Route path='/auth' errorElement={<ErrorPage/>}>
            <Route path='/auth/login' element={<SignInSide/>} errorElement={<ErrorPage/>}/>
            <Route path='/auth/signup' element={<SignUp/>} errorElement={<ErrorPage/>}/>
        </Route>
        <Route path='/' element={<ResponsiveDrawer/>} errorElement={<ErrorPage/>}>
            <Route path='/dashboard' element={<Dashboard/>} errorElement={<ErrorPage/>}/>
            <Route path='/events' element={<Events/>} errorElement={<ErrorPage/>}/>
                        <Route path='/home' element={<Home/>} errorElement={<ErrorPage/>}/>

        </Route>
      </Routes>
    </Router>
  );
};

export default Main;
