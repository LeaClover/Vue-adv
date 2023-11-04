<template>
  <!-- Создайте компонент "Аутентификация" (Authentication), который будет отображать форму входа или сообщение об успешной аутентификации в зависимости от переданного пропса isAuthenticated. Используйте директиву v-if для условного отображения разных элементов в шаблоне компонента. -->
  <div>
    <div v-if="isAuthenticated">Аутентификация</div>
    <div v-else>
      <input type="text" name="" id="">
      <input type="password" name="" id="">
      <button @click="login" type="submit">Войти</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompAuthentication',
  props: ['isAuthenticated'],
  data () {
    return {

    }
  },
  methods: {
    login () {
      this.$emit('login', true)
    }
  }
}
</script>

<style scoped lang="scss"></style>
