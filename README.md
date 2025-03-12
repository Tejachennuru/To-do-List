# Todo List Application

## 📌 Overview
The **Todo List Application** is a simple yet powerful web-based task manager. This app allows users to add, delete, and view their tasks in an interactive and visually appealing interface. Built using **HTML, CSS, JavaScript, Bootstrap**, and **a backend with PostgreSQL**, it ensures smooth user experience and real-time task management.

## 🎯 Features
- ✅ **Add Tasks** – Quickly add new tasks to your list.
- ❌ **Delete Tasks** – Remove completed or unnecessary tasks.
- 🎨 **Beautiful UI** – Styled with Bootstrap and custom CSS for a clean and responsive design.
- 📱 **Fully Responsive** – Works seamlessly on mobile, tablet, and desktop devices.
- ⚡ **Smooth Animations** – Hover and transition effects enhance the experience.
- 🔗 **API Integration** – Communicates with a backend powered by PostgreSQL.

## 🛠️ Technologies Used
### **Frontend:**
- HTML5
- CSS3
- Bootstrap 4
- JavaScript (ES6+)

### **Backend:**
- Node.js (Express.js)
- PostgreSQL
- RESTful API

## 🚀 How to Run the Project

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### **2️⃣ Install Dependencies**
```sh
cd backend
npm install
```

### **3️⃣ Set Up PostgreSQL Database**
- Make sure PostgreSQL is installed and running.
- Open `psql` and create a new database:
  ```sql
  CREATE DATABASE tododb;
  ```
- Run database migrations (if any).

### **4️⃣ Start the Backend Server**
```sh
npm start
```

### **5️⃣ Run the Frontend**
- Open `index.html` in your browser.

## 🔧 API Endpoints
| Method | Endpoint       | Description           |
|--------|--------------|----------------------|
| GET    | `/todos`     | Fetch all tasks     |
| POST   | `/todos`     | Add a new task      |
| DELETE | `/todos/:id` | Delete a task by ID |

## 🎨 UI Preview
![Todo App UI](https://ibb.co/G4cm5Gj7)

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

---
💡 **Feel free to contribute and improve this project!** 🚀

