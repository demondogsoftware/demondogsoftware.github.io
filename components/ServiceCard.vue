<template>
  <div class="service--card py-2">
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

.service--card {
  background-color: rgba(0, 0, 0, .65);
  width: 90%;
  margin: 3rem auto;
}

p {
  font-size: 1.25rem;
  text-align: center;
}

img {
  display: block;
  width: 50%;
  margin: 0 auto;
}

</style>
