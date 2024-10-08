const express = require("express");
const { readFile } = require("fs").promises;
const bodyParser = require("body-parser");

const router = express.Router();

router.get("/", async (req, res) => {
    try{
        res.send(await readFile("frontend/login.html", "utf8"));
        res.sendStatus(200);
    }catch(err){
        console.error(err);
        res.sendStatus(400);
    }
})

router.post('/', async (req, res) => {

})

module.exports = router;