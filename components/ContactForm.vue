<template>
  <div class="container">
    <h2>
      ** Complete The Form **
    </h2>
    <form class="contact--form" action="index.html" method="post">
      <ul>
        <li>
          <label for="name">Name:</label>
          <input id="name" type="text" name="name" value="">
        </li>
        <li>
          <label for="email">Email</label>
          <input id="email" type="email" name="email" value="">
        </li>
        <li>
          <label for="phone">Phone:</label>
          <input id="phone" type="text" name="phone" value="">
        </li>
        <li>
          <label for="msg">Info:</label>
          <textarea id="msg" name="msg" rows="8" cols="80" />
        </li>
        <li>
          <button type="submit">
            <span class="submit--icon" />
            Submit
          </button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
