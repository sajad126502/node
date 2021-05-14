express=require("express")
app=express()
web_port=process.env.PORT || 4000
app.get("/",(req,res)=>{
    
res.send("<h1>hello my name is sajad  bashir naikoo</h1>")
})
app.listen(web_port,()=>{
    console.log("app is running on port 4000")
})
