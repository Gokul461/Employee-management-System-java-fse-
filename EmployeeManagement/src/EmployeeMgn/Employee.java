package EmployeeMgn;

public class Employee {
private String empName;
private int empId;
private double salary;
private String position;
public Employee(int id,String name,String position, double salary) {
	empId = id;
	empName= name;
	this.position = position;
	this.salary = salary;
}
public int getId() {
	return this.empId;
}
public String getName() {
	return this.empName;
}
public double getSalary() {
	return this.salary;
}
public String getPos() {
	return this.position;
}
public void display() {
    System.out.println("ID: " + empId + ", Name: " + empName + ", Position: " + position + ", Salary: " + salary);
}

}
