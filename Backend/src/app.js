import cors from "cors";
import express from "express";
import aiRoutes from "./routes/ai.routes.js";
const app=express()

app.use(cors());


app.use(express.json());
app.get("/",(req,res)=>{
   res.send("Hello world");
})
app.use("/ai",aiRoutes);
// module.exports=app
export default app;