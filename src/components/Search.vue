<template>
<div class="header">
  <b-container  >
      <b-navbar type="light" variant="light" class ="container-input">
          <b-form-input v-model="searchValue" debounce="500" placeholder="Search" ></b-form-input>
      </b-navbar>
  </b-container>
</div>

</template>

 <script>
 export default {
   name: 'Search',

   data:()=>({
     searchValue:"",
   }),

   watch:{
     searchValue:"searchValueChanged",
   },

   methods: {
     searchValueChanged(){
       this.$emit("searchValueChanged", this.searchValue)
     }
   }

 }

 </script>

 <style scoped>
   .container-input{
      max-width: 500px;
      margin:auto;
   }
   .header{
     margin-bottom:30px;
   }
   .search-input{
     /* background-color: rgb(243, 237, 229) !Important; */
     box-shadow: 1px 1px 8px 0px rgba(34, 60, 80, 0.2);

   }

 </style>
