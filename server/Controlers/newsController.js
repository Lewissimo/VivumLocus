import { db } from "../index.js";

export const addNews = (req, res) => {
    const { title, content, owner } = req.body;
    const sql = "INSERT INTO news (title, content, owner) VALUES (?, ?, ?);";
    console.log(req.body);
    db.query(sql, [title, content, owner], (err, result) => {
        if(err) {
            return res.status(500).send('wystąpił błąd podczas dodawania wiadomości');
        }
        res.status(200).send("poprawnie dodano wiadomość");
    });
};

export const deleteNews = (req, res) => {
    const { id } = req.body;
    const sql = "DELETE FROM news WHERE id = ?";
    
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).send('Wystąpił błąd podczas usuwania wiadomości.');
        }

        if(result.affectedRows === 0) {
            return res.status(404).send('Nie znaleziono wiadomości o podanym ID.');
        }

        res.status(200).send('Wiadomość została usunięta.');
    });
};


export const updateNews = (req, res) => {
    const { id, title, content } = req.body;
    const sql = "UPDATE news SET title = ?, content = ? WHERE id = ?";

    db.query(sql, [title, content, id], (err, result) => {
        if(err) {
            return res.status(500).send('Wystąpił błąd podczas aktualizacji wiadomości.');
        }

        if(result.affectedRows === 0) {
            return res.status(404).send('Nie znaleziono wiadomości o podanym ID.');
        }

        res.status(200).send('Wiadomość została zaktualizowana.');
    });

};

export const loadNews = (req, res) => {
    const sql = "SELECT * FROM news ORDER BY date DESC LIMIT ?";
    const { limit } = req.body;
    console.log(limit);
    if (isNaN(limit) || limit <= 0) {
        return res.status(400).send("Nieprawidłowa wartość limitu.");
    }
    

    db.query(sql, [limit], (err, result) => {
        if(err) {
            return res.status(500).send("Problem z bazą danych");
        }
        res.status(200).json(result);
    })
}