import express  from "express";
import mongoose from "mongoose";
import cors from 'cors'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/questions.js'
import answerRoutes from './routes/answers.js'
import dotenv from 'dotenv'
//import mediaRoutes from './routes/media.js'
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app= express();
dotenv.config();

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit:"30mb", extended: true}))
//app.use(bodyParser.json())
//app.use(cookieParser())
app.use(cors());


app.get('/',(req, res) => {
    res.send("This is a stack Overflow Clone API")
})

app.use('/user', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answer', answerRoutes)
//app.use("/api/v1/media", mediaRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {console.log(`server running on port ${PORT}`)})

const DB_URL = process.env.CONNECTION_URL
mongoose.connect(DB_URL,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("MongoDB database connected")
}).catch((error)=>{
    console.log(error)
})