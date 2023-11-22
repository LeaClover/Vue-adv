import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 1. Создание базового хранилища: Создайте новое Vuex-хранилище, определите в нем состояние (state) и несколько базовых мутаций (mutations). Подключите хранилище к вашему приложению Vue.js и используйте его для управления состоянием приложения.
// Создайте счетчик который хранит состояние count
// Создайте две мутации, которые увеличивают и уменьшают значение счетчика
// Создайте компонент счетчик

// 2. Создайте хранилище Vuex с именем "store".
// В состоянии (state) хранилища создайте массив "cartItems", в котором будут храниться объекты товаров в корзине. Каждый объект товара должен иметь следующие свойства: id, name, price.
// Создайте мутацию (mutation) с именем "ADD_ITEM_TO_CART", которая принимает товар в качестве параметра и добавляет его в массив "cartItems".
// Создайте геттер (getter) с именем "cartItems", который возвращает массив товаров в корзине.

// 3. Создайте геттер с именем "totalItems", который возвращает общее количество товаров в корзине.
// Создайте геттер с именем "totalPrice", который возвращает общую стоимость всех товаров в корзине.
// Создайте действие (action) с именем "addToCart", которое принимает товар в качестве параметра и вызывает мутацию "ADD_ITEM_TO_CART".
// В компоненте Vue.js создайте список товаров, которые можно добавить в корзину. Каждый товар должен иметь кнопку "Добавить в корзину", при нажатии на которую вызывается метод для добавления товара в корзину.
// Выведите информацию о корзине покупок на вашем компоненте. Отобразите список товаров в корзине, общее количество товаров и общую стоимость.

export default new Vuex.Store({
  state: {
    counter: 0,
    products: []
  },
  mutations: {
    COUNTER_INCREMENT (state) {
      state.counter++
    },
    COUNTER_DECREMENT (state) {
      state.counter--
    },
    ADD_PRODUCT (state, product) {
      state.products.push(product)
    },
    SET_PRODUCT_STATE (state, products) {
      state.products = products
    }
  },
  actions: {
    addProduct (store, product) {
      const findProduct = store.getters.products.find((item) => item.id === product.id)
      if (findProduct) {
        findProduct.quantity++
      } else {
        store.commit('ADD_PRODUCT', product)
      }
    },
    fetchProducts ({ commit }) {
      setTimeout(() => {
        commit('SET_PRODUCT_STATE', [
          {
            id: 1,
            name: 'apple',
            price: 100,
            quantity: 1
          },
          {
            id: 2,
            name: 'peach',
            price: 150,
            quantity: 1
          },
          {
            id: 3,
            name: 'banana',
            price: 50,
            quantity: 1
          }
        ])
      }, 2000)
    }
  },
  getters: {
    products (state) {
      return state.products
    },
    totalQuantity (state) {
      return state.products.reduce((acc, product) => acc + product.quantity, 0)
    },
    totalPrice (state) {
      return state.products.reduce((acc, product) => acc + product.quantity * product.price, 0)
    }
  },
  modules: {

  }
})
