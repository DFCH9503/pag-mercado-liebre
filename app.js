const express=require('express');
const path=require('path');

const app=express();
const publicPath=path.join(__dirname,'/public');

app.use(express.static(publicPath));


app.listen(3000, ()=>{
    console.log('Servidor OK en','http://localhost:3000')
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
});