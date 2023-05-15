const e = require('express')
const express =require('express')
const app =express()
const cors=require('cors')
const bcrypt=require('bcrypt')
const saltRounds=10
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

app.post('/signUp',(req,res)=>{
const firstName=req.body.firstName;
const lastName=req.body.lastName;
const email=req.body.email;
const password=req.body.password;

db.query("INSERT INTO users(firstName,lastName,email,password) VALUES (?,?,?,?)",[firstName,lastName,email,password],(err,result)=>{
    
    if(result){
        console.log('Sign Up succesful')
        res.send('Sign Up succesful')
    }
    if(err){
        console.log(err)
    }
    // if(result){
    //     console.log('Sign Up succesful')
    // }
}) 
})

app.post('/signIn',(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    console.log(email,password,'email,password')
    //'SELECT * FROM `books` WHERE `author` = ?', ['David'],
    db.query('SELECT * FROM `users` WHERE `email`=?',[email],(err,result)=>{
        console.log(err,result,'err,result')
        
            if(result[0].password===password){
                console.log('Sign In succesful')
                res.send('Sign In succesful')
            }
        
    })
       
})

   


// bcrypt.hash(password,saltRounds,(err,hash)=>{
//     db.query('INSERT INTO users(firstName,lastName,email,password) VALUES (?,?,?,?)',[firstName,lastName,email,hash],(err,result)=>{
//         if(result){
//             console.log(err)
//         }
//         else(result){
//                       console.log('Sign Up Successful')


//         if(result){
//             console.log(result)
//             res.send(result)
                   
//         if(result){
//             console.log(result)
//             res.send(result)
//                     }
//     }) 
// })

// })
