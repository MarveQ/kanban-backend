const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3001
const dbConnect = require('./dbConnection');

dbConnect();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

let cards = [
    {
        _id: "1",
        name: "card 1",
        status: "todo",
        priority: 3
    },
    {
        _id: "2",
        name: "card ",
        status: "in progress",
        priority: 1
    },
    {
        _id: "3",
        name: "card 3",
        status: "review",
        priority: 5
    },
    {
        _id: "4",
        name: "card 4",
        status: "done",
        priority: 7
    },
]

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/cards', (req, res) => {
    res.send(cards)
})

app.delete('/cards/:cardId', (req, res) => {
    const cardId = req.params.cardId;
    cards = cards.filter(item => item.id !== cardId)
    res.send(cards);
})

app.post('/cards', (req, res) => {
    const card = req.body;
    cards.push({_id: Math.random().toString(), ...card});
    res.send("Card has been created")
})

app.patch('/cards/:cardId', (req, res) => {
    const cardId = req.params.cardId;
    const card = req.body;
    cards = cards.map(item => item.id === cardId ? {_id: Math.random(),...card} : item)
    res.send("Card has been updated");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})