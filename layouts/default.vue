<template>
  <div class="container">
    <MainNav />
    <Nuxt />
  </div>
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

body {
  background-color: #100e0e;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='304' height='304' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23231e1e' stroke-width='6.2'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23330033'%3E%3Ccircle cx='769' cy='229' r='14'/%3E%3Ccircle cx='539' cy='269' r='14'/%3E%3Ccircle cx='603' cy='493' r='14'/%3E%3Ccircle cx='731' cy='737' r='14'/%3E%3Ccircle cx='520' cy='660' r='14'/%3E%3Ccircle cx='309' cy='538' r='14'/%3E%3Ccircle cx='295' cy='764' r='14'/%3E%3Ccircle cx='40' cy='599' r='14'/%3E%3Ccircle cx='102' cy='382' r='14'/%3E%3Ccircle cx='127' cy='80' r='14'/%3E%3Ccircle cx='370' cy='105' r='14'/%3E%3Ccircle cx='578' cy='42' r='14'/%3E%3Ccircle cx='237' cy='261' r='14'/%3E%3Ccircle cx='390' cy='382' r='14'/%3E%3C/g%3E%3C/svg%3E");
  color: #eee;
}

*,
*::before,
*::after {
  font-size: 1rem;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
}

.container {
  width: 80%;
  margin: 0 auto;
  position: relative;
}

.py-1 {
  padding: 1rem 0;
}

.py-2 {
  padding: 2rem 0;
}

.py-3 {
  padding: 3rem 0;
}

.px-1 {
  padding: 0 1rem;
}

.px-2 {
  padding: 0 2rem;
}

.px-3 {
  padding: 0 3rem;
}

.pt-1 {
  padding-top: 1rem;
}

.pt-2 {
  padding-top: 2rem;
}

.pt-3 {
  padding-top: 3rem;
}

.pb-1 {
  padding-bottom: 1rem;
}

.pb-2 {
  padding-bottom: 2rem;
}

.pb-3 {
  padding-bottom: 3rem;
}

.my-1 {
  margin: 1rem 0;
}

.my-2 {
  margin: 2rem 0;
}

.my-3 {
  margin: 3rem 0;
}

.mb-1 {
  margin-bottom: 1rem;
}

.btn {
  text-decoration: none;
  color: #eee;
  background-color: #550055;
  padding: 10px 30px;
  border: none;
  border-radius: 10px;
}

@media (min-width: 800px) {
  .flex {
    display: flex;
  }
}
</style>
