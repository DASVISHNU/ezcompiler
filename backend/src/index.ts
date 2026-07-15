import express from "express"
import { createClient } from "redis"
import {prisma} from "./db.js"
import "dotenv/config";
const client= createClient();
client.connect();
const app=express()

app.use(express.json())

app.post("/submission",async (req,res)=>{
    const userId=req.body.userId;
   // const questionId=req.body.questionId;
    const code=req.body.code;
    const language=req.body.language;

    const response=await prisma.submissions.create({
        data:{
            language,
            code,
            status:"Processing"
        }
    })





    client.lPush("problems",JSON.stringify({userId,code,language}))

    res.json({
        message:"processing",
        id:response.id
    })
})

app.get("/submission/:submissionId",(req,res)=>{

})


app.listen(3000);