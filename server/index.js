import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";


dotenv.config();
const app = express();

//using middleware
app.use(express.json());
const port=process.env.port;
app.get('/',(req,res)=>{
    res.send("Hello World");
})

//importing routes
import userRoutes from './routes/user.route.js'
//using routes
app.use('/api',userRoutes);
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
    connectDB();
});