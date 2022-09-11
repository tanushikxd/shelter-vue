<template>
  <main class="main">
    <section class="hero">
      <div class="container">
        <div class="hero-wrapper">
          <div class="hero-wrapper_info">
            <h2 class="hero-wrapper_info_title">
              Not only people need a house
            </h2>
            <p class="hero-wrapper_info_text">
              We offer to give a chance to a little and nice puppy with an
              extremely wide and open heart. He or she will love you more than
              anybody else in the world, you will see!
            </p>
            <button class="hero-wrapper_info_link">
              <router-link class="hero-wrapper_info_route" to="/ourPets"
                >Make a friend
              </router-link>
            </button>
          </div>
          <div class="hero-img"></div>
        </div>
      </div>
    </section>
    <section class="about">
      <div class="container about-container">
        <div class="about-info">
          <div class="about-img"></div>
          <div class="about-proper">
            <h2 class="about-title">About the shelter “Cozy House”</h2>
            <p class="about-text">Learn more about our wonderful pets...</p>
            <button class="about-btn">
              <router-link class="about-link" to="/about"
                >Learn more</router-link
              >
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/main.scss";
</style>
