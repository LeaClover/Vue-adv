<template>
    <div class="main-content">
        <div class="main-content__text-block">
            <h2 class="main-content__heading">Let Your Home Be Unique</h2>
            <p class="main-content__text">There are many variations of the passages of lorem Ipsum
                fromavailable,
                majority.</p>
            <router-link to="/start"><button class="main-content__button">Get Started<svg class="main-content__arrow"
                        width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                            stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </button></router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CompMainContent'
}
</script>

<style scoped lang="scss">
.main-content {
    background: url(../assets/main-photo.jpg);
    background-repeat: no-repeat;
    max-width: 1150px;
    width: 100%;
    min-height: 100%;
    padding-top: 208px;
    padding-bottom: 208px;
    padding-left: 52px;
    border-radius: 50px;

    &__heading {
        color: #292F36;
        font-family: 'DM Serif Display', serif;
        font-size: 65px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        max-width: 434px;
        margin-bottom: 18px;
    }

    &__text {
        color: #4D5053;
        font-family: 'Jost';
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
        max-width: 434px;
        margin-bottom: 21px;
    }

    &__button {
        cursor: pointer;
        color: #FFF;
        text-align: center;
        font-family: 'Jost';
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 0.36px;
        border: none;
        border-radius: 18px;
        background: #292F36;
        box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
        display: flex;
        padding: 26px 49px 26px 48px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    &__arrow {
        fill: #CDA274;
    }
}
</style>
