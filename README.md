# 🚀 Employee Management System (EMS)

A simple full-stack **CRUD application** to manage employee data, built using **React.js (frontend)** with **Bootstrap styling** and **Spring Boot (backend)**.

---

## 🌟 Features

- 🔍 View all employees
- ➕ Add new employee
- ✏️ Update existing employee
- ❌ Delete employee
- 🎨 Responsive UI with Bootstrap
- 🔁 Real-time updates between frontend and backend

---

## 🧑‍💻 Tech Stack

### 🖥 Frontend
- React.js
- Bootstrap 5
- Axios (for HTTP requests)

### ⚙️ Backend
- Spring Boot
- RESTful APIs
- Spring Data JPA
- MySQL (or H2 for in-memory testing)

---

## 🏗️ Project Structure
employeeManagement/
├── backend/ # Spring Boot Project
│ ├── controller/ # REST controllers
│ ├── model/ # Entity classes
│ ├── repository/ # JPA Repositories
│ └── service/ # Business logic
│
├── employee frontend/ # React Project
│ ├── src/
│ │ ├── components/ # EmployeeList, AddEmployee, etc.
│ │ ├── services/ # Axios-based API calls
│ │ └── App.js
│ └── public/

---

## 🚦 How to Run

### 🔹 Backend (Spring Boot)

1. Import project in **IntelliJ / Eclipse / VS Code**
2. Set up your database (MySQL or use H2 in-memory)
3. Run the application:

```bash
cd backend
./mvnw spring-boot:run
```
## Screenshots
<img width="1907" height="915" alt="Screenshot 2025-07-15 125454" src="https://github.com/user-attachments/assets/cc8e1418-e293-4bc3-900c-39a990a85517" />

<img width="1907" height="934" alt="Screenshot 2025-07-15 133403" src="https://github.com/user-attachments/assets/9fe7e7bd-a936-4008-83ad-a7137d3018c4" />

<img width="1919" height="1018" alt="Screenshot 2025-07-15 133457" src="https://github.com/user-attachments/assets/b6bd7fe1-2d4d-42de-a814-4f2d1bbd274a" />

<img width="1917" height="1018" alt="Screenshot 2025-07-15 133508" src="https://github.com/user-attachments/assets/1700484c-e56a-4838-b09d-e55472bbbf3b" />

<img width="1917" height="1011" alt="Screenshot 2025-07-15 133525" src="https://github.com/user-attachments/assets/c74c6114-606d-4db2-9cee-5b3b6959c6a7" />

