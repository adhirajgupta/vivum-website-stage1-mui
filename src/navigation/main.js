// Main.js or Routes.js
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useNavigate
} from 'react-router-dom';
import SignInSide from '../screens/SignInScreen';
import SignUp from '../screens/SignUpScreen';
import ResponsiveDrawer from './drawer';
import { Dashboard } from '../screens/DashboardScreen';
import { Events } from '../screens/EventsScreen';

const isAuthenticated = () => {
  // Add your authentication logic here
  // For example, check if a user token exists in localStorage or context
  return localStorage.getItem('authToken') !== null;
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

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



const Home = () => {
  return <h2>Home</h2>;
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
        <Route path='/auth'>
            <Route path='/auth/login' element={<SignInSide/>}/>
            <Route path='/auth/signup' element={<SignUp/>}/>
        </Route>
        <Route path='/' element={<ResponsiveDrawer/>}>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/events' element={<Events/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default Main;
