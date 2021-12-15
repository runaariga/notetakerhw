const path = require('path');
const router = require('express').Router();
const util = require('util');
const fs = require('fs');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// "/notes" responds with the notes.html file
router.get('/notes', (req, res) => {
   readFileAsync('./db/db.json')
   .then((data)=>{
        res.json(JSON.parse(data))
   }) 
});

router.post('/notes', (req, res) => {
    writeFileAsync('')
})

module.exports = router;