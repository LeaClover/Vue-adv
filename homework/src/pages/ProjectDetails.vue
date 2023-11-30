<template>
  <div id="projectdetails">
    <div class="center">
      <CompHeader />
      <div class="banner__4">
      </div>
      <div class="project-details">
        <div class="project-details__text-block">
          <h2 class="project-details__heading">Minimal Look Bedrooms</h2>
          <p class="project-details__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem
            vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in.
            Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean
            in the ipsum vel lectus bibendum commodo.</p>
          <p class="project-details__text">In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet
            tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras
            erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus
            vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>
        </div>
        <carousel class="project-details__slideshow-block" :per-page="1" :mouse-drag="false">
          <slide v-for="(image, index) in imageList" :key="index" :data-index="index">
            <img :src="image.url" @click="open" class="zoom">
          </slide>
        </carousel>
      </div>
      <CompFooter />
    </div>
  </div>
</template>

<script>
import CompHeader from '../components/CompHeader.vue'
import CompFooter from '../components/CompFooter.vue'
import { Carousel, Slide } from 'vue-carousel'
import fancyBox from 'vue-fancybox'

export default {
  name: 'ProjectDetails',
  components: {
    CompHeader,
    CompFooter,
    Carousel,
    Slide

  },
  data: function () {
    return {
      imageList: [
        {
          width: 1200, height: 800, url: require('../assets/slideshow1.jpg')
        },
        {
          width: 1200, height: 800, url: require('../assets/slideshow1.jpg')
        },
        {
          width: 1200, height: 800, url: require('../assets/slideshow1.jpg')
        }
      ]
    }
  },
  methods: {
    open (e) {
      fancyBox(e.target, this.imageList)
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

  &__4 {
    background: url(../assets/banner4.jpg);
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
}

.project-details {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  &__text-block {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 658px;
  }

  &__heading {
    color: #292F36;
    font-family: 'DM Serif Display';
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
    margin-bottom: 11px;
  }

  &__text {
    color: #4D5053;
    font-family: 'Jost';
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
    margin-bottom: 20px;
  }

  &__slideshow-block {
    display: flex;
    margin-top: 85px;
    margin-bottom: 200px;
    width: 1200px;
  }
}
</style>
