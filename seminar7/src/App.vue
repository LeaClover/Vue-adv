<template>
  <div id="app">
    {{ counter }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <br>
    TOTAL QUANTITY: {{ totalQuantity }}
    <br>
    TOTAL PRICE: {{ totalPrice }}
    <br>
    <input type="text" placeholder="name" v-model="name">
    <input type="number" placeholder="price" v-model.number="price">
    <br>
    <button @click="addNewProduct">ADD PRODUCT</button>
    <br>
    <div v-for="( product, index ) in products" :key="index">
      {{ product.name }} - {{ product.price }} - {{ product.quantity }}
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      name: '',
      price: ''
    }
  },
  mounted () {
    console.log(this.$store)
    this.fetchProducts()
  },
  methods: {
    ...mapMutations(['COUNTER_INCREMENT', 'COUNTER_DECREMENT', 'ADD_PRODUCT']),
    ...mapActions(['addProduct', 'fetchProducts']),
    increment () {
      // this.$store.commit('COUNTER_INCREMENT')
      this.COUNTER_INCREMENT()
    },
    decrement () {
      // this.$store.commit('COUNTER_DECREMENT')
      this.COUNTER_DECREMENT()
    },
    addNewProduct () {
      const { name, price } = this
      const newProduct = {
        id: this.products.length + 1,
        name,
        price,
        quantity: 1
      }
      this.addProduct(newProduct)
    }
  },
  computed: {
    counter () {
      return this.$store.state.counter
    },
    ...mapGetters(['products', 'totalQuantity', 'totalPrice'])
  }
}
</script>

<style lang="scss"></style>
