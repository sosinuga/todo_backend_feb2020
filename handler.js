const serverlessHttp = require("serverless-http");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Logically separate 4 sections of code according to the method of the HTTP request received

//Export a single function called app

const app = express();
app.use(cors());
app.use(bodyParser.json());

// https://fjr832ry.api-gateway.aws.com/tasks (backend URL example)
// https://harrietty.github.com/todos_frontend (frontend URL example)


app.get("/tasks", function (request, response) {
    //Should make a SELECT * FROM Tasks query to the DB and return the results
    //For now, it's just going to return some dummy data

    //Request has loads of info about the request
    //Response has some useful methods for sending a response
    response.status(200).json({
        tasks:
            [{
                id: 1,
                text: "Buy milk",
                completed: false,
                date: 2020-04-15
            },
            {
                id: 2,
                text: "wash the car",
                completed: false,
                date: 2020-04-16
            },
            {
                id: 3,
                text: "post letter",
                completed: false,
                date: 2020-04-15
            }
            ]
    });

});

app.delete("/tasks/:taskId", function (request, response) {
    const id = request.params.taskId;
    response.status(200).json({
        message: `You issued a delete request for ID: ` + id
    });
});

app.post("/tasks", function (request, response) {
    const text = request.body.text;
    const date = request.body.date;
    response.json({
        message: `Received a request to add task ${text} with date ${date}`
    });
});

app.put("/tasks/:taskId", function (request, response) {
const id = request.params.taskId;
response.status(200).json({
message: `You issued a put request for task: ` + id
});
});

module.exports.app = serverlessHttp(app);