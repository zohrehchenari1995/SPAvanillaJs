const express = require ("express");
const path = require("path");
const app = express();

app.use("client",express.static(path.resolve(__dirname,"client","client/index.html")));


app.get("/*",(req,res)=> {res.sendFile(path.resolve(__dirname,"client","index.html"));
  });

  
app.listen(process.env.PORT || 5000,()=>{
  console.log("server is running");
})