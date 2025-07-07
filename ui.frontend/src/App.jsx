import React from 'react'
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
 } from 'react-router-dom';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense';

//'rafcet' to set up the component
const Root = () => {
  // Check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem('token'); // '!!' is used to convert boolean to boolean -> != null;

  //redirect to dashboard if user is autheticated otherwise to login
 return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />;
}

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;