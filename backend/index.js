
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { parseCode } = require('./utils/parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/docs', (req, res) => {
    const { code } = req.body;
    if (!code) return res.status(400).json({ error: 'No code provided' });
    const docs = parseCode(code);
    res.json(docs);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
