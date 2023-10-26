Vue.component('counter', {
    data() {
        return {
            counter: 0
        }
    },
    template: `
        <div>
        <p>Счетчик: {{ counter }}</p>
        <button @click="plus">+</button>
        <button @click="minus">-</button>
        </div>`
    ,
    methods: {
        plus() {
            this.counter++;
        },
        minus() {
            this.counter--;
        }
    }
})