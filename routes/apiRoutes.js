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
    //writeFileAsync('')
    console.log(req.body,"payload")
    const data = fs.readFileSync('./db/db.json','utf-8')
    const parsedata = JSON.parse(data)
    parsedata.push(req.body)
    fs.writeFileSync('./db/db.json',JSON.stringify(parsedata))
    res.send('good')

    //when creating notes, also add a ID attribute and it has to be unique
})

router.delete('/notes/:id', (req, res) => {
    console.log("noteid", req.params.id)
    
})

module.exports = router;