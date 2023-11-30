<template>
    <div id="home">
        <div class="center">
            <CompHeader />
            <CompMainContent />
            <div class="projects">
                <div class="projects__text-block">
                    <h3 class="projects__heading">Follow Our Projects</h3>
                    <p class="projects__text">It is a long established fact that a reader will be distracted by the of
                        readable content of page lookings at its layouts points.</p>
                </div>
                <div class="projects__content-block">
                    <div class="projects__item">
                        <img class="projects__item__img1" src="../assets/project1.jpg" alt="project-img">
                        <div class="projects__item__info">
                            <div class="projects__item__text-block">
                                <h5 class="projects__item__heading">Modern Kitchan</h5>
                                <p class="projects__item__text">Decor / Artchitecture</p>
                            </div>
                            <button class="projects__item__button"><svg width="70" height="70" viewBox="0 0 70 70"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="projects__item">
                        <img class="projects__item__img2" src="../assets/project2.jpg" alt="project-img">
                        <div class="projects__item__info">
                            <div class="projects__item__text-block">
                                <h5 class="projects__item__heading">Modern Kitchan</h5>
                                <p class="projects__item__text">Decor / Artchitecture</p>
                            </div>
                            <button class="projects__item__button"><svg width="70" height="70" viewBox="0 0 70 70"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="projects__item">
                        <img class="projects__item__img3" src="../assets/project3.jpg" alt="project-img">
                        <div class="projects__item__info">
                            <div class="projects__item__text-block">
                                <h5 class="projects__item__heading">Modern Kitchan</h5>
                                <p class="projects__item__text">Decor / Artchitecture</p>
                            </div>
                            <button class="projects__item__button"><svg width="70" height="70" viewBox="0 0 70 70"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="projects__item">
                        <img class="projects__item__img4" src="../assets/project4.jpg" alt="project-img">
                        <div class="projects__item__info">
                            <div class="projects__item__text-block">
                                <h5 class="projects__item__heading">Modern Kitchan</h5>
                                <p class="projects__item__text">Decor / Artchitecture</p>
                            </div>
                            <button class="projects__item__button"><svg width="70" height="70" viewBox="0 0 70 70"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <CompAchievements />
            <div class="articles">
                <div class="articles__text-block">
                    <h3 class="articles__heading">Articles & News</h3>
                    <p class="articles__text">It is a long established fact that a reader will be distracted by the of
                        readable content of a page when lookings at its layouts the points of using.</p>
                </div>
                <div class="articles__content">
                    <CompProject v-for="project in shortListProjects" :project="project" :key="project.id" />
                </div>
            </div>
            <CompFooter />
        </div>
    </div>
</template>

<script>
import CompHeader from '../components/CompHeader.vue'
import CompFooter from '../components/CompFooter.vue'
import CompMainContent from '../components/CompMainContent.vue'
import CompAchievements from '../components/CompAchievements.vue'
import CompProject from '../components/CompProject.vue'

export default {
  name: 'HomePage',
  components: {
    CompHeader,
    CompFooter,
    CompMainContent,
    CompAchievements,
    CompProject
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
</style>
