import { json } from "express";
import { createClient } from "redis";
import fs from "fs"
import { spawn } from "child_process";
import path from "path"
import prisma from "./db.js"
const client=createClient()
client.connect()
.then(async ()=>{
    while(1)
    {
        const response=await client.rPop("problems");
        if(!response)
        {
            await new Promise((r)=>setTimeout(r,1000))
            continue;
        }
        const parsedResponse=JSON.parse(response);
        const code=parsedResponse.code;
        const language=parsedResponse.language;
        console.log("Language =", language);
        console.log("processing question for user"+parsedResponse.userId)
        if(language==="c++")
        {
            console.log("Running users c++ code")
            
            await new Promise((r)=>setTimeout(r,5000));
            //update the status in DB
        }

        if(language==="js")
        {
           // const filepath=__dirname+"/code/a.js"
           const filepath=__dirname+"code/a.js";
           console.log("Running users js code");
           fs.writeFileSync(filepath,code);
           const response=spawn("node",[filepath]);
           response.stdout.on("data",(chunk)=>{
            console.log(chunk.toString());
           })
            
          

        }

        
        if(language==="py")
        {
           // const filepath=__dirname+"/code/a.js"
           
           const filePath=__dirname+"/code/a.js";
           console.log("Running users python code")
           fs.writeFileSync(filePath,code);
           const response=spawn("python",[filePath]);
           response.stdout.on("data",(chunk)=>{
            console.log(chunk.toString());
           })

        }



        if(language==="java")
        {
            const codeDir=path.join(process.cwd(),"code");
            fs.mkdirSync(codeDir,{recursive:true});

            const filepath=path.join(codeDir,"Main.java");

            console.log("Running users java code");

             fs.writeFileSync(filepath,code)
             const response= spawn("javac",[filepath])
             response.stdout.on("data",(chunk)=>{
             console.log(chunk.toString())
            })
             await new Promise((r)=>setTimeout(r,2000));


        }
    }
})