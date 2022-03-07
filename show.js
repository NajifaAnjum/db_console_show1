const express = require('require')
const router = express.Router()
const db = require('db')

router.get('/',(req,res) =>{
    db.any("SELECT * FROM person;")
    .then(rown =>{
        console.log(rows);
        res.json(rows)
    })
    .catch(error =>{
        console.log(error)
    })
})
module.exports = router;