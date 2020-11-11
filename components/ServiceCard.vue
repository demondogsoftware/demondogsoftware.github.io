<template>
  <div class="service--card my-3">
    <img :src="require(`~/assets/images/icons/${service.img}`)" :alt="service.alt">
    <p class="pt-1">
      {{ service.description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

p {
  font-size: 1.25rem;
  text-align: center;
}

img {
  display: block;
  width: 55%;
  margin: 0 auto;
}

</style>
