<template>
    <div class="achievements">
        <div class="achievements__text-block">
            <div class="achievements__item">
                <h1 class="achievements__heading">12</h1>
                <p class="achievements__text">Years Of Experiance</p>
            </div>
            <svg width="1" height="130" viewBox="0 0 1 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="2.18557e-08" x2="0.499994" y2="130" stroke="#CDA274" />
            </svg>
            <div class="achievements__item">
                <h1 class="achievements__heading">85</h1>
                <p class="achievements__text">Success Project</p>
            </div>
            <svg width="1" height="130" viewBox="0 0 1 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="2.18557e-08" x2="0.499994" y2="130" stroke="#CDA274" />
            </svg>
            <div class="achievements__item">
                <h1 class="achievements__heading">15</h1>
                <p class="achievements__text">Active Project</p>
            </div>
            <svg width="1" height="130" viewBox="0 0 1 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="2.18557e-08" x2="0.499994" y2="130" stroke="#CDA274" />
            </svg>
            <div class="achievements__item">
                <h1 class="achievements__heading">95</h1>
                <p class="achievements__text">Happy Customers</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CompAchievements'
}
</script>

<style scoped lang="scss">
.achievements {
    background-color: #F4F0EC;
    margin-top: 100px;
    margin-bottom: 96px;
    padding-top: 151px;
    padding-bottom: 151px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;

    &__text-block {
        display: flex;
        align-items: center;
        gap: 76px;
    }

    &__item {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }

    &__heading {
        color: #CDA274;
        font-family: 'DM Serif Display', serif;
        font-size: 85px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1.7px;
    }

    &__text {
        color: #4D5053;
        font-family: 'Jost';
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
    }
}
</style>
