<template>
  <div class="service--card my-1">
    <img :src="require(`~/assets/images/img/${service.img}`)" :alt="service.alt">
    <p>{{ service.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    service: Object
  }
}
</script>

<style scoped>
</style>
