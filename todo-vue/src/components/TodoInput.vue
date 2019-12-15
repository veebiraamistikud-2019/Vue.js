<template>
    <div class="todo-input">
        <input type="text" v-model="text"/>
        <button class="btn btn-primary" v-on:click="addTodo">Submit</button>
    </div>
</template>

<script src="./todoinput.js"></script>
<style src="./todoinput.css"></style>