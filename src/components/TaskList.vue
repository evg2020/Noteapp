
<template>
  <div class ="task-list-wrap">
      <b-card   :title="header" tag="article">
        <div class="list-item " v-for ="(item, prop) in ( reserchList.length == 0 ? list :reserchList )" :key ="prop">
          <span class="task-comment " @click ="getItem(item)">{{item.task}}</span>
         <b-button class = "btn-del" variant="warning" size="sm" @click="deleteItem(item.id)"  >delete</b-button>
        </div>
      </b-card>
  </div>
</template>



<script>
export default{
  name: "TaskList",

  data: () => ({
    header: "Task list",

  }),

  props: {
    list : {
      type: Array,
      default: () => [],
    },
    reserchList: {
      type:Array,
       default: () => []

    }
  },

  methods: {

    deleteItem(id) {
            this.$emit('deleteItem', id);
    },

    getItem(data) {
      console.log(data.task)
      this.$emit('selectedTask', data);
    }

    },
};
</script>

<style scope>
.task-list-wrap{
    margin: 50px auto 1px auto;
    max-width: 100px;
    box-shadow: 1px 1px 8px 0px rgba(34, 60, 80, 0.2);

}
.list-item{
  display:flex;
  align-items: center;
  padding: 10px 15px;
}
.task-comment {
  margin-left: 5px;
  margin-right:auto;
}



</style>
