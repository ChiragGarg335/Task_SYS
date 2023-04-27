const express=require("express")
const connectDB=require("./config/db")
const productRoute=require("./routes/routes")
const app=express();
const dotenv=require('dotenv')
const cors=require('cors')
app.use(cors())

app.use(express.json())

dotenv.config()
app.listen(5000,console.log("Server started"))

connectDB()

app.use('/api/product',productRoute)

app.get("/",(req,res)=>{
    res.send("Api is running")
})