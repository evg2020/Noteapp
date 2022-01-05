
<template>
  <div class="task-list-wrap">
    <b-card   :title="header" tag="article"    class="mb-4 "   >
      <p class="comment task-item text-left list" >{{item.task}}</p>
     <p class="comment text-left list">{{item.comment}} </p>
    </b-card>
  </div>
</template>


<script>
export default{
  name: "TaskDetailsForm",

  data: () => ({
    header: "Task details",

  }),

  props: {
    item : {
      type: Object,
      default: () => ([]),
    }
  },

};
</script>

<style scope>
  .task-list-wrap{
      margin: auto;
      max-width: 500px;

  }

  .comment{
  box-shadow: 1px 1px 8px 0px rgba(34, 60, 80, 0.2);
  padding: 10px;
  }

  .list{
    text-align: left;
  }

</style>
