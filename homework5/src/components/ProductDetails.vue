<template>
  <!--
  Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием "ProductDetails". Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности.
  Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте. Объект должен иметь свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг, указывающий на доступность продукта).
  Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать форматированную цену продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99".
  В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус доступности.
  Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock".
  -->
  <div class="product">
    <p>Наименование: {{ product.name }}</p>
    <p>Цена: {{ formattedPrice }}</p>
    <p>{{ product.available ? 'Available' : 'Out of stock' }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: ['product'],
  computed: {
    formattedPrice () {
      return '$' + this.product.price
    }
  }
}
</script>

<style scoped lang="scss">
.product {
  width: 250px;
  border: 1px solid grey;
}
</style>
