import dotenv from "dotenv";
import app from "./src/app.js";
dotenv.config();  // Ensure .env is loaded

const App=app;

App.listen(3000,()=>{
    console.log("Server is running on port 3000")
})