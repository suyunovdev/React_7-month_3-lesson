import React from 'react';
import './App.css';
import { StudentProvider } from './component/StudentContext';
import StudentApp from './component/StudentApp'; 
import { AuthProvider } from './component/hooks/useAuth';
import { useAuth } from './component/hooks/useAuth'; // yoki to‘g‘ri yo‘lga qarab o‘zgartiring
import { useNavigate } from 'react-router-dom';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './component/LoginPage';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
 
  return (
    <div className="App">
      <AuthProvider>
        <StudentProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <StudentApp />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Router>
        </StudentProvider>
      </AuthProvider>
    </div>
  );
}


export default App;
