import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { db } from '../index.js';
import validator from 'validator';

export const verifyTokenUser = (req, res, next) => {
    // Pobierz token z nagłówków żądania
    const token = req.headers['authorization'];

    // Sprawdź, czy token nie jest pusty
    if (!token) {
        return res.status(403).send('Token jest wymagany do autoryzacji.');
    }

    try {
        // Weryfikuj token używając sekretu
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Przypisz dekodowane dane z tokena do obiektu żądania, aby były dostępne w następnych middleware/funkcjach
        req.user = decoded;
    } catch (err) {
        return res.status(401).send('Nieprawidłowy token.');
    }

    next();
};
export const verifyTokenAdmin = (req, res, next) => {
    // Pobierz token z nagłówków żądania
    const token = req.headers['authorization'];

    // Sprawdź, czy token nie jest pusty
    if (!token) {
        return res.status(403).send('Token jest wymagany do autoryzacji.');
    }

    try {
        // Weryfikuj token używając sekretu
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Przypisz dekodowane dane z tokena do obiektu żądania, aby były dostępne w następnych middleware/funkcjach
        req.user = decoded;
    } catch (err) {
        return res.status(401).send('Nieprawidłowy token.');
    }
    if(req.user.role === 'admin'){

        next();
    }
    else{
        res.status(403).json('No permision');
    }
};
export const verifyTokenEmployee = (req, res, next) => {
    // Pobierz token z nagłówków żądania
    const token = req.headers['authorization'];

    // Sprawdź, czy token nie jest pusty
    if (!token) {
        return res.status(403).send('Token jest wymagany do autoryzacji.');
    }

    try {
        // Weryfikuj token używając sekretu
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Przypisz dekodowane dane z tokena do obiektu żądania, aby były dostępne w następnych middleware/funkcjach
        req.user = decoded;
    } catch (err) {
        return res.status(401).send('Nieprawidłowy token.');
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
            return res.status(500).json({ message: 'Błąd podczas wyszukiwania użytkownika.', error: err });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Nie znaleziono użytkownika z podanym adresem email.' });
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



const registerUser = async (req, res) => {
    const { f_name, l_name, email, password, adres, photoURL, label } = req.body;
    
    if(!(f_name && l_name && password && adres)){
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
        res.status(200).send('Wiadomość została zaktualizowana.');
    });
    
    
};

export default registerUser;