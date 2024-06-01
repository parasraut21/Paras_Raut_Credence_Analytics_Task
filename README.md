# Credence Analytics Backend Task

- **This project is designed to manage a collection of books, allowing users to view, add, edit, and delete books.**

## **Paras Raut** 
## **Ph No. +91 9356375273** 
## **Linkedin :- https://www.linkedin.com/in/paras-raut/** 
## **Github :- https://github.com/parasraut21** 


## Table of Contents
1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Backend APIs](#backend-apis)
4. [Frontend Screens](#frontend-screens)
5. [Setup Instructions](#setup-instructions)

## Introduction

This project is built using React.js for the frontend and Node.js with Express.js for the backend. It provides functionalities to manage a collection of books, including viewing, adding, editing, and deleting books.

## Technologies Used

- **Frontend**: React.js, Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **API Communication**: Axios
- **Routing**: Next.js Router
- **State Management**: React Hooks
- **Database**: MongoDB Atlas

## Backend APIs

### GET /api/books

- **Description**: Retrieve all books from the database.
- **Request Type**: GET
- **Response**: Array of book objects containing information such as name, image URL, and summary.

### POST /api/books

- **Description**: Add a new book to the database.
- **Request Type**: POST
- **Request Body**: JSON object containing name, image URL, and summary of the book.
- **Response**: Success message or error message.

### GET /api/books/:id

- **Description**: Retrieve a specific book by its ID from the database.
- **Request Type**: GET
- **Response**: Book object containing information such as name, image URL, and summary.

### PUT /api/books/:id

- **Description**: Update an existing book in the database.
- **Request Type**: PUT
- **Request Body**: JSON object containing updated name, image URL, and summary of the book.
- **Response**: Success message or error message.

### DELETE /api/books/:id

- **Description**: Delete a book from the database by its ID.
- **Request Type**: DELETE
- **Response**: Success message or error message.

## Frontend Screens

### Home
![image](https://github.com/parasraut21/Paras_Raut_Credence_Analytics_Task/assets/111653346/aa07c780-8223-48e1-b1d4-ba2f3a89415e)

- **Description**: Displays a grid of books with their images, names, and summaries.
- **Features**: View, Edit, and Delete buttons for each book.
  
### Add Book

- **Description**: Form to add a new book with fields for name, image URL, and summary.
- **Features**: Submit button to add the book to the database.

### Edit Book
![image](https://github.com/parasraut21/Paras_Raut_Credence_Analytics_Task/assets/111653346/ce9b2b46-b06b-4b74-80e1-ef8da45d8b98)

- **Description**: Form to edit an existing book with fields for name, image URL, and summary.
- **Features**: Submit button to update the book in the database.

### Delete Book
![image](https://github.com/parasraut21/Paras_Raut_Credence_Analytics_Task/assets/111653346/ce9b2b46-b06b-4b74-80e1-ef8da45d8b98)

- **Description**: Delete an existing book .
- **Features**: Click button to delete the book in the database.
![image](https://github.com/parasraut21/Paras_Raut_Credence_Analytics_Task/assets/111653346/299cb625-6fd8-4c84-9106-5530f2647c2b)
![image](https://github.com/parasraut21/Paras_Raut_Credence_Analytics_Task/assets/111653346/86950682-ef22-423f-a802-136605c51d6a)
![image](https://github.com/parasraut21/Paras_Raut_Credence_Analytics_Task/assets/111653346/3f952889-fe84-49da-8be5-631c2fc3ad73)


### Book Detail

- **Description**: Displays detailed information about a single book, including its name, image, and summary.
- **Features**: Back button to navigate back to the home screen.

## Setup Instructions

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies:
   - Frontend: `cd frontend && npm install`
   - Backend: `cd backend && npm install`
3. Set up MongoDB Atlas and configure the connection string in the backend.
4. Start the backend server: `cd backend && npm start`
5. Start the frontend server: `cd frontend && npm start`
6. Access the application in your browser at `http://localhost:3000`.

