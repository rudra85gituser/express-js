//how to send html data and serve json files in expess js
//when we use routing how we can serve html anf json data to user/client

//now we have to display the proper html page instead of text - "welcome to my page"
const express = require("express");
const sending = express();
const port = 4000;

//to write code in html in web page we can use tags
// now there is only one line in tags
//how we can send whole home pade code ?
//when we have to send one line of html code - res.send
//when we have to send multiple line of html code - res.write  , it write response till user stops
////when we have to end/stop sending html code - res.end
sending.get('/',(req,res)=>{
    res.send("<h1> welcome to my home page </h1>");
    res.write("<h1> welcome to my home page </h1>");
    res.send();
});
//to serve code in json format or to send api - we pass data in array and object format and express converts it into json format
//
sending.get('/temp',(req,res)=>{

//instead of writing send we can also write json , it automatically convert data in json format 
// the methods are identical when an object and array is pssed , but res.json() will also cinverts non objects such as nulla nd ubdefined ,which are not vslid in json   
//data in object format
    res.send({
        id: 221312,
        name: "rudrs",
    });
//data in array format
    res.send([
    {
        id: 221312,
        name: "rudrs",
    },
    {
        id: 221312,
        name: "rudrs",
    },
    {
        id: 221312,
        name: "rudrs",
    },
    {
        id: 221312,
        name: "rudrs",
    }
    ]);

});

sending.listen(port , () => {
    console.log(`listening to the port number ${port}`);
});