# MongoDB Basics

MongoDB is a popular NoSQL database known for its flexibility, scalability, and ease of use.

## Connecting NodeJS to mongoDB

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ma");
console.log('connection successful...');
