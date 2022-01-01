
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

    //  ------------- метод для записи в App
    onSubmit() {
        if(this.formdata.task && this.formdata.comment){
            this.$emit("newTaskSubmit", { ...this.formdata });
            this.formdata.task='';
            this.formdata.comment='';
        }
        console.log(this.formdata.task);
       }

//  ------------- метод для записи на сервер
      //  async onSubmit ({ ...this.formdata }) {
      //       try {
      //           let data  = await axios.post( "http://my-site.com/set-like", {article-id: id});

      //           this.allArticles = this.allArticles.map((art)=> {
      //               if(art.id == id)
      //                    art.likesCount += 1;//или от сервера data.likesCount

      //               return art;
      //           });

      //           if(data.status == 'success'){

      //           } else {
      //               throw new Error(data.status);
      //           }

      //       } catch (e) {
      //           this.error = e;
      //       }
      //   },


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