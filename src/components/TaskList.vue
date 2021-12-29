<template>
<div class="task-list-wrap">
  <ElCard :header ="header">
    <template v-if ="!isEmpty">
    <div class="list-item" v-for ="(item, prop) in list" :key ="prop">
      <span class="task-comment" @click ="getItem(item)">{{item.task}}</span>
      <span class="task-value">
      <ElButton   type ="danger" size="mini" @click ="deleteItem(item.id)">delete</ElButton>
      </span>
    </div>
    </template>
    <ElAlert  v-else type ="info" :title="emptyTitle" />
  </ElCard>

</div>

</template>

<script>
export default{
  name: "TaskList",

  data: () => ({
    header: "Task list",
    emptyTitle: "Empty List"
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
  display: flex;
  align-items: center;
  padding: 10px 15px;

}

.task-value{
  font-weight: bolt;
  margin-left:auto;
  margin-right: 20px;

}
</style>
