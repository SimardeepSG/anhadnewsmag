const express = require('express');
// importing package and storing as a variable
const path = require('path');
const SibApiV3Sdk = require('sib-api-v3-sdk');
require('dotenv').config({path: __dirname + "/variables.env"})
// env important for storing sensitive information that you do not want to import into github - keys and passwords should go here
const app = express(); 



app.post("/sendemail", (req, res, next) => {
    const apikey = process.env.SIB_API_KEY 
    const email = req.query.email; 
    // auth + setup
    let defaultClient = SibApiV3Sdk.ApiClient.instance; 
    let apiKey = defaultClient.authentications['api-key']; 
    apiKey.apiKey = apikey; 

    let apiInstance = new SibApiV3Sdk.ContactsApi(); 
    let createContact = new SibApiV3Sdk.CreateContact(); 
    createContact.email = email; 
    createContact.listIds = [3]; 


    // call SIB api 
    apiInstance.createContact(createContact).then((data) => {
        // success 
        res.status(200); 
        res.send("success");
    }, function (error) {
        // error
        console.log(error)
        res.status(500); 
        res.send("failure");
    })
})


// frontend endpoint 
app.use((req, res, next) => {
    res.sendFile(__dirname + "/Client/src/ComingSoon/subscribe.js");
})

// app.listen(9001, () => {
//     console.log("app running on port 5000!")
// })
// settign up a port
const port = process.env.PORT || 9001; 
app.listen(port); 

console.log(`expresslistening port ${port}`)




// //send email endpoint
// app.post("./sendemail", (req, res, next) => {
//     const email = req.query.email; 
//     console.log(email);

//     res.send("success");
// })


// //frontend endpoint
// app.use((req, res, next) => {
//     res.sendFile(__dirname + "./index.html");

// })

// app.listen(5000, () => {
//     console.log("app running on port 5000")
// })