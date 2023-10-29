<template>
  <div id="app">
    <PicComp />
    <button @click="sortDown">Убывание</button>
    <button @click="sortUp">Возрастание</button>
    <ProductComp v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import PicComp from './components/PicComp.vue'
import ProductComp from './components/ProductComp.vue'

export default {
  name: 'App',
  components: {
    PicComp,
    ProductComp
  },
  data: function () {
    return {
      products: [
        {
          id: 1,
          name: 'phone',
          price: 200
        },
        {
          id: 2,
          name: 'headphones',
          price: 100
        },
        {
          id: 3,
          name: 'tablet',
          price: 500
        }
      ]
    }
  },
  methods: {
    sortDown () {
      this.products = this.products.sort((a, b) => a.price < b.price ? 1 : -1)
    },
    sortUp () {
      this.products = this.products.sort((a, b) => a.price > b.price ? 1 : -1)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
