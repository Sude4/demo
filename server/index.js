const e = require('express')
const express =require('express')
const app =express()
const cors=require('cors')
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const mysql=require('mysql')
app.listen(3002,()=>{
console.log( 'Server running at port 3002')
})
const db=mysql.createConnection({
user:'react',
host:'localhost',
password:'Manisa.45',
database:'project1'
})

app.post('/addUser',(req,res)=>{
const firstName=req.body.firstName;
const lastName=req.body.lastName;

db.query("INSERT INTO users(firstName,lastName) VALUES (?,?)",[firstName,lastName],(err,res)=>{
    if(err){
        console.log(err)
    }
}) 
})

app.post('/getUsers',(req,res)=>{

    db.query('SELECT * FROM users',(err,result)=>{
        if(err){
            console.log(err)
        }

        if(result){
            console.log(result)
            res.send(result)
        }
    })
})