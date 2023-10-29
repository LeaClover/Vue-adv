<template>
  <div>
    <!-- Создайте компонент галереи изображений, который будет отображать одно большое изображения и под ним будет находиться три мини изображения, при клике на любое мини изображение оно будет отображаться вместо большого изображения. -->
    <div class="prewie">
      <img :class="$style.mainimg" :src="imgLinks[currentLink]" alt="prewie img">
    </div>
    <div class="images">
      <img v-for="(img, index) in imgLinks" :src="img" :key="index" @click="currentLink = index">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PicComp',
  data () {
    return {
      imgLinks: [
        'https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg',
        'https://i.pinimg.com/236x/0e/bd/26/0ebd262c4b7f69f7ec915dbd8509328f.jpg',
        'https://tableforchange.com/wp-content/uploads/2020/06/%D0%9E%D0%B1%D0%BE%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D0%B2%D0%BE%D1%87%D0%B5%D0%BA-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD-12-%D0%BB%D0%B5%D1%82-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-16.jpg'
      ],
      currentLink: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module>
img {
  width: 250px;
  height: 250px;
}

.mainimg {
  width: 500px;
  height: 100%;
}
</style>
