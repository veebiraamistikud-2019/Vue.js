<template>
    <div class = 'container'>
        <div class = 'header'>
            To do list
        </div>

        <div class = 'items'>
            <div v-if = 'this.items.length > 0'>
                <div class = 'item' v-for = 'item in items' :key = 'item.id'>

                    <div
                        :class = 'item.done ? "itemValueCrossed" : "itemValue"'
                        @click = '_checkItem(item.id)'>
                            {{item.value}}
                    </div>

                    <button
                        class = 'removeItemButton'
                        @click = '_removeItem(item.id)'>
                            -
                    </button>

                </div>
            </div>
            <div v-else class = 'noItems'>
                No items to display
            </div>

        </div>

        <input
            id = 'inputField'
            class = 'inputField'
            type = 'text'
            placeholder = 'Write new item and hit Enter'
            @keyup.enter = '_createNewItem()'
        />
    </div>
</template>

<script>
    export default {
        name: 'app',
        
        methods: {
            _createNewItem: function() {
                const inputField = document.querySelector('.inputField')
                
                if (inputField.value === '') return
                
                this.items.push({
                    id: this.items.length === 0 ? 0 : this.items[this.items.length - 1].id + 1,
                    value: inputField.value,
                    done: false,
                })
                
                inputField.value = ''
            },
            
            _checkItem: function(id) {
                for (let item of this.items) {
                    if (item.id !== id) continue
                    
                    item.done = !item.done
                    break
                }
            },
            
            _removeItem: function(id) {
                this.items.forEach((item, index) => {
                    if (item.id === id)
                        this.items.splice(index, 1)
                })
            },
        },
        
        data() {
            return {
                items: [],
            }
        },
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
    }

    body {
        line-height: 20px;
        background-color: #FAFAFA;
    }

    *:focus {
        outline: none !important;
    }

    .container {
        border-radius: 7px;

        margin: 0 auto;
        margin-top: 50px;
        margin-bottom: 50px;
        width: 300px;
        background-color: #171D37;
    }

    .header {
        border-radius: 7px 7px 0px 0px;

        padding: 20px 10px;

        color: white;
        background-color: #DE3F53;
        text-transform: uppercase;
    }

    .noItems {
        color: #4A5B65;
        padding: 10px 10px;
        text-align: center;
    }

    .items {
        padding: 1px;
    }

    .item {
        display: flex;
        flex: 1;

        background-color: #262E4C;
        margin: 3px;
        padding: 10px;
    }

    .item:hover {
        background-color: #2A3353;
        cursor: pointer;
    }

    .itemValue, .itemValueCrossed {
        display: flex;
        flex: 1;

        color: #B1B2C9;
    }

    .itemValueCrossed {
        text-decoration: line-through;
    }

    .removeItemButton {
        width: 20px;
        height: 20px;

        color: white;
        font-weight: bold;
        border: none;
        background-color: #DE3F53;
        border-radius: 10px;
        cursor: pointer;
    }

    .removeItemButton:hover {
        background-color: #e35c6d;
    }

    .inputField {
        border-radius: 7px;

        padding: 20px 10px;
        width: 300px;

        color: white;
        border: none;
        background-color: transparent;
    }

    ::placeholder {
        color: #465179;
    }
</style>
