//we are going to host ,serve ,create website using express js

const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

//using builtin middleware we can serve static website
//builtin middleware - 
//console.log(__dirname);
//console.log(path.join(__dirname , '../public'));


const staticPath = path.join(__dirname,"../public");

app.use(express.static(staticPath));

//app.get(route,callback)
app.get("/" , (req,res) => {
    res.send("hello from the express server");
});

app.listen(port,()=>{
     console.log(`listening to the port ${port}`);
});
