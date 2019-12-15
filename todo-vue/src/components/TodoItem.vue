<template>
    <div class="todoWrapper">
        <button class="removeTodo" v-on:click="removeTodo">Remove</button>{{todo.text}}
    </div>
</template>

<script src="./todoitem.js"></script>
<style src="./todoitem.css"></style>