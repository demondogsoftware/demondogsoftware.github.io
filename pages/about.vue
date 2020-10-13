<template>
  <section class="py-3">
    <article class="about--hero-container">
      <img src="" alt="about hero img placeholder">
      <div class="about--hero-text my-2">
        <h1>
          Let Us Take A BYTE
        </h1>
        <p class="my-1">
          Demon Dog Software was founded on the idea that any business should have a great online presence.  Instead of worrying about how to create and get that running we will take care of it all for you and then manage or train your employees to handle it
        </p>
        <p class="my-1">
          Our goal is to figure out your online needs and help you reach the best solution for  your business
        </p>
        <div class="services--btn-container">
          <nuxt-link to="/services" class="services--btn">
            <span class="services--icon" />
            Services
          </nuxt-link>
        </div>
      </div>
    </article>
    <article class="about--employees-container">
      <div class="about--employees-cards">
        <div class="employee--card my-1">
          <img src="" alt="employee img placeholder">
          <div class="employee--card-text my-3">
            <p>
              ipso Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="employee--card-links">
            <a href="#" class="social--link">
              <span class="facebook--icon" />
              Facebook
            </a>
            <a href="#" class="social--link">
              <span class="twitter--icon" />
              Twitter
            </a>
            <a href="#" class="social--link">
              <span class="instagram--icon" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'About | Demon Dog Software',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'demon dog software was founded to help business with their online website, as well as everything that can entail.  Our goal is to create a personalized online presence for your business and help you run it so you can focus on your business'
        }
      ]
    }
  }
}
</script>

<style>

.employee--card-links {
  display: flex;
  justify-content: space-between;
}

.social--link {
  text-decoration: none;
}

</style>
