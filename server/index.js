import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './Routes/userRoute.js';
import newsRouter from './Routes/newsRoute.js';
dotenv.config();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/news", newsRouter);

console.log(process.env.HOST);
console.log(process.env.USERDB);
console.log(process.env.PASSWORD);
console.log(process.env.DATABASE);

// Database configuration
export const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERDB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

db.connect(err => {
    if(err) throw err;
});

app.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, address, phone, userType } = req.body;
        // Using placeholders to prevent SQL injection
        const sql = "INSERT INTO users (first_name, last_name, adres, phone, type) VALUES ('sadfasdfasfas', 'sadfsa', 'sdfs', 'sdafasdf', 'admin')";
        db.query(sql, [firstName, lastName, address, phone, userType], (err, results) => {
            if (err) {
                // Handle database errors
                return res.status(500).send();
            }
            // Handle success
            res.status(201).send();
        });
    }
    catch(error){
        // Handle other errors
        res.status(500).send();
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
