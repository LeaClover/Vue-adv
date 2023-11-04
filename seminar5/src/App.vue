<template>
  <div id="app">
    <CompAuthentication @login="isAuthenticated = true" :isAuthenticated="isAuthenticated" />
    <CompProductBasket />
    <CompCreditCalculator />

  </div>
</template>

<script>
import CompAuthentication from './components/CompAuthentication.vue'
import CompProductBasket from './components/CompProductBasket.vue'
import CompCreditCalculator from './components/CompCreditCalculator.vue'

export default {
  name: 'App',
  data () {
    return {
      isAuthenticated: false
    }
  },
  components: {
    CompAuthentication,
    CompProductBasket,
    CompCreditCalculator
  }
}
</script>

<style lang="scss"></style>
