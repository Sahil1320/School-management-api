# School Management API

A RESTful API built using **Node.js**, **Express.js**, and **MySQL** to manage school data.
The API allows users to add new schools and retrieve a list of schools sorted by proximity to a user's location.

---

## 🚀 Features

* Add new schools to the database
* Retrieve schools sorted by distance from a user location
* MySQL database integration
* Hosted API for live testing
* Postman collection for easy API testing

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MySQL**
* **Render** (API hosting)
* **Railway** (MySQL database)
* **Postman** (API testing)

---

## 📂 Project Structure

```
school-api/
│
├── index.js          # Main server file
├── db.js             # Database connection
├── package.json      # Project dependencies
├── README.md         # Documentation
└── .env              # Environment variables (not included in repo)
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following:

```
MYSQLHOST=your_database_host
MYSQLPORT=your_database_port
MYSQLDATABASE=your_database_name
MYSQLUSER=your_database_user
MYSQLPASSWORD=your_database_password
```

---

## 📦 Installation

Clone the repository:

```
 https://github.com/Sahil1320/School-management-api.git
```

Navigate to the project directory:

```
cd school-management-api
```

Install dependencies:

```
npm install
```

Start the server:

```
node index.js
```

Server will start on:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### 1️⃣ Add School

**Endpoint**

```
POST /addSchool
```

**Example Request**

```
POST https://school-management-api-xre5.onrender.com/addSchool
```

**Request Body**

```json
{
  "name": "ABC School",
  "address": "Delhi",
  "latitude": 28.6,
  "longitude": 77.2
}
```

**Response**

```json
{
  "message": "School added successfully"
}
```

---

### 2️⃣ List Schools

**Endpoint**

```
GET /listSchools
```

**Example Request**

```
GET https://school-management-api-xre5.onrender.com/listSchools?latitude=28.6&longitude=77.2
```

**Response**

Returns schools sorted by distance from the user location.

```json
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "Delhi",
    "latitude": 28.6,
    "longitude": 77.2,
    "distance": 0
  }
]
```

---

## 🌍 Live API

Base URL:

```
https://school-management-api-xre5.onrender.com
```

Endpoints:

```
POST /addSchool
GET  /listSchools
```

---

## 🧪 Postman Collection

The API can be tested using the Postman collection:

```
https://serverless-team-5640.postman.co/workspace/ed2ec38b-f1b2-4515-b840-992450b2a6d6
```

---

## 📊 Database Schema

Table: **schools**

| Column    | Type                              |
| --------- | --------------------------------- |
| id        | INT (Primary Key, Auto Increment) |
| name      | VARCHAR                           |
| address   | VARCHAR                           |
| latitude  | DOUBLE                            |
| longitude | DOUBLE                            |

---

## 👨‍💻 Author

Developed by **Sahil Kumar**
