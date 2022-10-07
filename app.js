const express=require('express');
const path=require('path');

const app=express();
const publicPath=path.join(__dirname,'/public');

app.use(express.static(publicPath));


// app.listen(3000, ()=>{
//     console.log('Servidor OK en','http://localhost:3000')
// });

const port=process.env.PORT || 3000;
app.listen(port,()=>console.log('Servidor corriendo en el puerto ${port}'));


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
});

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'))
});

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'))
});