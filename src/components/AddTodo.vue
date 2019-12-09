<template>
  <div>
    <h3>Lisa ülesanne</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Lisa ülesanne">
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #220b8a;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #220b8a;
  color: #fff;
  border: 1px #220b8a solid;
  cursor: pointer;
}
</style>
