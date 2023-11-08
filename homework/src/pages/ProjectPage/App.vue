<template>
    <div id="app">
        <div class="center">
            <CompHeader />
            <div class="banner__3">
                <div class="banner__textblock">
                    <h2 class="banner__heading">Our Project</h2>
                    <p class="banner__text">Home / Project</p>
                </div>
            </div>
            <div class="project">
                <CompProjectPage />
                <div class="articles__pagination">
                    <button class="articles__button">
                        <p class="articles__button-text">01</p>
                        <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        </svg>
                    </button>
                    <button class="articles__button">
                        <p class="articles__button-text">02</p>
                        <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        </svg>
                    </button>
                    <button class="articles__button">
                        <p class="articles__button-text">03</p>
                        <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        </svg>
                    </button>
                    <button class="articles__button">
                        <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <CompFooter />
        </div>
    </div>
</template>

<script>
import CompHeader from '../../components/CompHeader.vue'
import CompFooter from '../../components/CompFooter.vue'
// import CompBanner from '../../components/CompBanner.vue'
import CompProjectPage from '../../components/CompProjectPage.vue'

export default {
  name: 'App',
  components: {
    CompHeader,
    CompFooter,
    CompProjectPage
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

.banner {
    background: url(../../assets/banner.jpg);
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 100vw;
    margin-bottom: 200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;

    &__2 {
        background: url(../../assets/banner2.jpg);
        background-repeat: no-repeat;
        background-position: center;
        height: 351px;
        width: 100vw;
        margin-bottom: 200px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    &__3 {
        background: url(../../assets/banner3.jpg);
        background-repeat: no-repeat;
        background-position: center;
        height: 351px;
        width: 100vw;
        margin-bottom: 200px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    &__textblock {
        margin-top: 178px;
        padding-top: 41px;
        padding-bottom: 41px;
        background-color: #fff;
        display: flex;
        max-width: 503px;
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        border-radius: 50px 50px 0px 0px;
    }

    &__heading {
        color: #292F36;
        font-family: 'DM Serif Display', serif;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
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

.articles {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1200px;
    width: 100%;

    &__blog {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 1200px;
        width: 100%;
        justify-content: flex-start;
    }

    &__text-block {
        margin-bottom: 52px;
        max-width: 811px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 12px;
    }

    &__heading {
        color: #292F36;
        text-align: center;
        font-family: 'DM Serif Display', serif;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1px;
    }

    &__text {
        color: #4D5053;
        text-align: center;
        font-family: 'Jost';
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
    }

    &__content {
        display: flex;
        gap: 21px;
        width: 1200px;
        flex-wrap: wrap;
        justify-content: center;
    }

    &__item-middle {
        background: #F4F0EC;
        padding: 21px;
        display: flex;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 21px;
        border-radius: 62px;
        border: 1px solid #E7E7E7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    }

    img {
        background: #F4F0EC;
        border-radius: 50px 50px 0px 0px;
    }

    &__item {
        padding: 21px;
        display: flex;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 21px;
        border-radius: 62px;
        border: 1px solid #E7E7E7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
        width: 340px;
        position: relative;

        &__room {
            position: absolute;
            top: 249px;
            left: 41px;
            background: #fff;
            color: #4D5053;
            font-family: 'Jost';
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.16px;
            text-transform: capitalize;
            padding: 10px 8px;
            border-radius: 8px 8px 8px 0px;
        }

        &__heading {
            margin-bottom: 40px;
            color: #292F36;
            font-family: 'DM Serif Display', serif;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0.5px;
        }

        &__info-block {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: center;
        }

        &__block {
            margin-bottom: 30px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            gap: 150px;
        }

        &__text {
            color: #4D5053;
            font-family: 'Jost';
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.16px;
            text-transform: capitalize;
        }

        &__button {
            border-radius: 50px;
            border: none;
            cursor: pointer;
        }
    }

    &__pagination {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 51px;
        margin-bottom: 104px;
        gap: 20px;
    }

    &__button {
        cursor: pointer;
        background: #fff;
        position: relative;
        border: 1px #CDA274 solid;
        border-radius: 50px;
    }

    &__button-text {
        position: absolute;
        color: #292F36;
        font-family: 'Jost';
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        text-transform: capitalize;
        left: 17px;
        top: 15px;
    }
}

.projects {
    max-width: 1200px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    &__text-block {
        width: 737px;
        margin-top: 96px;
        margin-bottom: 93px;
        gap: 8px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        align-items: center;
    }

    &__heading {
        color: #292F36;
        text-align: center;
        font-family: 'DM Serif Display', serif;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1px;
    }

    &__text {
        color: #4D5053;
        text-align: center;
        font-family: 'Jost';
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
    }

    &__content-block {
        display: flex;
        max-width: 1200px;
        flex-wrap: wrap;
        gap: 56px;
        justify-content: space-between;
    }

    &__item {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        align-items: center;

        &__img1 {
            border-radius: 0px 50px 0px 0px;
        }

        &__img2 {
            border-radius: 50px 0px 0px 0px;
        }

        &__img3 {
            border-radius: 0px 0px 50px 0px;
        }

        &__img4 {
            border-radius: 0px 0px 0px 50px;
        }

        &__info {
            margin-top: 24px;
            display: flex;
            justify-content: space-between;
            width: 547px;
            gap: 260px;
        }

        &__text-block {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-content: flex-start;
            justify-content: center;
            align-items: flex-start;
            gap: 4px;
        }

        &__heading {
            color: #292F36;
            font-family: 'DM Serif Display', serif;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0.5px;
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

        &__button {
            width: 70px;
            height: 70px;
            flex-shrink: 0;
            border: none;
            border-radius: 50px;
        }
    }
}

.project {
    display: flex;
    max-width: 1200px;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;

    &__contentbox {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        gap: 61px;
    }

    &__navigation {
        display: flex;
        gap: 96px;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 26px 66px 26px 66px;
        border-radius: 18px;
        border: 1px solid #CDA274;
    }

    &__button {
        cursor: pointer;
        border: none;
        background-color: #fff;
        color: #292F36;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 0.36px;
    }

    &__content {
        display: flex;
        max-width: 1200px;
    }

    &__items {
        display: flex;
        width: 1200px;
        gap: 30px;
        flex-direction: column;
        flex-wrap: wrap;
        max-height: 3230px;
        min-height: 600px;
        margin-bottom: 10px;
    }

    &__item {
        display: flex;
        flex-direction: column;
        width: 585px;
        gap: 24px;
    }

    &__info {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
        align-items: center;
        gap: 4px;
        justify-content: space-between;
    }
}
</style>
