
<template>
  <div class ="task-list-wrap">
      <b-card   :title="header" tag="article">
        <!-- <div class="list-item " v-for ="(item, prop) in ( reserchList.length == 0 ? list : reserchList)" :key ="prop"> -->
          data from server https://mlab.com/  db tasksList  collection tasks
        <div class="list-item " v-for ="(task, index) in tasks" :key ="task._id" :index="index" >

          <span class="task-comment " @click ="getItem(task)">{{task.task}}</span>
          <b-button class = "btn-del" variant="warning" size="sm" @click="deleteItem(task._id)" >delete</b-button>

        </div>
      </b-card>
  </div>
</template>



<script>

import TaskService from '../TaskService'

export default{
  name: "TaskList",

  data: () => ({
    header: "Task list",
      tasks:[],
      error:'',
      text: '',
  }),



  props: {
    list : {
      type: Array,
      default: () => ([]),
    },
    reserchList: {
     type: Array,
      default: () => ([]),
    }
  },

  //получение коллекции tasks с сервере mLab   db tasksList
  async created(){
      try{
        this.tasks= await TaskService.getTasks()
      }catch(err){
        this.err = err.message;
      }
  },

  methods: {
/// метод для работы с данными на сервере---удаление task
      async deleteItem(id){
          await TaskService.deleteTask(id);
          this.tasks= await TaskService.getTasks()
      },
  },

};


</script>

<style scope>
.task-list-wrap{
    margin: 50px auto 1px auto;
    max-width: 100px;
    box-shadow: 1px 1px 8px 0px rgba(34, 60, 80, 0.2);

}
.list-item{
  display:flex;
  align-items: center;
  padding: 10px 15px;
}
.task-comment {
  margin-left: 5px;
  margin-right:auto;
  cursor: pointer;
}



</style>
