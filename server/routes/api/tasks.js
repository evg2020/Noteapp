const express = require('express');
const { MongoClient } = require('mongodb');


const router = express.Router();

//GetTask
router.get('/',  async(req, res) => {
  // res.send("newOne");
  const tasks =  loadTasksConnection();
  res.send( tasks.find());
});

//AddTask
 router.post ('/', async(req, res) => {
  const tasks = await loadTasksConnection();
   await tasks.insertOne({
     task:req.body.text,
     comment:req.body.text,
   });
   res.status(201).send();
  });

  //delete Task
  router.delete('/:id',  async(req, res) => {
    const tasks = await loadTasksConnection();
    await tasks.delete({_id: req.params.id});
    res.status(201).send();
  });

  async function loadTasksConnection(){
    const uri = "mongodb+srv://abc123:bashneft2020@cluster0.7brhx.mongodb.net/taskList?retryWrites=true&w=majority";
    const client =  new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(()=> {
    return client.db("taskList").collection("task");
    // perform actions on the collection object

    });
 }

 module.exports = router;
