import React from 'react';

const SuccessView = ({ studentData, onReset }) => {
  return (
    <div className="glass-card success-view">
      <div className="check-icon">✓</div>
      <h2>Registration Successful!</h2>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
        Welcome to the course, <strong>{studentData.name}</strong>!
      </p>
      
      <div style={{ textAlign: 'left', background: 'rgba(15, 23, 42, 0.4)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
        <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><span style={{ color: '#64748b' }}>Course:</span> {studentData.course}</p>
        <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><span style={{ color: '#64748b' }}>Email:</span> {studentData.email}</p>
        <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}><span style={{ color: '#64748b' }}>Mobile:</span> {studentData.mobile}</p>
      </div>

      <button className="btn-primary" onClick={onReset}>
        Register Another Student
      </button>
    </div>
  );
};

export default SuccessView;
