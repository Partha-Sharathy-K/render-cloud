import Express from 'express';
const app=Express();
app.get('/',(req,res)=>{
    res.send("Welcome to my application");
})
app.get('/api',(req,res)=>{
    res.json({
        'message':'this is my application',
        'port':process.env.port
    })
})
const port = Number(process.env.PORT) || 3000;
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})
