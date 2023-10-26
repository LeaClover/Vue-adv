Vue.component('to-do2', {
    props: ['toDo', 'deleteToDo', 'index'],
    template: `
        <li>  
            {{ toDo.name }} <button @click="$emit('click', deleteToDo(index))">Удалить</button>
        </li>
    `
})