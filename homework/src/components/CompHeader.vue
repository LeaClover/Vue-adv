<template>
  <div class="header">
    <div class="header__left-items">
      <a href="index.html">
        <img class="header__logo" src="../assets/Logo.png" alt="logo">
      </a>
      <h3 class="header__text-logo">Interno</h3>
    </div>
    <div class="header__right-items">
      <router-link class="header__link" to="/">Home</router-link>
      <router-link class="header__link" to="/project">Project</router-link>
      <router-link class="header__link" to="/blog">Blog</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompHeader'
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  margin-top: 53px;
  margin-bottom: 57px;
  max-width: 1200px;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  &__left-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 10px;
  }

  &__logo {
    width: 34px;
  }

  &__text-logo {
    color: #292F36;
    font-family: 'DM Serif Display', serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }

  &__right-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 31px;
  }

  &__link {
    justify-content: flex-end;
    align-items: center;
    flex-shrink: 0;
    color: #292F36;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }
}
</style>
