package EmployeeMgn;
public interface EmployeeServiceInterface {
    void push(int id, String name, String position, double salary);
    void display();
    void find(int id);  
    void remove(int id);
}
