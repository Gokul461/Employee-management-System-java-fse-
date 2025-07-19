package EmployeeMgn;

public class Main {

	public static void main(String[] args) {
		EmployeeManagement repo = new EmployeeManagement(100);
		EmployeeService service = new EmployeeService(repo);
		service.push(1, "Gokul", "Manager", 200000.0000);
		service.push(2, "Dhanush", "Engineer", 100000.0000);
		service.push(3, "Gowtham", "Developer", 120000.0000);
		service.push(4, "Madhan", "Designer", 100000.0000);
		service.display();
		service.remove(1);
		service.find(3);
		service.display();
	
	}

}
