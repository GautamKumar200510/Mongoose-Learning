# 🍃 Mongoose Learning

A beginner-friendly project created to learn and practice **Mongoose with MongoDB and Node.js**.

This repository demonstrates how to connect a Node.js application with MongoDB using Mongoose, create schemas and models, and perform basic CRUD operations.

##  Topics Covered

- MongoDB connection using Mongoose
- Creating Mongoose Schemas
- Creating Models
- Creating and inserting documents
- Reading documents
- Updating documents
- Deleting documents
- Basic CRUD operations

## 🛠️ Technologies Used

- Node.js
- JavaScript
- MongoDB
- Mongoose
- VS Code

## 📂 Project Structure

```text
Mongoose-Learning/
│
├── book.js
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/GautamKumar200510/Mongoose-Learning.git
```

### 2. Open the project

```bash
cd Mongoose-Learning
```

### 3. Install dependencies

```bash
npm install
```

### 4. Make sure MongoDB is running

Start your local MongoDB server before running the project.

### 5. Run the project

```bash
node index.js
```

## 📖 Mongoose Schema Example

```javascript
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number
});

const Book = mongoose.model("Book", bookSchema);
```

##  CRUD Operations

**Create**

```javascript
await Book.create({
    title: "JavaScript Basics",
    author: "John",
    price: 500
});
```

**Read**

```javascript
const books = await Book.find();
console.log(books);
```

**Update**

```javascript
await Book.updateOne(
    { title: "JavaScript Basics" },
    { price: 600 }
);
```

**Delete**

```javascript
await Book.deleteOne({
    title: "JavaScript Basics"
});
```

##  Purpose

The purpose of this repository is to understand how **Mongoose acts as an ODM (Object Data Modeling) library** for MongoDB and makes it easier to work with MongoDB databases in Node.js applications.

##  Author

**Gautam Kumar**

Learning and exploring **MongoDB, Mongoose, Node.js, and Backend Development**.

---

⭐ If you find this repository helpful, feel free to star it!
