import React from 'react';
import './App.css';
import { StudentProvider } from './component/StudentContext';
import StudentApp from './component/StudentApp'; 
import { AuthProvider } from './component/hooks/Auth';

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <StudentApp />
      </AuthProvider>
    </div>
  );
}

export default App;
