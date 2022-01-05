
<template>
  <div class ="form-card">
    <p>
      <b-form  :model="formdata" ref="addItemForm" >
        <b-form-group label="New task:" >
          <b-form-input class = "mb-3" v-model="formdata.task" placeholder="Enter task" required></b-form-input>
          <b-form-input class = "mb-3" v-model="formdata.comment" placeholder="task description" required></b-form-input>
        </b-form-group>
        <b-button @click="insertTask" variant="primary" >Submit</b-button>

      </b-form>
    </p>

  </div>
</template>

<script>
import TaskService from '../TaskService';

export default{

  name :"Form",

  data: () => ({
      formdata: {
        task: "",
        comment: "",
      },
    }),


  methods: {
    /// метод для работы с данными на сервере---вставка task
       async insertTask(){
          await TaskService.insertTask({ ...this.formdata });
          this.tasks= await TaskService.getTasks();
          this.formdata.task='';
          this.formdata.comment='';
      },
  }

 }

</script>

<style scoped>

.form-card{
  max-width: 500px;
  margin:auto;
  margin-bottom: 50px;

}

</style>