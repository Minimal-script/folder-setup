import express from "express";
import userRoute from "./src/routes/user.route.js";

const app = express();
const PORT = 5000;

app.use("/user", userRoute)



app.listen(PORT, () => {
    console.log("Server is running on port $ {PORT}");
});