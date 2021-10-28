const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hey MAn Whats UP!')
})

const users = [
    { id: 0, name: 'protik', email: 'sheikhprotik@gmail.com', phone: '01878044854' },
    { id: 1, name: 'arafin', email: 'sheikhprotik@gmail.com', phone: '01878044854' },
    { id: 2, name: 'dipu', email: 'sheikhprotik@gmail.com', phone: '01878044854' },
    { id: 3, name: 'sallu', email: 'sheikhprotik@gmail.com', phone: '01878044854' },
    { id: 4, name: 'tanvir', email: 'sheikhprotik@gmail.com', phone: '01878044854' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);

    }
    else {
        res.send(users);
    }

});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.listen(port, () => {
    console.log(`listening from port`, port)
});