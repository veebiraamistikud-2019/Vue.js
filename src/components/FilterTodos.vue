<template>
  <div>
    FILTER:
    <select @change="filterTodos($event)">
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
  methods: mapActions(["filterTodos"])
};
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #0ab904 1px solid;
}
</style>
