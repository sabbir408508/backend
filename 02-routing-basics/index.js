const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/about', (req, res) => {
    res.send('This is About Page');
});

app.post('/users', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    res.send(`User created: ${name}, ${email}`);
});

app.put('/users', (req, res) => {
    res.send('User updated via PUT');
});

app.delete('/users', (req, res) => {
    res.send('User deleted via DELETE');
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});

app.get('/search', (req, res) => {
    const keyword = req.query.keyword;
    const page = req.query.page || 1;
    res.send(`Searching: ${keyword}, Page: ${page}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});