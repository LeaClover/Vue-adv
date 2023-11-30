<template>
    <div id="404">
        <div class="center">
            <CompHeader />
            <div class="page404">
                <div class="page404__conteiner">
                    <div class="page404__text-block">
                        <h1 class="page404__heading">404</h1>
                        <h4 class="page404__text">We are sorry, but the page
                            you requested was not found</h4>
                        <router-link to="/"><button class="page404__button">Back To Home<svg width="18" height="17"
                                    viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
                                        stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                                </svg>
                            </button></router-link>
                    </div>
                    <img class="page404__img" src="../assets/404.jpg">
                </div>
            </div>
            <!-- <CompFooter /> -->
        </div>
    </div>
</template>

<script>
import CompHeader from '../components/CompHeader.vue'
// import CompFooter from '../components/CompFooter.vue'

export default {
  name: 'PageError',
  components: {
    CompHeader
    // CompFooter
  },
  data: function () {
    return {
    }
  }
}
</script>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'DM Serif Display', serif;
    font-family: 'Jost', sans-serif;
    background-color: #fff;
}

a {
    text-decoration: none;
}

.center {
    padding-left: calc(50% - 720px);
    padding-right: calc(50% - 720px);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.page404 {
    display: flex;

    &__conteiner {
        display: flex;
        flex-direction: row;
        align-items: center;
        max-width: 1200px;
        gap: 81px;
    }

    &__text-block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 569px;
    }

    &__heading {
        color: #CDA274;
        font-family: 'DM Serif Display';
        font-size: 250px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
    }

    &__text {
        color: #292F36;
        font-family: 'DM Serif Display';
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.35px;
        //margin-top: 15px;
        width: 569px;
        margin-bottom: 23px;
    }

    &__button {
        cursor: pointer;
        display: flex;
        padding: 26px 54px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 18px;
        background: #292F36;
        box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
        color: #FFF;
        text-align: center;
        font-family: 'Jost';
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 0.36px;
    }
}
</style>
