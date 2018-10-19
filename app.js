const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

let dogList = [];

app.get('/', (req, res) =>
    res.status(200).json({dogs: dogList}));

app.get('/:index', (req, res) =>
    res.status(200).json({dogs: dogList[req.params.index]}));

app.post('/', (req, res) => {
    dogList.push(req.body.dogName);
    res.status(200).json({status: `Added ${req.body.dogName}!`});
});

app.listen(port, () => console.log(`Example app
listening on port ${port}!`));