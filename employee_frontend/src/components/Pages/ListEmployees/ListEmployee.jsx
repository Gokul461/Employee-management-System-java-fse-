import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import './ListEmployee.css';
import Toasty from '../../Toasty';

function ListEmployee() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const [toast, setToast] = useState({
    show: location.state?.toast ? true : false,
    message: location.state?.toast?.message || '',
    variant: location.state?.toast?.variant || 'success'
  });

  // Reset location state after toast is shown once
  useEffect(() => {
    if (toast.show) {
      const timeout = setTimeout(() => {
        setToast(prev => ({ ...prev, show: false }));
      }, 3000);
      window.history.replaceState({}, document.title); // clear state
      return () => clearTimeout(timeout);
    }
  }, [toast.show]);

  useEffect(() => {
    fetch("http://localhost:8080/employees")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch employees");
        return res.json();
      })
      .then((data) => setEmployees(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  const handleAdd = () => {
    navigate("/add_employee");
  };

  const handleUpdate = (employee) => {
    navigate(`/edit_employee/${employee.id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        const res = await fetch(`http://localhost:8080/employees/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          setEmployees((prev) => prev.filter((emp) => emp.id !== id));
          setToast({
            show: true,
            message: "Employee deleted successfully",
            variant: "danger",
            isSuccess: true,
          });
        } else {
          setToast({
            show: true,
            message: "Failed to delete employee",
            variant: "danger",
            isSuccess: false,
          });
        }
      } catch (error) {
        console.error("Delete error:", error);
      }
    }
  };

  return (
    <div>
      <Toasty
        message={toast.message}
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
        type={toast.variant}
      />
      <h1 className="text-center mt-5">List of Employees</h1>
      <Button className="btn addbtn btn-success" onClick={handleAdd}>
        Add Employee
      </Button>

      <div className="container mt-5">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.department}</td>
                  <td>
                    <div className="d-flex justify-content-start align-items-center gap-2">
                      <Button variant="warning" onClick={() => handleUpdate(employee)}>
                        Update
                      </Button>
                      <Button variant="danger" onClick={() => handleDelete(employee.id)}>
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListEmployee;
