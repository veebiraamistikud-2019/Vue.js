<template>
	<section id="todos">
		<div class="todo" v-for="(todo) in todos" v-bind:key="todo.id">
			<input type="checkbox" name="done" v-if="todo.done" checked>
			<input type="checkbox" name="done" v-else>
			<label for="done">
				{{ todo.name }}
			</label>
			<button class="remove" v-on:click="() => removeTodo(todo.id)">Remove</button>
            
		</div>
	</section>
</template>

<script>
	export default {
		name: "Todos",
		props: ["todos"],
		methods: {
			removeTodo: function (id) {
				this.$emit("removeTodo", id);
            }
            
		}
	}
</script>

<style lang="scss" scoped>

	#todos {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		width: 100%;
        button{
            color:rgb(201, 201, 201);
            background-color: rgb(54, 54, 54);
            border: none;
        }
		.todo {
			width: 24%;
			margin: 15px;
			padding: 15px;
            color:rgb(201, 201, 201);
			background: rgb(0, 0, 0);
			display: flex;
			label {
				flex: 1;
			}
		}
	}
</style>
