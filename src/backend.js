import express from "express";
import cors from "cors"
import jwt from "jsonwebtoken";


const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/register',(req,res)=>{
    const receivedData = req.body;
    res.send(true);
})

app.post('/api/login', (req, res) => {
    const receivedData = req.body;
    const token = jwt.sign({receivedData},"jlakdf");
    res.json({token});
});




app.listen(3000,()=>{
console.log("Server start at port number 3000");
});