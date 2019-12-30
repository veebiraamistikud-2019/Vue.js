<template>
	<header>
		<input type="text" name="todoInput" v-model="todoValue" placeholder="Add a todo item" />
		<button class="submit" v-on:click="createTodo">+</button>
	</header>
</template>

<script>
	export default {
		name: "Header",
		data: function () {
			return {
				todoValue: ""
			}
		},
		methods: {
			createTodo: function () {
				this.$emit('createTodo', this.todoValue);
				this.todoValue = "";
			}
		}
	}
</script>

<style lang="scss" scoped>
	header {
		display: flex;
		input {
			flex: 1;
			height: 50px;
			box-sizing: border-box;
			text-indent: 15px;
			font-size: 20px;
            background-color: rgb(53, 53, 53);
            color: #cecdcd;
            border:none;
		}
        
		.submit {
			width: 50px;
			height: 50px;
			color: #cecece;
			font-size: 28px;
			line-height: 1;
			font-weight: 700;
			background-color: rgb(0, 0, 0);
			border: none;
			outline: none;
			cursor: pointer;
			&:hover {
				background-color: lighten($color: rgb(129, 129, 129), $amount: 10);
			}
			&:active {
				background-color: darken($color: rgb(105, 105, 105), $amount: 5);
			}
		}
	}
</style>
