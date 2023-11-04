<template>
    <!-- Разработать интерфейс корзины товаров, в котором пользователь может изменять количество товаров в корзине и видеть общую сумму покупки. Каждый товар представлен в виде блока, содержащего поле ввода для изменения количества товара и отображение его цены. При изменении количества товаров в поле ввода, необходимо автоматически пересчитывать стоимость каждого товара и обновлять общую сумму покупки. -->
    <div>
        <CompProduct @quantity="changeQuantity" v-for="product in products" :product="product" :key="product.id" />
        <p>Итого: {{ totalPrice }}</p>
    </div>
</template>
<script>
import CompProduct from './CompProduct.vue'
export default {
  components: { CompProduct },
  name: 'CompProductBusket',
  data () {
    return {
      products: [
        {
          id: 1,
          name: 'product1',
          quantity: 2,
          price: 200
        },
        {
          id: 2,
          name: 'product2',
          quantity: 1,
          price: 100
        },
        {
          id: 3,
          name: 'product3',
          quantity: 5,
          price: 50
        }
      ]
    }
  },
  methods: {
    changeQuantity (productData) {
      productData.product.quantity = productData.quantity
    }
  },
  computed: {
    totalPrice () {
      return this.products.reduce((sum, product) => sum + product.price * product.quantity, 0)
    }
  }
}
</script>
<style></style>
