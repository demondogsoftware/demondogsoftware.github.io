<template>
  <Nuxt />
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
}

*,
*::before,
*::after {
  font-size: 16px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
}

.container {
  display: grid;
  grid-template-columns: 5% 1fr 1fr 1fr 1fr 1fr 1fr 5%;
}

.all-cols {
  grid-column: 2 / span 6;
}

.left-cols {
  grid-column: 2 / span 3;
}

.right-cols {
  grid-column: 5 / span 3;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
