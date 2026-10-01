import express from "express";
import userRoute from "./src/routes/user.route.js";
import "dotenv/config";
import connectDB from "./src/config/db.js";
import productRoute from "./src/routes/product.route.js"

const app = express();
const PORT = 5000;

app.use(express.json())

app.use("/user", userRoute)
app.use("/product", productRoute)



app.listen(PORT, async () => {
    await connectDB()
    console.log("Server is running on port $ {PORT}");
});