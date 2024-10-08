const { readFile } = require("fs").promises;
const express = require("express");
const bodyParser = require("body-parser")
const mysql = require('../api/MySQL')

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (rq, rs) => { 
    rs.send(await readFile('frontend/login.html', 'utf8'));

   /*  var sql = "SELECT * FROM users";
    mysql.con.query(sql, function(err, results) {
        if (err) throw err;
        rs.send(results);
    }); */
});

app.post("/", async (rq ,rs) => {
    let name = rq.body.name;
    let phoneNumber = rq.body.phoneNumber;
    let address = rq.body.address;

    // rs.send(`${name} ${phoneNumber} ${address}`);
    rs.send(await readFile('frontend/main.html', 'utf8'));
})

app.listen(process.env.NODE_DOCKER_PORT , () => console.log("App avaiable on http://localhost:3000"))
