<template>
  <div class = "total-task">open tasks: {{total}} </div>
</template>

<script>
export default{
  name: 'TotalTask',
  props: {
    total: {
      type: Number,
      default: 0,
    }
  }
}
</script>
<style scoped>
.total-task{
  padding: 10px;
  font-size: 20px;
  text-align: center;
  margin-bottom: 50px;

}
</style>