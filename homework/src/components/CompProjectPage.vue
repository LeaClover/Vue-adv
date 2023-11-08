<template>
    <div class="project__contentbox">
        <div class="project__navigation">
            <button class="project__button" @click="setSection('Bathroom')">Bathroom</button>
            <button class="project__button" @click="setSection('Bedroom')">Bed Room</button>
            <button class="project__button" @click="setSection('Kitchen')">Kitchen</button>
            <button class="project__button" @click="setSection('Livingroom')">Living Area</button>
        </div>
        <div class="project__content">
            <div class="project__items">
                <div class="project__item" v-for="{ id, img, heading, text } in filteredItems.slice(0, 8)" :key="id">
                    <img class="project__img" :src="img" alt="project-img">
                    <div class="project__info">
                        <div class="project__text-block">
                            <h5 class="projects__item__heading">{{ heading }}</h5>
                            <p class="projects__item__text">{{ text }}</p>
                        </div>
                        <button class="projects__item__button"><svg width="70" height="70" viewBox="0 0 70 70" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'CompProjectPage',
  data () {
    return {
      section: '',
      projects: [
        {
          id: 1,
          img: require('../assets/proj1.jpg'),
          heading: 'Minimal Bedroom',
          text: 'Decor / Artchitecture',
          section: 'Bedroom'
        },
        {
          id: 2,
          img: require('../assets/proj2.jpg'),
          heading: 'Classic Minimal Bedroom',
          text: 'Decor / Artchitecture',
          section: 'Bedroom'
        },
        {
          id: 3,
          img: require('../assets/proj3.jpg'),
          heading: 'Minimal Bedroom table',
          text: 'Decor / Artchitecture',
          section: 'Bedroom'
        },
        {
          id: 4,
          img: require('../assets/proj4.jpg'),
          heading: 'Modern Bedroom',
          text: 'Decor / Artchitecture',
          section: 'Bedroom'
        },
        {
          id: 5,
          img: require('../assets/proj5.jpg'),
          heading: 'Minimal Bedroom',
          text: 'Decor / Artchitecture',
          section: 'Bedroom'
        },
        {
          id: 6,
          img: require('../assets/proj6.jpg'),
          heading: 'Modern Bedroom',
          text: 'Decor / Artchitecture',
          section: 'Bedroom'
        },
        {
          id: 7,
          img: require('../assets/proj7.jpg'),
          heading: 'System Table',
          text: 'Decor / Artchitecture',
          section: 'Kitchen'
        },
        {
          id: 8,
          img: require('../assets/proj8.jpg'),
          heading: 'Modern Bedroom',
          text: 'Decor / Artchitecture',
          section: 'Bedroom'
        },
        {
          id: 9,
          img: require('../assets/project4.jpg'),
          heading: 'Modern Living Area',
          text: 'Decor / Artchitecture',
          section: 'Livingroom'
        },
        {
          id: 10,
          img: require('../assets/project1.jpg'),
          heading: 'Simple Kitchen',
          text: 'Decor / Artchitecture',
          section: 'Kitchen'
        },
        {
          id: 11,
          img: require('../assets/project2.jpg'),
          heading: 'Idea for Bathroom',
          text: 'Decor / Artchitecture',
          section: 'Bathroom'
        },
        {
          id: 12,
          img: require('../assets/proj1.jpg'),
          heading: 'Ideal Bathroom',
          text: 'Decor / Artchitecture',
          section: 'Bathroom'
        },
        {
          id: 13,
          img: require('../assets/main-photo.jpg'),
          heading: 'Living Area for Rest',
          text: 'Decor / Artchitecture',
          section: 'Livingroom'
        },
        {
          id: 14,
          img: require('../assets/project3.jpg'),
          heading: 'Kithen Lifestyle',
          text: 'Decor / Artchitecture',
          section: 'Kitchen'
        },
        {
          id: 15,
          img: require('../assets/proj7.jpg'),
          heading: 'Eating place in Living Area',
          text: 'Decor / Artchitecture',
          section: 'Livingroom'
        }
      ]
    }
  },
  methods: {
    setSection (section) {
      this.section = section
    }
  },
  computed: {
    filteredItems () {
      return this.section ? this.projects.filter((project) => project.section.includes(this.section)) : this.projects
    }
  }
}
</script>
<style scoped lang="scss">
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
