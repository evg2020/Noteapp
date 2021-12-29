<template>
<div class="task-list-wrap">
  <el-card :header="header" >
  <div class ="list">
      <p class="task-item">{{item.task}}</p>
      <p class="comment">{{item.comment}} </p>
    </div>
</el-card>

</div>


</template>

<script>
export default{
  name: "TaskDetailsForm",

  data: () => ({
    header: "Task details",
    emptyTitle: "Empty List"
  }),

  props: {
    item : {
      type: Object,
      default: () => ({}),
    }
  },

  methods: {
    deleteItem(id) {
      console.log(id)
      this.$emit('deleteItem', id);
    }
  }
};
</script>

<style scope>
.task-list-wrap{
    margin: auto;
    max-width: 500px;
    padding-top: 50px;
}

.comment{
box-shadow: 1px 1px 8px 0px rgba(34, 60, 80, 0.2);
padding: 10px;
}

.list{
  text-align: left;

}


</style>
