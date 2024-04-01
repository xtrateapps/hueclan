const express = require('express')
const router = express.Router(); 

router.get('', (req, res) => {
     res.json({
        data: {
            ip: "",
            location: ""
        },
        message: "Valuable place for real friendship",
        code: 0
     });
});

router.get('/fr/:id', (req, res) => {
    res.json({
        data: {
            id: req.params.id
        },
        message: "Find Friend by Id",
        code: 0
    });
}).delete('/fr/:id', (req, res) => {
    res.json({
        data: {
            id: req.params.id
        },
        message: "Delete Friend by Id",
        code: 0
    });
}).put('/fr/:id', (req, res) => {
    res.json({
        data: {
            id: req.params.id
        },
        message: "Update Friend by Id",
        code: 0
    });
});

router.get('/list', (req, res) => {
    
});

router.get('/create', (req, res) => {
    res.render('friends/new-friend', {
        data: null,
        message: "Create a new friend"
    });
});
router.post('/create', (req, res) => {

});

module.exports = router