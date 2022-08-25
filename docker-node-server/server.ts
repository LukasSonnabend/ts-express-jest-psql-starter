'use strict';
import express from "express";
import apiRouter from "./routes/api";
import bodyParser from "body-parser";

// Constants
const PORT = process.env.NODE_ENV === 'test' ? 1234 : process.env.EXPRESS_PORT|| 6666;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  // send json response
  res.json({
    message: 'Hello World!'
  });


  // res.send('Hello from Visweb!');
});

app.use('/api', apiRouter);
const server = app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);

export {app, server};