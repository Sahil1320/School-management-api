# School Management API

A Node.js REST API for managing school data.
The API allows users to add new schools and retrieve a list of schools sorted by proximity to a given location.

## Tech Stack

* Node.js
* Express.js
* MySQL
* Postman (for API testing)

## Features

* Add new school with name, address, latitude, and longitude
* Retrieve list of schools sorted by distance from user location
* Input validation
* Distance calculation using Haversine formula
* RESTful API design

## Project Structure

```
school-api
│
├── db.js
├── index.js
├── package.json
├── node_modules
└── README.md
```

## Installation

1. Clone the repository

```
git clone  https://github.com/Sahil1320/School-management-api.git
```

2. Navigate to project directory

```
cd school-api
```

3. Install dependencies

```
npm install
```

4. Configure database in `db.js`

```
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sahil2580@",
  database: "schooldb"
});
```

## Database Setup

Create database:

```
CREATE DATABASE schooldb;
```

Create table:

```
CREATE TABLE schools (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255) NOT NULL,
 address VARCHAR(255) NOT NULL,
 latitude FLOAT NOT NULL,
 longitude FLOAT NOT NULL
);
```

## Run the Server

Start the server:

```
node index.js
```

Server will run on:

```
http://localhost:5000
```

## API Endpoints

### 1. Add School

**Endpoint**

```
POST /addSchool
```

**Request Body**

```
{
 "name": "ABC School",
 "address": "Delhi",
 "latitude": 28.7041,
 "longitude": 77.1025
}
```

**Response**

```
{
 "message": "School added successfully"
}
```

---

### 2. List Schools

**Endpoint**

```
GET /listSchools
```

**Query Parameters**

```
latitude
longitude
```

**Example Request**

```
http://localhost:5000/listSchools?latitude=28.6&longitude=77.2
```

**Response**

```
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

Schools are returned sorted by distance from the user location.

## Distance Calculation

The API uses the Haversine formula to calculate the geographical distance between the user location and each school.

## Testing

API endpoints were tested using Postman.

Postman Collection:
(Insert your Postman collection link here)

## Live API

(Insert deployed API link here if hosted)

## Source Code Repository

(Insert GitHub repository link here)

## Author

Sahil Kumar

## License

This project is created for assignment purposes.
