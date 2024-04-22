//we are going to host ,serve ,create website using express js

const express = require("express");
const app = express();
const port = 8000;

//app.get(route,callback)
app.get("/" , (req,res) => {
    console.log("hello from the express server");
});

app.listen(port,()=>{
     console.log(`listening to the port ${port}`);
});