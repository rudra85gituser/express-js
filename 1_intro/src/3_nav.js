//motivation whenever we type
// www.rudra.com -> welcome to my home page
// /about -> welcome to my about page
// /contact -> welcome to my contact page
// /temp -> welcome to temperature page

//routing means how many pages are there in website and how we can visit them

//now we can can excess all properties of express module
const express = require("express");
const app = express();
const port = 3000;

//app.get(route,callback)
//route means - kaha jana hai eg (contact page , about page  etc)
//in callbact we pass two object request and response
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




/*
difference between -  response.send  and response.status(200).send

});
In Express, both response.send("welcome to my home page"); and response.status(200).send("welcome to my home page"); are used to send a response to the client, but they have a slight difference in how they handle the HTTP status code.

 - response.send("welcome to my home page");: This method sends a response with a default HTTP status code of 200 (OK). It's a shorthand method for sending a response without explicitly setting the status code. In this case, the status code 200 indicates that the request was successful.

 - response.status(200).send("welcome to my home page");: This method explicitly sets the HTTP status code to 200 using the status() method and then sends the response using the send() method. While this achieves the same result as the first method (sending a response with a status code of 200), it explicitly sets the status code, which can be useful when you want to be more explicit about the status code being sent.

In summary, both methods send a response with a status code of 200, but the second method is more explicit in setting the status code before sending the response.
*/