const session = require('express-session'); // package to maintain a session between clientside and server
const express = require('express'); //web framework to code this server
const bodyParser = require('body-parser') // to get the json body of a POST request
const app = express();

app.use(session({
    secret:"any string you want",
    resave: false,
    saveUninitialized:true,
    rolling:true
}));

// ability to parse json POST requests with size limit of 50mb
app.use(bodyParser.json({limit:'50mb'})) 

app.post()


//api endpoint; can be accessed with localhost:8080/authenticate
app.post('/authenticate',(req,res)=>{
    isAuthenticated = false;
    if(req.body.username === "user1" && req.body.password === "password"){
        isAuthenticated = true;
    }
    return res.send(isAuthenticated);
});

app.get("*", (req,res)=>{
    res.send('Hello World!')
})

app.listen(8080, ()=>{
    console.log("server listening on 8080")
})