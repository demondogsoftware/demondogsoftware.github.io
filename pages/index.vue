<template>
  <section class="py-3">
    <article class="home--hero-container pb-3">
      <img src="~/assets/images/img/hero_large.jpg" alt="vibrant desert sunset with 3 buttes" class="home--hero-img">
      <div class="home--hero-text my-2">
        <h1>
          Demon Dog Software
        </h1>
        <p class="my-1">
          Coding Dreams Into Reality
          <br>
          Web development tailored to YOUR business needs
        </p>
        <ContactButton />
      </div>
    </article>
    <article class="home--services-container">
      <img src="~/assets/images/img/coding_small.jpg" alt="computer screen displaying code">
      <div class="home--services-text my-2 pb-3">
        <h2>
          Custom Coded Solutions
        </h2>
        <p class="my-1">
          Every business is different, so your website shouldn’t feel like every other business. We will create a custom website using the latest web development tools that will address all your business needs while providing a one-of-a-kind customer experiance for your customers.
        </p>
        <PortfolioButton />
      </div>
      <div class="home--services-text my-2">
        <h2>
          One Stop Tech Shop
        </h2>
        <p class="my-1">
          When working with us you can focus on your business
        </p>
      </div>
      <div class="home--services-cards">
        <div class="service--card my-1">
          <img src="" alt="service image placeholder">
          <p>DNS / Hosting</p>
        </div>
        <div class="service--card my-1">
          <img src="" alt="service image placeholder">
          <p>Database Services</p>
        </div>
        <div class="service--card my-1">
          <img src="" alt="service image placeholder">
          <p>SEO / Social</p>
        </div>
        <ServicesButton />
      </div>
      <img src="~/assets/images/img/roadmap_small.jpg" alt="road map sitting on a car dashboard cruisin down the highway">
    </article>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'Demon Dog Software',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'demon dog software is your one stop tech shop for all your website or softwware needs'
        }
      ]
    }
  }
}
</script>

<style>
</style>
