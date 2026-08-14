import express from 'express';

const app = express();
const port = 7000;

app.get('/', (req, res) => {
    res.send('Hello World from Express!Running on port 7000');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});