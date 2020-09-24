<template>
  <header class="container row nav--header">
    <button class="nav--toggle" aria-label="open navigation menu" @click="toggleNav" @keyup.enter.native="toggleNav">
      <span class="hamburger" />
    </button>
    <nuxt-link to="/" class="nav--logo">
      <img src="" alt="demon dog software logo">
    </nuxt-link>
    <nav class="main--nav" :class="{ 'main--nav-visible': showNav }">
      <ul class="nav--list">
        <li class="nav--item">
          <nuxt-link to="/" class="nav--link">
            Home
          </nuxt-link>
        </li>
        <li class="nav--item">
          <nuxt-link to="/services" class="nav--link">
            Services
          </nuxt-link>
        </li>
        <li class="nav--item">
          <nuxt-link to="/blog" class="nav--link">
            Blog
          </nuxt-link>
        </li>
        <li class="nav--item">
          <nuxt-link to="/portfolio" class="nav--link">
            Portfolio
          </nuxt-link>
        </li>
        <li class="nav--item">
          <nuxt-link to="/about" class="nav--link">
            About
          </nuxt-link>
        </li>
        <li class="nav--item">
          <nuxt-link to="" class="nav--link">
            Contact
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      showNav: false
    }
  },
  methods: {
    toggleNav () {
      this.showNav = !this.showNav
    }
  }
}
</script>

<style>

.nav--header {
  padding: 1em 0;
}

.main--nav {
  width: 100%;
  visibility: hidden;
  height: 0;
  position: absolute;
}

.main--nav-visible {
  visibility: visible;
  height: auto;
  position: relative;
}

.nav--list {
  list-style: none;
  text-align: center;
}

.nav--item {
  margin-top: .75rem;
}

.nav--link {
  text-decoration: none;
}

.nav--toggle {
  cursor: pointer;
  border: 0;
  width: 3em;
  height: 3em;
  background-color: #eee;
  color: #000;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  transition: opacity 250ms ease;
}

.nav--toggle:focus,
.nav--toggle:hover {
  opacity: .75;
}

.hamburger {
  width: 50%;
  position: relative;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  display: block;
  margin: 0 auto;
  height: 3px;
  background-color: #000;
}

.hamburger::before,
.hamburger::after {
  content: '';
  width: 100%;
}

.hamburger::before {
  transform: translateY(-6px);
}

.hamburger::after {
  transform: translateY(3px);
}

.nav--logo {
  height: 2rem;
}

@media (min-width: 800px) {
  .nav--toggle {
    display: none;
  }
  .main--nav {
    visibility: visible;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: auto;
    position: relative;
  }
  .nav--list {
    display: flex;
  }
  .nav--item + .nav--item {
    margin-left: .75rem;
  }
}
</style>
