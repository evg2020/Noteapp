<template>
  <div id="app">
    <Form @newTaskSubmit = "onNewTaskSubmit"/>
    <Search @searchValueChanged="onSearchValueChanged"/>
    <TaskList :list="list" :reserchList ="reserchList"   @deleteItem="ondeleteItem" @selectedTask = "onSelectedTask"/>
    <TotalTask :total="totalOpenTasks" />
    <TaskDetailsForm :item="selectedItem"/>



  </div>
</template>

<script>
import Search from "./components/Search.vue"
import TotalTask from "./components/TotalTask.vue"
import Form from "./components/Form.vue"
import TaskList from "./components/TaskList.vue"
import TaskDetailsForm from "./components/TaskDetailsForm.vue";

// import axios from 'axios'


export default {

  name: 'App',
  components: {
    Search,
    TotalTask,
    Form,
    TaskList,
    TaskDetailsForm,


  },
  data: () => ({
    list: [
      {
        task: "Write the letter",
        comment: "write letter to the customer",
        id: 1
      },
      {
        task: "Buy tickets",
        comment: "choose dates and buy tickets",
        id: 2
      },
    ],

    selectedItem:[],

    reserchList:[],


  }),

  computed: {
    totalOpenTasks() {
     return  this.list.length;
    }
  },

  watch: {
     list:"onSearchValueChanged"
  },


  methods: {

    ondeleteItem(id){
      this.list = this.list.filter((item) =>  item.id !== id);
    },


    onNewTaskSubmit(data){
      data.id = String(Math.random());
      this.list.push(data)

    },

    onSelectedTask(item){
      console.log(item);
      this.selectedItem = item
    },

    onSearchValueChanged(data){
        const seachedArr = [];
      for(let item of (this.list)) {
        if(JSON.stringify(item).includes(data)){
        seachedArr.push(item);
       }
      }
      return this.reserchList= seachedArr;

    },

  }
}


</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>


