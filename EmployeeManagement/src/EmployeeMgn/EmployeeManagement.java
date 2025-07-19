package EmployeeMgn;

public class EmployeeManagement implements EmployeRepository{
	 private Employee[] employees;
	    private int count;

	    public EmployeeManagement(int size) {
	        employees = new Employee[size];
	        count = 0;
	    }

	    public void addEmployee(Employee e) {
	        if (count >= employees.length) {
	            throw new RuntimeException("Repository Full");
	        }
	        employees[count++] = e;
	    }

	    public Employee searchEmployee(int id) {
	        for (int i = 0; i < count; i++) {
	            if (employees[i].getId() == id) return employees[i];
	        }
	        return null;
	    }

	    public void deleteEmployee(int id) {
	        for (int i = 0; i < count; i++) {
	            if (employees[i].getId() == id) {
	                for (int j = i; j < count - 1; j++) {
	                    employees[j] = employees[j + 1];
	                }
	                employees[--count] = null;
	                return ;
	            }
	        }
	        
	    }

	    public Employee[] getAllEmployees() {
	        Employee[] result = new Employee[count];
	        for (int i = 0; i < count; i++) {
	            result[i] = employees[i];
	        }
	        return result;
	    }
	}