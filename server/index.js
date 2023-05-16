const e = require('express') // Importing Express module
const express =require('express')
const app =express() // Creating Express app
const cors=require('cors')
const bcrypt=require('bcrypt')
const saltRounds=10
app.use(cors()); // Enable CORS
app.use(express.urlencoded({ extended: true }));// Parse URL-encoded bodies
app.use(express.json());// Parse JSON bodies
const mysql=require('mysql')// Importing MySQL module

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

app.post('/home', (req, res) => {
    const  product_name = req.body. product_name;
    const description = req.body.description;
    const  price = req.body. price ;
    const stock_quantity = req.body.stock_quantity;
    // Assuming you have a 'products' table in your database
    db.query(
        'INSERT INTO products (product_name, description, price, stock_quantity) VALUES (?, ?, ?, ?)',
        [product_name, description, price, stock_quantity],
        (err, result) => {
            if (result) {
              console.log('successful');
              res.send('successful');
            }
            if (err) {
                      console.log(err);
                       res.status(500).json({ message: 'An error occurred' });
                       }
            
        })

    })
    

   
