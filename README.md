# Construction Management System

A web-based **Construction Management System** developed using **Node.js, Express.js, MongoDB, and EJS** following the **MVC (Model-View-Controller) architecture**.

The system allows users to securely log in and manage construction projects through a simple web interface.

## 🚀 Features

* User Registration and Login
* Session-based Authentication
* User Logout
* Add Construction Projects
* View Construction Projects
* Update Project Details
* Delete Projects
* Project Budget Management
* Project Location Management
* Project Status Management
* Expense Management
* MVC Architecture
* MongoDB Database Integration
* EJS-based Dynamic Views
* Method Override for PUT/DELETE operations

## 🛠️ Technologies Used

### Frontend

* HTML
* CSS
* EJS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Other Technologies

* Express Session
* Method Override
* MVC Architecture

## 📂 Project Structure

```text
construction-management-mvc/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── projectController.js
│   └── expenseController.js
│
├── middleware/
│   └── authentication middleware
│
├── models/
│   ├── userModel.js
│   ├── projectModel.js
│   └── expenseModel.js
│
├── routes/
│   ├── authRouter.js
│   ├── projectRouter.js
│   └── expenseRoute.js
│
├── views/
│   ├── login.ejs
│   ├── register.ejs
│   ├── dashboard.ejs
│   └── other project views
│
├── app.js
├── package.json
└── README.md
```

## 🏗️ MVC Architecture

The project follows the **MVC architecture** to keep the application organized and easier to maintain.

### Model

The Model layer handles the database structure and communication with MongoDB using Mongoose.

Examples:

* User Model
* Project Model
* Expense Model

### View

The View layer contains the user interface of the application.

The project uses **EJS (Embedded JavaScript Templates)** to display dynamic data.

### Controller

The Controller layer contains the application logic.

For example, the project controller handles:

* Adding projects
* Fetching project details
* Updating projects
* Deleting projects

## 🔐 Authentication

The application includes user authentication using sessions.

Users can:

1. Register an account
2. Log in
3. Access the application dashboard
4. Manage projects
5. Log out securely

Sessions are handled using `express-session`.

## 📊 Project Management

Users can manage construction projects by entering details such as:

* Project Name
* Location
* Budget
* Status

The application provides CRUD operations:

```text
Create → Add a new project
Read   → View projects
Update → Edit project details
Delete → Remove a project
```

## 💰 Expense Management

The system also contains expense-related functionality for managing project expenses.

Expenses can be associated with construction project management and used to keep track of project-related costs.

## 🗄️ Database

The application uses **MongoDB** as its database and **Mongoose** for interacting with MongoDB.

The database connection is configured in:

```text
config/db.js
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/manasi-lokhande/construction-management-mvc.git
```

### 2. Navigate to the Project

```bash
cd construction-management-mvc
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure MongoDB

Make sure MongoDB is installed and running on your system.

Update the MongoDB connection details in:

```text
config/db.js
```

Example:

```javascript
mongoose.connect("mongodb://127.0.0.1:27017/construction_management")
```

### 5. Start the Application

```bash
node app.js
```

The application runs on:

```text
http://localhost:5000
```

## 📌 Application Workflow

```text
User Registration
       ↓
     Login
       ↓
   Dashboard
       ↓
Manage Projects
       ↓
Add / Edit / Delete
       ↓
Manage Expenses
       ↓
     Logout
```

## 🎯 Purpose of the Project

The purpose of this project is to demonstrate the development of a full-stack web application using:

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS
* MVC Architecture
* Authentication
* CRUD Operations

It is also designed to provide a basic platform for managing construction projects and related information.

## 🔮 Future Improvements

Possible future enhancements include:

* Role-based authentication
* Project-wise expense reports
* Dashboard charts and analytics
* Search and filtering
* Project progress tracking
* User profile management
* Improved validation and error handling
* REST API integration
* Deployment to a cloud platform

## 👩‍💻 Author

**Manasi Lokhande**

GitHub:
https://github.com/manasi-lokhande

## 📄 License

This project is created for educational and portfolio purposes.
