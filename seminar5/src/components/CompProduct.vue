<template>
    <!-- Разработать интерфейс корзины товаров, в котором пользователь может изменять количество товаров в корзине и видеть общую сумму покупки. Каждый товар представлен в виде блока, содержащего поле ввода для изменения количества товара и отображение его цены. При изменении количества товаров в поле ввода, необходимо автоматически пересчитывать стоимость каждого товара и обновлять общую сумму покупки. -->
    <div>
        <p>Наименование: {{ product.name }}</p>
        <p>Цена: {{ product.price }}</p>
        <p>Количество: <input @change="changeQuantity" type="number" name="" id="" :value="product.quantity"></p>
        <p>Сумма: {{ product.price * product.quantity }}</p>
    </div>
</template>
<script>
export default {
  name: 'CompProduct',
  props: ['product'],
  methods: {
    changeQuantity (e) {
      const quantityData = {
        quantity: +e.target.value,
        product: this.product
      }
      this.$emit('quantity', quantityData)
    }
  }
}
</script>
<style></style>
