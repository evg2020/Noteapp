<template>
  <div id="app">
    <Form @newTaskSubmit = "onNewTaskSubmit"/>
    <TaskList :list="list" @deleteItem="ondeleteItem" @selectedTask = "onSelectedTask"/>
    <TotalTask :total="totalOpenTasks" />
    <TaskDetailsForm :item="selectedItem"/>
  </div>
</template>

<script>
import TotalTask from "./components/TotalTask.vue"
import Form from "./components/Form.vue"
import TaskList from "./components/TaskList.vue"
import TaskDetailsForm from "./components/TaskDetailsForm.vue"


export default {
  name: 'App',
  components: {
    TotalTask,
    Form,
    TaskList,
    TaskDetailsForm,
  },
  data: () => ({
    list: {
      1:{

        task: "Write the letter",
        comment: "write letter to the customer",
        id: 1
      },
      2:{
        task: "Buy tickets",
        comment: "choose dates and buy tickets",
        id: 2
      },
    },

    selectedItem:{    }
  }),
  computed: {
    totalOpenTasks() {
           return  Object.keys(this.list).length;
    }
  },

  methods: {
    ondeleteItem(id){
      this.$delete(this.list, id);
    },

    onNewTaskSubmit (data) {
      const newObject = {...data,
       id: String(Math.random())
      }
      this.$set(this.list, newObject.id, newObject);
      console.log(this.list)

    },

    onSelectedTask(item){
     console.log(item);
     this.selectedItem = {...item}
    }
  }

};
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
