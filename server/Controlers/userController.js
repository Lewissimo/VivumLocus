import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { db } from '../index.js';
import validator from 'validator';

export const verifyTokenUser = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).send('token need');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send('nisdfkos');
    }

    next();
};
export const verifyTokenAdmin = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send('tonek need');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send('bad token');
    }
    if(req.user.role === 'admin'){

        next();
    }
    else{
        res.status(403).json('No permision');
    }
};
export const verifyTokenEmployee = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send('token need');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send('uncorect token');
    }

    if((req.user.role === 'coordinator')||(req.user.role === 'admin')){
        next();
    }
    else{
        res.status(403).json('No permision');
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const label = 'admin';
    if(!(email && password)){

        return res.status(400).json('missing argument');
    }
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'db error', error: err });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'not found' });
        }

        const user = results[0];

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Nieprawidłowe hasło.' });
        }

        const token = jwt.sign(
            { user_id: user.id, email, role: label},
            process.env.WEBTOKEN,
            { expiresIn: '24h' }
        );

        res.status(200).json({ message: 'Logowanie pomyślne.', token });
    });
    
}



const registerAdress = async (req, res) => {
    const { login, password, f_name, l_name, phone, age, address, description, rights, email, photo} = req.body;
    
    if(!(f_name && l_name && password && )){
        return res.status(400).json('Missing argument')
    }
    if(!validator.isEmail(email)){
        return res.status(400).json('Uncorect email');
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

 
    const sql = "INSERT INTO users (f_name, l_name, email, password, photoURL, label) VALUES (?, ?, ?, ?, ?, ?);";
    db.query(sql, [f_name, l_name, email, encryptedPassword, null, label], (err, result) => {
        if(err) {
            return res.status(500).send(err);
        }
        res.status(200).send('ok');
    });
    
    
};

const registerAdmin = async (req, res) => {

}

export const getAdminsData = async (req, res) => {
    const sql = `
    SELECT users.*, admin_info.*
    FROM users
    LEFT JOIN admin_info ON users.id = admin_info.user_id
    WHERE users.label = 'admin';
    `
    db.query(sql, [], (err, result) =>{
        if(err){
            return res.status(500).send(err);
        }
        res.status(200).json(result);
    });
}




export default registerUser;