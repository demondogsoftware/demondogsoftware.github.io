<template>
  <article class="home--contact-container py-3">
    <div class="home--contact-text">
      <h2>
        CONTACT US
      </h2>
      <p class="my-1">
        Want a price quote or have questions regarding services?
        <br>
        Do you have an idea or project you want to bring to lfe?
      </p>
    </div>
    <img src="" alt="home contact image placeholder">
    <ContactForm />
  </article>
</template>

<script>
export default {
  head () {
    return {
      title: 'Contact Demon Dog Software',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'please contact demon dog software if you need a price quote, have a question or suggestion.  we respond in 24-48 hours'
        }
      ]
    }
  }
}
</script>

<style scoped>
h2,
p {
  text-align: center;
}
</style>
