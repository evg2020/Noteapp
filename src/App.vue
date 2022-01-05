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
import TaskDetailsForm from "./components/TaskDetailsForm.vue"





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
    list:[],
    selectedItem:{},
    reserchList:[],

  }),



  methods: {
    // Метод отсылает данные в компонент TaskDetailsForm
    onSelectedTask(item) {
      this.selectedItem = item;
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
