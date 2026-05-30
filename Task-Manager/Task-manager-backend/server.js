const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

/* ✅ GET all tasks */
app.get('/tasks', (req, res) => {
    db.query('SELECT * FROM tasks', (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

/* ✅ ADD task */
app.post('/tasks', (req, res) => {
    const { task, des } = req.body;

    const sql = 'INSERT INTO tasks (task, des) VALUES (?, ?)';
    db.query(sql, [task, des], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ id: result.insertId, task, des, complete: false });
    });
});

/* ✅ UPDATE task */
app.put('/tasks/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'UPDATE tasks SET complete = true WHERE id = ?';
    db.query(sql, [id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Task updated' });
    });
});

/* ✅ DELETE task */
app.delete('/tasks/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM tasks WHERE id = ?';
    db.query(sql, [id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Task deleted' });
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});