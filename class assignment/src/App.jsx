import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import SuccessView from './components/SuccessView';
import './index.css';

function App() {
  const [registeredStudent, setRegisteredStudent] = useState(null);

  const handleRegister = (data) => {
    // Simulate API call
    console.log('Registering student:', data);
    setRegisteredStudent(data);
  };

  const handleReset = () => {
    setRegisteredStudent(null);
  };

  return (
    <div className="App">
      {!registeredStudent ? (
        <RegistrationForm onRegister={handleRegister} />
      ) : (
        <SuccessView studentData={registeredStudent} onReset={handleReset} />
      )}
      
      <footer style={{ marginTop: '3rem', color: '#64748b', fontSize: '0.875rem' }}>
        &copy; 2026 Alpha Series Web Development Assignment
      </footer>
    </div>
  );
}

export default App;
