<template>
    <div id="blogdetails">
        <div class="center">
            <CompHeader />
            <div class="banner__2">
            </div>
            <CompArticles class="articles-by-tags" :articles="articles"></CompArticles>
            <CompFooter />
        </div>
    </div>
</template>

<script>
import CompHeader from '../components/CompHeader.vue'
import CompFooter from '../components/CompFooter.vue'
import CompArticles from '../components/CompArticles.vue'

export default {
  name: 'BlogDetails',
  components: {
    CompHeader,
    CompFooter,
    CompArticles
  },
  data: function () {
    return {
      articles: [
        {
          id: 1,
          heading1: 'Let’s Get Solution for Building Construction Work',
          heading2: 'Design sprints are great',
          img1: require('../assets/article1.jpg'),
          img2: require('../assets/article1-2.jpg'),
          tag: 'Kitchen',
          date: '26 December,2022',
          path: 'Interior / Home / Decore',
          callout: 'The details are not the details. They make the design.',
          li: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.']
        },
        {
          id: 2,
          heading1: 'Low Cost Latest Invented Interior Designing Ideas',
          heading2: 'Design sprints are great',
          img1: require('../assets/photo-bed.jpg'),
          img2: require('../assets/main-photo.jpg'),
          tag: 'Bedroom',
          date: '22 December,2022',
          path: 'Interior / Home / Decore',
          callout: 'The details are not the details. They make the design.',
          li: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.']
        },
        {
          id: 3,
          heading1: 'Best For Any Office & Business Interior Solution',
          heading2: 'Design sprints are great',
          img1: require('../assets/item1.jpg'),
          img2: require('../assets/project1.jpg'),
          tag: 'K-Planning',
          date: '25 December,2022',
          path: 'Interior / Home / Decore',
          callout: 'The details are not the details. They make the design.',
          li: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.']
        },
        {
          id: 4,
          heading1: 'Let’s Get Solution for Building Construction Work',
          heading2: 'Design sprints are great',
          img1: require('../assets/item6.jpg'),
          img2: require('../assets/project4.jpg'),
          tag: 'Building',
          date: '26 December,2022',
          path: 'Interior / Home / Decore',
          callout: 'The details are not the details. They make the design.',
          li: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.']
        },
        {
          id: 5,
          heading1: 'Low Cost Latest Invented Interior Designing Ideas',
          heading2: 'Design sprints are great',
          img1: require('../assets/item2.jpg'),
          img2: require('../assets/latestpost.jpg'),
          tag: 'Architecture',
          date: '22 December,2022',
          path: 'Interior / Home / Decore',
          callout: 'The details are not the details. They make the design.',
          li: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.']
        },
        {
          id: 6,
          heading1: 'Best For Any Office & Business Interior Solution',
          heading2: 'Design sprints are great',
          img1: require('../assets/item3.jpg'),
          img2: require('../assets/project2.jpg'),
          tag: 'Bathroom',
          date: '25 December,2022',
          path: 'Interior / Home / Decore',
          callout: 'The details are not the details. They make the design.',
          li: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.']
        },
        {
          id: 7,
          heading1: 'Let’s Get Solution for Building Construction Work',
          heading2: 'Design sprints are great',
          img1: require('../assets/project3.jpg'),
          img2: require('../assets/project1.jpg'),
          tag: 'K-Planning',
          date: '26 December,2022',
          path: 'Interior / Home / Decore',
          callout: 'The details are not the details. They make the design.',
          li: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.']
        },
        {
          id: 8,
          heading1: 'Low Cost Latest Invented Interior Designing Ideas',
          heading2: 'Design sprints are great',
          img1: require('../assets/photo-bed2.jpg'),
          img2: require('../assets/photo-bed.jpg'),
          tag: 'Bedroom',
          date: '22 December,2022',
          path: 'Interior / Home / Decore',
          callout: 'The details are not the details. They make the design.',
          li: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.']
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

.articles-by-tags {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 1200px;
    gap: 57px;

    &__articles-block {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        width: 800px;
    }

    &__article-ul {
        list-style-type: none;
        max-width: 799px;
    }

    &__article {
        display: flex;
        flex-direction: column;
    }

    &__main-heading {
        color: #292F36;
        font-family: 'DM Serif Display';
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1px;
        margin-bottom: 20px;
    }

    &__heading {
        color: #292F36;
        font-family: 'DM Serif Display';
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0.5px;
        margin-bottom: 24px;
    }

    &__dp-block {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 430px;
        margin-top: 11px;
        margin-bottom: 48px;
    }

    &__date-path {
        color: #4D5053;
        font-family: 'Jost';
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.16px;
        text-transform: capitalize;
    }

    &__text {
        color: #4D5053;
        font-family: 'Jost';
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
        margin-bottom: 35px;
    }

    &__callout-block {
        display: flex;
        border-radius: 50px;
        background: #F4F0EC;
        max-height: 267px;
        box-sizing: border-box;
        padding-top: 53px;
        padding-bottom: 53px;
        height: 267px;
        box-sizing: border-box;
        position: relative;
        flex-direction: column;
        align-items: center;
        margin-bottom: 27px;
    }

    &__callout-one {
        color: #CDA274;
        text-align: center;
        font-family: 'DM Serif Display';
        font-size: 200px;
        font-style: italic;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 4px;
        position: absolute;
        left: 390px;
        top: -70px;
        transform: rotate(180deg);
    }

    &__callout {
        color: #CDA274;
        text-align: center;
        font-family: 'DM Serif Display', serif;
        font-size: 25px;
        font-style: italic;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0.5px;
        padding-top: 90px;
        width: 355px;
    }

    &__list {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        counter-reset: my-counter;
        gap: 32px;
        margin-bottom: 44px;
    }

    &__list-item {
        list-style-position: inside;
        color: #4D5053;
        font-family: 'Jost';
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
        width: 790px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }

    &__list-item::before {
        content: counter(my-counter);
        counter-increment: my-counter;
        color: #CDA274;
        margin-right: 14px;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0.4px;
        display: flex;
        gap: 32px;
    }

    &__tags-block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 10px;
        width: 345px;
    }

    &__heading {
        color: #292F36;
        font-family: 'DM Serif Display';
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0.5px;
    }

    &__buttons-block {
        display: flex;
        gap: 10px;
        flex-direction: row;
        width: 345px;
        flex-wrap: wrap;
    }

    &__button-tags {
        border-radius: 10px;
        background: #F4F0EC;
        padding: 9px 30px;
        border: none;
        color: #292F36;
        text-align: center;
        font-family: 'Jost';
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0.36px;
        cursor: pointer;
    }

    img {
        margin-bottom: 35px;
        max-width: 799px;
        border-radius: 50px;
    }
}
</style>
