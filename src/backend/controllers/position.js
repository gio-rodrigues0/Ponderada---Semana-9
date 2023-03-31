const sqlite3 = require("sqlite3").verbose();
const DBPATH = "../database/db.db";

function postPositions(request, response) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    console.log('post')
    let db = new sqlite3.Database(DBPATH);
    let sql = "INSERT INTO Posição (X, Y, Z, J1, J2, J3) VALUES (?, ?, ?, ?, ?, ?)";
    console.log(request.body)
    let params = [];
    params.push(request.body.x);
    params.push(request.body.y);
    params.push(request.body.z);
    params.push(request.body.j1);
    params.push(request.body.j2);
    params.push(request.body.j3);

    db.all(sql, params, (err, rows) => {
        response.statusCode = 200;
        response.json(rows);
    });
    db.close();
};

function getPositions(request, response) {
    console.log("aqui")
    response.setHeader("Access-Control-Allow-Origin", "*");

    let db = new sqlite3.Database(DBPATH);
    console.log('abri')
    let params = [];
    params.push(request.params.positionId);
    let sql = "SELECT * FROM Posição ORDER BY Id DESC LIMIT 1";

    db.all(sql, params, (err, rows) => {
        response.statusCode = 200;
        response.json(rows)
    });
    db.close();
};

module.exports = { postPositions, getPositions }