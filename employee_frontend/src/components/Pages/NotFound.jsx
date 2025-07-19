import React from 'react';

function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center vh-100">
      <h1 className="fw-bold text-danger display-4">404 - Not Found</h1>
      <p className="lead">The page you are looking for doesn't exist.</p>
    </div>
  );
}

export default NotFound;
