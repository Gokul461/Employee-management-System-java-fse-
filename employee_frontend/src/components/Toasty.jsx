import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { CheckCircleFill, ExclamationCircleFill } from 'react-bootstrap-icons';

function Toasty({ message, show, onClose, type = 'success', loc = 'bottom-end' }) {
  const isSuccess = type === 'success';

  const bgColor = isSuccess ? '#009851ff' : '#f70019ff';
  const icon = isSuccess 
    ? <CheckCircleFill className="me-2" size={22} /> 
    : <ExclamationCircleFill className="me-2" size={22} />;

  return (
    <ToastContainer position={loc} className="p-3" style={{ zIndex: 9999 }}>
      <Toast
        onClose={onClose}
        show={show}
        delay={3000}
        autohide
        style={{
          backgroundColor: bgColor,
          color: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          minWidth: '250px',
          padding: '10px 16px',
        }}
      >
        <Toast.Body className="d-flex align-items-center w-100">
          {icon}
          <span style={{ fontSize: '1rem', fontWeight: '500' }}>{message}</span>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default Toasty;
