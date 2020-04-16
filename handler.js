const serverlessHttp = require("serverless-http");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Logically separate 4 sections of code according to the method of the HTTP request received

//Export a single function called app

const app = express();
app.use(cors());

// https://fjr832ry.api-gateway.aws.com/tasks (backend URL example)
// https://harrietty.github.com/todos_frontend (frontend URL example)


app.get("/tasks", function (request, response) {
//Should make a SELECT * FROM Tasks query to the DB and return the results
//For now, it's just going to return some dummy data

//Request has loads of info about the request
//Response has some useful methods for sending a response
response.status(200).send({ tasks: 
["Buy milk", "wash the car", "post letter"] });

});

app.delete("/tasks", function (request, response){
const id = request.params.taskId;
response.json({
    message: `Delete Task ${id}`
});
});

app.post("/tasks", function (request, response){
const text = request.body.text;
const date = request.body.date;
response.json({
    message: `Received a request to add task ${text} with date ${date}`
});
});

app.put("/tasks", function (request, response){

});

module.exports.app = serverlessHttp(app);