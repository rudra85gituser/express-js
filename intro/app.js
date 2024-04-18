//task 1 to print welcome  on home page
const express = require("express");
const app = express();
app.get("/" , (req,res) =>
{
   res.send("welcone to webpage");
});
app.get("/about" , (req,res) =>
{
   res.send("welcone to about   webpage");
});


app.listen(8000,() =>{
    console.log("listening to port  8000");
});
//now by aquiring express module -> we get express function -> by express function we get express app -> consists of many express packages/modules/applications

// using express we create api"s and in api there are 4 keys
//1 get - read
//2 post - create
//3 put - update
//4 delete - delet


//   "/" represents home page/root domain eg.- www.of.com
// app.get(home page,callback)  equal to =>  app.get("/" , (req,res))





//theb call back func has two parameters -> that is request and response 
//the request represent the http request and has properties for request query string ,parameters and body
//the response represent the http response 