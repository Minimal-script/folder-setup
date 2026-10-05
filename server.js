import express from "express";
import userRouter from "./src/routes/user.route.js";
import authRouter from "./src/routes/auth.route.js";
import "dotenv/config";
import connectDB from "./src/config/db.js";
import productRouter from "./src/routes/product.route.js"

const app = express();
const PORT = 5000;

app.use(express.json())
app.use(express.static("public"));

app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/product", productRouter);



app.listen(PORT, async () => {
    await connectDB()
    console.log("Server is running on port $ {PORT}");
});