<template>
  <section class="py-3">
    <article class="home--hero-container">
      <img src="" alt="demon dog software image with company name" class="home--hero-img">
      <div class="home--hero-text my-2">
        <h1>
          Demon Dog Software
        </h1>
        <p class="my-1">
          Coding Dreams Into Reality
          <br>
          Web development tailored to YOUR business needs
        </p>
        <a href="#contact-form" class="contact--btn"><span class="contact--icon" />Contact</a>
      </div>
    </article>
    <article class="home--services-container">
      <img src="" alt="services picture 1 placeholder">
      <div class="home--services-text my-2">
        <h2>
          Custom Coded Solutions
        </h2>
        <p class="my-1">
          Every business is different, so your website shouldn’t feel like every other business. We will create a custom website using the latest web development tools that will address all your business needs while providing a one-of-a-kind customer experiance for your customers.
        </p>
        <nuxt-link to="/portfolio" class="portfolio--btn">
          <span class="portfolio--icon" />
          Portfolio
        </nuxt-link>
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
        <div class="services--btn-container mb-1">
          <nuxt-link to="/services" class="services--btn">
            <span class="services--icon" />
            Services
          </nuxt-link>
        </div>
      </div>
      <img src="" alt="services picture 2 placeholder">
    </article>
    <article id="contact-form" class="home--contact-container">
      <div class="home--contact-text my-2">
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
