<template>
  <div class="contact--form-container">
    <h2 class="contact--form-title">
      ** Complete The Form **
    </h2>
    <form class="contact--form" action="index.html" method="post">
      <ul class="form--list">
        <li class="form--item">
          <label class="form--label" for="name">Name:</label>
          <input id="name" class="form--input" type="text" name="name" value="">
        </li>
        <li class="form--item">
          <label class="form--label" for="email">Email:</label>
          <input id="email" class="form--input" type="email" name="email" value="">
        </li>
        <li class="form--item">
          <label class="form--label" for="phone">Phone:</label>
          <input id="phone" class="form--input" type="text" name="phone" value="">
        </li>
        <li class="form--item">
          <label class="form--label" for="msg">Info:</label>
          <textarea id="msg" class="form--textarea" name="msg" rows="8" />
        </li>
        <li class="form--item">
          <button type="submit" class="btn form--submit-btn">
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

.contact--form-title {
  margin: 1.5rem 0;
  text-align: center;
}

.form--list {
  list-style:none;
}

.form--item {
  margin-top: .5rem;
}

.form--item button {
  margin-top: .25rem;
}

.form--input {
  width: 100%;
  margin-top: .25rem;
}

.form--textarea {
  box-sizing: border-box;
  width: 100%;
  margin-top: .25rem;
}
</style>
