const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Midleware
app.use(bodyParser.json());
app.use(cors());

const tasks = require('./routes/api/tasks');

app.use('/api/tasks', tasks);

const port  = process.env.PORT || 5000;

app.listen(port, () => console.log(`serve on the port ${port}`));
