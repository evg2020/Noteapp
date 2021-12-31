
<template>
  <div class ="task-list-wrap">
      <b-card   :title="header" tag="article">
        <div class="list-item " v-for ="(item, prop) in list" :key ="prop">
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
      type: Object,
      default: () => ({}),
    }
  },
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length
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
    margin: auto;
    max-width: 500px;
    padding-top: 50px;
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
