<template>
    <div>
        <div class="article-by-tags__articles-block">
            <ul class="articles-by-tags__article-ul">
                <li class="articles-by-tags__article"
                    v-for="{ id, heading1, heading2, img1, img2, date, path, callout, li } in filteredItems" :key="id">
                    <h2 class="articles-by-tags__main-heading">{{ heading1 }}</h2>
                    <img :src="img1" alt="article-img">
                    <div class="articles-by-tags__dp-block">
                        <p class="articles-by-tags__date-path">{{ date }}</p>
                        <p class="articles-by-tags__date-path">{{ path }}</p>
                    </div>
                    <p class="articles-by-tags__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or
                        randomised words which don't look even slightly believable.</p>
                    <p class="articles-by-tags__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum
                        generators on the Internet tend to repeat predefined chunks as necessary.</p>
                    <div class="articles-by-tags__callout-block">
                        <h1 class="articles-by-tags__callout-one">“</h1>
                        <h4 class="articles-by-tags__callout">{{ callout }}</h4>
                    </div>
                    <h2 class="articles-by-tags__main-heading">{{ heading2 }}</h2>
                    <p class="articles-by-tags__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered.</p>
                    <ol class="articles-by-tags__list">
                        <li class="articles-by-tags__list-item" v-for="(el, index) in li" :key="index">{{ el }}</li>
                    </ol>
                    <img :src="img2" alt="article-img2">
                    <p class="articles-by-tags__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered.</p>
                </li>
            </ul>
        </div>
        <div class="articles-by-tags__tags-block">
            <h4 class="articles-by-tags__heading">Tags</h4>
            <div class="articles-by-tags__buttons-block">
                <button class="articles-by-tags__button-tags" @click="setTag('Kitchen')">Kitchen</button>
                <button class="articles-by-tags__button-tags" @click="setTag('Bedroom')">Bedroom</button>
                <button class="articles-by-tags__button-tags" @click="setTag('Building')">Building</button>
                <button class="articles-by-tags__button-tags" @click="setTag('Architecture')">Architecture</button>
                <button class="articles-by-tags__button-tags" @click="setTag('K-Planning')">Kitchen Planning</button>
                <button class="articles-by-tags__button-tags" @click="setTag('Bathroom')">Bathroom</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'CompArticles',
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      tag: ''
    }
  },
  methods: {
    setTag (tag) {
      console.log(this.tag)
      this.tag = tag
    }
  },
  computed: {
    filteredItems () {
      return this.tag ? this.articles.filter((article) => article.tag.includes(this.tag)) : this.articles
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
        font-family: DM Serif Display;
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
