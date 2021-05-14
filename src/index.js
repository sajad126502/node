express=require("express")
app=express()
app.get("/",(req,res)=>{
res.send("<h1>hello my name is sajad  bashir naikoo</h1>")
})
app.listen(4000,()=>{
    console.log("app is running on port 4000")
})