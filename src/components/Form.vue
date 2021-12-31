
<template>
  <div class ="form-card">
    <p>
      <b-form  :model="formdata" ref="addItemForm" >
        <b-form-group label="New task:" >
          <b-form-input class = "mb-3" v-model="formdata.task" placeholder="Enter task" required></b-form-input>
          <b-form-input class = "mb-3" v-model="formdata.comment" placeholder="task description" required></b-form-input>
        </b-form-group>
        <b-button @click="onSubmit" variant="primary" >Submit</b-button>

      </b-form>
    </p>

  </div>
</template>

<script>
export default{

name: "Form",

  data: () => ({
      formdata: {
        task: "",
        comment: "",
      },
}),


  methods: {
    onSubmit() {
        if(this.formdata.task && this.formdata.comment){
            this.$emit("newTaskSubmit", { ...this.formdata });
            this.formdata.task='';
            this.formdata.comment='';
        }
        console.log(this.formdata.task);
       }
 }

}
</script>

<style scoped>

.form-card{
  max-width: 500px;
  margin:auto;

}

</style>