import express from "express";
import route from "./routes/route.js"; // <-- use import
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors())

// Routes
app.use("/", route);

app.listen(4040, () => {
    console.log("Server is running on port 4040..");
});
