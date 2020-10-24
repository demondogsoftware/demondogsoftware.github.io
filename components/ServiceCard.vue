<template>
  <div class="service--card my-1">
    <img :src="img" alt="service image placeholder">
    <p>{{ service }}</p>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    service: String
  }
}
</script>

<style scoped>
</style>
