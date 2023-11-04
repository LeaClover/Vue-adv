<template>
  <div id="app">
    <ProductDetails v-for="product in products" :product="product" :key="product.id" />
  </div>
</template>

<script>
import ProductDetails from './components/ProductDetails.vue'

export default {
  name: 'App',
  components: {
    ProductDetails
  },
  data () {
    return {
      products: [
        {
          id: 1,
          name: 'product1',
          price: 200,
          available: true
        },
        {
          id: 2,
          name: 'product2',
          price: 300,
          available: true
        },
        {
          id: 3,
          name: 'product3',
          price: 500,
          available: false
        },
        {
          id: 4,
          name: 'product4',
          price: 300,
          available: true
        },
        {
          id: 5,
          name: 'product5',
          price: 400,
          available: false
        }
      ]
    }
  }
}
</script>

<style lang="scss"></style>
