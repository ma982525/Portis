const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'portis'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Mysql connected');
})
const app = express();

app.post('/api/form', (req,res) =>{
    let val = {"Name":req.body.Name, "email":req.body.Email, "Promotion":req.body.Promotion};
    let sql='Insert into enquiry SET ?';
    let query = db.query(sql,val, (err,result) => {
        if(err){
            throw err;
        }
        console.log(result);
        res.send('Data Added');
    });
});

app.listen('4000',()=>{
    console.log('Server started!');
});
