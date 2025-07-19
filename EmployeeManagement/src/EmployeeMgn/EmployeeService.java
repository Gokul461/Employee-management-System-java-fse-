package EmployeeMgn;

public class EmployeeService implements EmployeeServiceInterface {
    private final EmployeRepository repository; // ✅ Fixed spelling

    public EmployeeService(EmployeRepository repository) {
        this.repository = repository;
    }

    public void push(int id, String name, String position, double salary) {
        Employee e = new Employee(id, name, position, salary);
        repository.addEmployee(e);
    }

    public void display() {
        for (Employee e : repository.getAllEmployees()) {
            e.display();
        }
    }

    public void find(int id) {
        Employee e = repository.searchEmployee(id);
        if (e != null) {
            System.out.println(e.getId() + " - " + e.getName() + " - " + e.getPos() + " - " + e.getSalary());
        } else {
            System.out.println("Employee not found.");
        }
    }

    public void remove(int id) {
        repository.deleteEmployee(id);
        System.out.println("Deleted if exists.");
    }
}
