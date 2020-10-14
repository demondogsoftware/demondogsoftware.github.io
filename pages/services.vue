<template>
  <section class="py-3">
    <article class="services--hero-container">
      <img src="" alt="services hero image placeholder">
      <div class="services--hero-text my-2">
        <h1>
          Allow us to rein in your website
        </h1>
        <p class="my-1">
          We know all to well the time and energy it takes to run
          your website, let alone the rest of your business.
          <br>
          Let us take care of the hassle of buying the domain and
          hosting the site.  Never again waste time trying to figure
          out why something isn’t working right or plain not working.
          <br>
          We’ll handle monthly maintenance/backup of your site
          and data, update content, and many more things.
        </p>
        <ContactButton />
      </div>
    </article>
    <article class="services--services-container">
      <img src="" alt="services services image placeholder">
      <div class="services--services-cards">
        <div class="services-card my-1">
          <img src="" alt="services card image placeholder">
          <p>
            Design Services
          </p>
        </div>
        <div class="services-card my-1">
          <img src="" alt="services card image placeholder">
          <p>
            Coding Services
          </p>
        </div>
        <div class="services-card my-1">
          <img src="" alt="services card image placeholder">
          <p>
            Database Services
          </p>
        </div>
        <div class="services-card my-1">
          <img src="" alt="services card image placeholder">
          <p>
            Hosting Services
          </p>
        </div>
        <div class="services-card my-1">
          <img src="" alt="services card image placeholder">
          <p>
            Maintenance Services
          </p>
        </div>
        <div class="services-card my-1">
          <img src="" alt="services card image placeholder">
          <p>
            Social Media / SEO Services
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'Services | Demon Dog Software',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'our services take care of all your needs from design and development, to deployment and hosting,as well as seo/social media and database services '
        }
      ]
    }
  }
}
</script>

<style>
</style>
