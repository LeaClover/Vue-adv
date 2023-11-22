<template>
    <div>
        <p>Имя: {{ user.firstName }}</p>
        <p>Фамилия: {{ user.lastName }}</p>
        <p>Почта: {{ user.email }}</p>
        <button @click="showInfo = !showInfo">Показать описание</button>
        <input v-if="showInfo" v-model="description" @input="updateDescription">
        <p>{{ user.description }}</p>
    </div>
</template>
<script>

export default {
  name: 'CompUser',
  props: ['user'],
  data () {
    return {
      showInfo: false,
      description: ''
    }
  },
  created: function () {
    this.description = this.user.description
  },
  methods: {
    updateDescription () {
      const updateData = {
        id: this.user.id,
        description: this.description
      }
      this.$emit('updateDescription', updateData)
    }
  }
}
</script>
