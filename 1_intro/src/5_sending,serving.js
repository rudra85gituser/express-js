//till now we have seen how we can send html and json data as a response
// now how to create a website using express js  0rr   how we can host our web pages on our server
//we can host our static website by writing only one line of code - express.static

//first create static website or webpage 
//after this  mention path


/*
Serving static files in Express
To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

The function signature is:

express.static(root, [options])
The root argument specifies the root directory from which to serve static assets. For more information on the options argument, see express.static.

For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:

app.use(express.static('public'))
Now, you can load the files that are in the public directory:
*/


//basically use  = express.static(root, [options])
const path = require("path");
const express = require("express");
const app = express();
const port = 8000;


//in express there are two types of path
//1 relative path - ../,../
//2 absolute path - __dirname      ,use this
//console.log(__dirname);
//console.log(path.join(__dirname,"..public"));

const staticPath = path.join(__dirname,"../public");

//builtin middleware
app.use(express.static(staticPath));

app.get('/',(req,res)=>{
    res.send("welcome to my home page");
});
app.get('/about',(req,res)=>{
    res.send("welcome to my about page");
});
app.get('/contact',(req,res)=>{
    res.send("welcome to my contact page");
});
app.get('/temp',(req,res)=>{
    res.send("welcome to my temperature page");
});


app.listen(port , () => {
     console.log(`listening to the port number ${port}`);
});
