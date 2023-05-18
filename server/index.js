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
app.get("/", (req, res) => {
    res.json("hello");
  });

// app.post('/products', (req, res) => {
//     const q = "SELECT * FROM products";
//     // const  product_name = req.body. product_name;
//     // const description = req.body.description;
//     // const  price = req.body. price ;
//     // const stock_quantity = req.body.stock_quantity;
//     // Assuming you have a 'products' table in your database
//     db.query(q, (err, data) => {
//         if (err) {
//           console.log(err);
//           return res.json(err);
//         }
//         return res.json(data);
//       });
//         // 'INSERT INTO products (product_name, description, price, stock_quantity) VALUES (?, ?, ?, ?)',
//         // [product_name, description, price, stock_quantity],
//         // (err, result) => {
//         //     if (result) {
//         //       console.log('successful');
//         //       res.send('successful');
//         //     }
//         //     if (err) {
//         //               console.log(err);
//         //                res.status(500).json({ message: 'An error occurred' });
//         //                }
            
        

//     })
//     app.post('/products',(req,res)=>{
//         const q = 'INSERT INTO products(product_name,description,price,stock_quantity) VALUES (?, ?, ?, ?)'
//         const values = [
//             req.body.product_name,
//             req.body.description,
//             req.body.price,
//             req.body.stock_quantity,
//           ];
        
//    const result= db.query(q,[values],(err,data)=>{
//     if(err) return res.json(err)
//     return res.json(data);
//    })
//    console.log(result,"result")
//     })


app.post('/products',(req,res)=>{
    console.log(req.body,"req.body")
    const product_name=req.body.product_name;
    const description=req.body.description;
    const price=req.body.price;
    const stock_quantity=req.body.stock_quantity;
    
    db.query("INSERT INTO products(product_name,description,price,stock_quantity) VALUES (?,?,?,?)",[product_name,description,price,stock_quantity],(err,result)=>{
        
        if(result){
            console.log('Sign Up succesful')
            res.send('Sign Up succesful')
        }
        if(err){
            console.log(err)
        }
       
    }) 
    })

    app.delete("/products/:id", (req, res) => {
        const productId = req.params.id;
        const q = " DELETE FROM products WHERE id = ? ";
      
        db.query(q, [productId], (err, data) => {
          if (err) return res.send(err);
          return res.json(data);
        });
      });
 

   
