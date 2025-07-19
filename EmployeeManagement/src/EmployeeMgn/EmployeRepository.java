package EmployeeMgn;

public interface EmployeRepository {
	 void addEmployee(Employee e);
	    Employee searchEmployee(int id);
	    void deleteEmployee(int id);
	    Employee[] getAllEmployees();
}
