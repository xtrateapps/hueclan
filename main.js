const express = require('express');
const app = express();
const path = require('path');
const friendRouter = require('./routes/friend')
// app configuration setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
// ---- friend router/
app.use('/friend', friendRouter)
// ----------------------------------------------------------------------------------
// other routes
app.get('/', (req, res) => {
    res.render("dog-welcome", {
        pageTitle: "New Age Of Friendship"
    })
    // console.log("Slash");
    // res.download("main.js");
    // res.status(200).send("hi");
});
// https://www.youtube.com/watch?v=SccSCuHhOw0
app.get('/dog-list', (req, res) => {
    console.log("Dow");
    res.status(200).send("value"); 
});

app.post('/new-dog', (req, res) => {
    console.log("new dow created");
    res.json({
        newDog: 'Selectable',
        dogInformation: 'New Dog',
        dogProfile: 'new dog profile selector',
        age: '10',
        name: 'new dog'
    });
});
// ----------------------------------------------------------------------------------
app.listen("3000");
console.log("Hello world");