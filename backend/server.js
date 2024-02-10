require('dotenv').config()
const Express = require('express')
const app = Express();

app.get("/", (req, res) => {
    res.send("hello World")
})


app.get('/api/jokes', (req, res) => {
    const jokes = [
        { name: 'John', age: 30, city: 'New York' },
        { name: 'Alice', age: 25, city: 'Los Angeles' },
        { name: 'Bob', age: 35, city: 'Chicago' },
        { name: 'Emily', age: 28, city: 'San Francisco' }
    ]
    res.send(jokes)
})


app.listen(process.env.PORT, () => {
    console.log(`Serevr is running in port  :   ${process.env.PORT}`);
})