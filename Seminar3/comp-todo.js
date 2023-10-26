Vue.component('to-do', {
    data() {
        return {
            todoName: '',
            findElement: '',
            toDoList: [
                {
                    id: 1,
                    name: "task1"
                },
                {
                    id: 2,
                    name: "task2"
                },
                {
                    id: 3,
                    name: "task3"
                }
            ]
        }
    },
    template: `
        <div>
            <input type="text" v-model="todoName">
            <button @click="addToDo">+Заметка</button>
            <input type="text" v-model="findElement">
            <button @click="sortUp">Sort Up</button>
            <button @click="sortDown">Sort Down</button>
            <ul>
                <to-do2 v-for="(toDo, index) in filteredToDoList" :key="index" :toDo="toDo" :deleteToDo="deleteToDo" :index="index"></to-do2>
            </ul>
        </div>`
    ,
            // <ul>
            //      <li v-for="(toDo, index) in toDoList" :key="index"> {{ toDo.name }} <button @click="deleteToDo(index)">Удалить</button></li>
            // </ul>
    methods: {
        deleteToDo(index) {
            this.toDoList.splice(index, 1);
        },
        addToDo() {
            const newtoDo = {
                id: this.toDoList.length + 1,
                name: this.todoName
            }
            this.toDoList.push(newtoDo);
        },
        sortUp() {
            this.toDoList = this.toDoList.sort((a, b) => a.name > b.name ? 1 : -1);
        },
        sortDown() {
            this.toDoList = this.toDoList.sort((a, b) => a.name < b.name ? 1 : -1);
        }
    },
    computed: {
        filteredToDoList() {
            return this.findElement ? this.toDoList.filter((el) => el.name.includes(this.findElement)) : this.toDoList;
        }
    }
})