import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import Razorpay from "razorpay";

dotenv.config();

export const instance = new Razorpay({
    key_id: process.env.Razorpay_Key,
    key_secret: process.env.Razorpay_Secret,
  });
const app = express();

//using middleware
app.use(express.json());
const port=process.env.port;
app.get('/',(req,res)=>{
    res.send("Hello World");
})

//importing routes
import userRoutes from './routes/user.route.js'
import courseRoutes from './routes/courses.route.js'
import adminRoutes from './routes/admin.route.js'
//using routes
app.use('/api',adminRoutes);
app.use('/api',courseRoutes);
app.use('/api',userRoutes);
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
    connectDB();
});