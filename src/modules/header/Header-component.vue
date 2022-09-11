<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="header-logo">
        <router-link to="/">
          <h1 class="header-logo_title">Cozy House</h1>
        </router-link>
        <p class="header-logo_text">Shelter for pets in Boston</p>
      </div>
      <nav class="nav">
        <div class="nav-menu">
          <ul class="nav-menu_items">
            <li class="nav-menu_item">
              <router-link class="list" to="/about"
                >About the shelter</router-link
              >
            </li>
            <li class="nav-menu_item">
              <router-link class="list" to="/ourPets">Our pets</router-link>
            </li>
            <li class="nav-menu_item">
              <router-link class="list" to="/contacts">Contacts</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/header.scss";
</style>
