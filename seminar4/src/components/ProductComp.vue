<template>
    <!-- Вам необходимо создать компонент "Товар", который будет отображать информацию о товаре, включая название, описание и цену. Кроме того, вы должны реализовать фильтрацию товаров по цене (по возрастанию и убыванию) -->
    <div>
        <div class="product">
            <div class="name">{{ product.name }}</div>
            <div class="price">{{ product.price }}</div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ProductComp',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
