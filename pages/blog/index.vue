<template>
  <section class="container">
    <div class="blog--nav-container">
      <nav class="blog--nav">
        <ul class="nav--list">
          <li class="nav--item">
            <nuxt-link to="#" class="nav--link">
              Technology
            </nuxt-link>
          </li>
          <li class="nav--item">
            <nuxt-link to="#" class="nav--link">
              Coding
            </nuxt-link>
          </li>
          <li class="nav--item">
            <nuxt-link to="#" class="nav--link">
              Food
            </nuxt-link>
          </li>
          <li class="nav--item">
            <input class="nav--search" type="text" name="search" value="search">
          </li>
        </ul>
      </nav>
    </div>
    <article class="blog--hero-container">
      <h1>
        The Daily Dog Park
      </h1>
      <img src="" alt="blog hero img placeholder">
    </article>
    <article class="blog--blog-container">
      <h2>
        Laatest Articles
      </h2>
      <div class="blog--article--cards">
        <div class="article--card">
          <img src="" alt="article preview img placeholder">
          <div class="article--card-text">
            <p>
              Brief description
            </p>
            <ul class="article--card-keywords">
              <li class="article--card--keyword">
                key
              </li>
              <li class="article--card--keyword">
                words
              </li>
              <li class="article--card--keyword">
                here
              </li>
            </ul>
          </div>
        </div>
        <div class="article--card">
          <img src="" alt="article preview img placeholder">
          <div class="article--card-text">
            <p>
              Brief description
            </p>
            <ul class="article--card-keywords">
              <li class="article--card--keyword">
                key
              </li>
              <li class="article--card--keyword">
                words
              </li>
              <li class="article--card--keyword">
                here
              </li>
            </ul>
          </div>
        </div>
        <div class="article--card">
          <img src="" alt="article preview img placeholder">
          <div class="article--card-text">
            <p>
              Brief description
            </p>
            <ul class="article--card-keywords">
              <li class="article--card--keyword">
                key
              </li>
              <li class="article--card--keyword">
                words
              </li>
              <li class="article--card--keyword">
                here
              </li>
            </ul>
          </div>
        </div>
        <div class="article--card">
          <img src="" alt="article preview img placeholder">
          <div class="article--card-text">
            <p>
              Brief description
            </p>
            <ul class="article--card-keywords">
              <li class="article--card--keyword">
                key
              </li>
              <li class="article--card--keyword">
                words
              </li>
              <li class="article--card--keyword">
                here
              </li>
            </ul>
          </div>
        </div>
        <div class="article--card">
          <img src="" alt="article preview img placeholder">
          <div class="article--card-text">
            <p>
              Brief description
            </p>
            <ul class="article--card-keywords">
              <li class="article--card--keyword">
                key
              </li>
              <li class="article--card--keyword">
                words
              </li>
              <li class="article--card--keyword">
                here
              </li>
            </ul>
          </div>
        </div>
        <div class="article--card">
          <img src="" alt="article preview img placeholder">
          <div class="article--card-text">
            <p>
              Brief description
            </p>
            <ul class="article--card-keywords">
              <li class="article--card--keyword">
                key
              </li>
              <li class="article--card--keyword">
                words
              </li>
              <li class="article--card--keyword">
                here
              </li>
            </ul>
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
      title: 'Blog | Demon Dog Software',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'demon dog software blog is all about technology, coding, cooking, and much more as we find more interesting topics to learn and write about'
        }
      ]
    }
  }
}
</script>

<style>
</style>
