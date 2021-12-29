<template>
<ElCard class ="form-card">
  <ElForm :model="formdata" ref="addItemForm" :rules="rules" lable-position="botton" >

   <ElFormItem label="Task" prop="task">
      <el-input v-model="formdata.task"/>
    </ElFormItem>
   <ElFormItem label="Comments" prop="comment">
      <el-input v-model="formdata.comment"/>
    </ElFormItem>

    <ElButton @click="onSubmit" type="primary">Submit</ElButton>



  </ElForm>
</ElCard>
</template>

<script>
export default{

name: "Form",

data: () => ({
 formdata: {
   task: "",
   comment: "",
 },

 rules: {
  comment:[{ required: true, message:"please select", trigger:'change' }],
  task:[{ required: true, message:"please select", trigger:'change' }]
},

}),


methods: {
  onSubmit() {
    // console.log(this.$refs.addItemForm.validate((valid)=>{console.log(valid)}))
    this.$refs.addItemForm.validate((valid) => {
      if(valid){
        this.$emit('newTaskSubmit',{...this.formdata});
        this.$refs.addItemForm.resetFields();
      }
    })
  },
},




}
</script>

<style scoped>
.form-card{
  max-width: 500px;
  margin:auto;

}

</style>