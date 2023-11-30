<template>
    <div id="blogpage">
        <div class="center">
            <CompHeader />
            <div class="banner">
                <div class="banner__textblock">
                    <h2 class="banner__heading">Articles & News</h2>
                    <p class="banner__text">Home / Blog</p>
                </div>
            </div>
            <div class="latest-post">
                <div class="latest-post__conteiner">
                    <h2 class="latest-post__main-heading">Latest Post</h2>
                    <div class="latest-post__post-block">
                        <img src="../assets/latestpost.jpg" alt="latestpost photo">
                        <div class="latest-post__textblock">
                            <h4 class="latest-post__heading">Low Cost Latest Invented Interior Designing Ideas</h4>
                            <p class="latest-post__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                                turpis
                                dignissim maximus.posuere in.Contrary to popular belief.</p>
                            <p class="latest-post__text">Lorem Ipsum is not simply random text. It has roots in a piece
                                of
                                classica.</p>
                            <div class="latest-post__data-block">
                                <p class="latest-post__date">26 December,2022 </p>
                                <button class="latest-post__button">
                                    <svg width="52" height="53" viewBox="0 0 52 53" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                                        <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="articles__blog">
                <div class="articles__text-block">
                    <h2 class="articles__heading">Articles & News</h2>
                </div>
                <div class="articles__content">
                    <div class="articles__item" v-for="{ id, image, room, heading, date } in projects" :key="id">
                        <p class="articles__item__room">{{ room }}</p>
                        <img :src="image" alt="project img">
                        <div class="articles__item__info-block">
                            <h4 class="articles__item__heading">{{ heading }}</h4>
                            <div class="articles__item__block">
                                <p class="articles__item__text">{{ date }}</p>
                                <button class="articles__item__button"><svg width="52" height="53" viewBox="0 0 52 53"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></button>
                            </div>
                        </div>
                    </div>
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
            </div>
            <CompFooter />
        </div>
    </div>
</template>

<script>
import CompHeader from '../components/CompHeader.vue'
import CompFooter from '../components/CompFooter.vue'

export default {
  name: 'BlogPage',
  components: {
    CompHeader,
    CompFooter
  },
  data: function () {
    return {
      projects: [
        {
          id: 1,
          image: require('../assets/item1.jpg'),
          room: 'Kitchen Design',
          heading: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022'
        },
        {
          id: 2,
          image: require('../assets/item2.jpg'),
          room: 'Living Design',
          heading: 'Low Cost Latest Invented Interior Designing Ideas',
          date: '22 December,2022'
        },
        {
          id: 3,
          image: require('../assets/item3.jpg'),
          room: 'Interior Design',
          heading: 'Best For Any Office & Business Interior Solution',
          date: '25 December,2022'
        },
        {
          id: 4,
          image: require('../assets/item4.jpg'),
          room: 'Kitchen Design',
          heading: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022'
        },
        {
          id: 5,
          image: require('../assets/item5.jpg'),
          room: 'Living Design',
          heading: 'Low Cost Latest Invented Interior Designing Ideas',
          date: '22 December,2022'
        },
        {
          id: 6,
          image: require('../assets/item6.jpg'),
          room: 'Interior Design',
          heading: 'Best For Any Office & Business Interior Solution',
          date: '25 December,2022'
        }
      ]
    }
  },
  computed: {
    shortListProjects () {
      return this.projects.slice(0, 3)
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

.banner {
    background: url(../assets/banner.jpg);
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
        background: url(../assets/banner2.jpg);
        background-repeat: no-repeat;
        background-position: center;
        height: 351px;
        width: 100vw;
        margin-bottom: 200px;
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

.latest-post {
    display: flex;
    max-width: 1200px;

    &__conteiner {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 33px;
        margin-bottom: 172px;
    }

    &__main-heading {
        color: #292F36;
        font-family: 'DM Serif Display', serif;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1px;
    }

    &__post-block {
        display: flex;
        align-items: center;
        gap: 65px;
        border-radius: 62px;
        border: 1px solid #E7E7E7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
        padding: 22px;
    }

    &__textblock {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
    }

    &__heading {
        color: #292F36;
        font-family: 'DM Serif Display', serif;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0.5px;
        margin-bottom: 22px;
        max-width: 463px;
    }

    &__text {
        margin-bottom: 41px;
        color: #4D5053;
        font-family: 'Jost';
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
        max-width: 469px;
    }

    &__data-block {
        display: flex;
        align-items: center;
        gap: 214px;
        width: 489px;
    }

    &__date {
        color: #4D5053;
        font-family: 'Jost';
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.16px;
        text-transform: capitalize;
        max-width: 223px;
    }

    &__button {
        border-radius: 50px;
        border: none;
        cursor: pointer;
    }
}
</style>
