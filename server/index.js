const e = require('express')
const express =require('express')
const app =express()
const cors=require('cors')
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(3002,()=>{
console.log( 'Server running at port 3002')
})

app.post('/isEven',(req,res)=>{
const numb=req.body.val
if(numb%2 ==0){
   res.send({answer:'Even'})
}else{
 
    res.send({answer:'Odd'})
}
});