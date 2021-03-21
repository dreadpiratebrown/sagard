<template>
  <div class="grid">
    <the-header><h2>Book 1 - The Ice Dragon</h2></the-header>
    <aside>
      <the-sidebar></the-sidebar>
    </aside>
    <main id="main">
      <div id="main-top"></div>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheSidebar from './components/layout/TheSidebar.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheSidebar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins:ital,wght@0,300;0,600;1,300&display=swap');

* {
  box-sizing: border-box;
}

html {
  color: #202020;
  font-family: "Poppins", sans-serif;
}

body {
  margin: 0;
}

h1, h2, h3, h4 {
  font-family: "Abril Fatface", serif;
  font-weight: normal;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: max-content auto;
  height: 100vh;
  overflow: hidden;
  width: 100%;
}

aside {
  border-right: 1px solid #c9c9c9;
  overflow: auto;
  padding: 1rem;
}

main {
  overflow: auto;
  padding: 2rem 2rem 4rem;
}
</style>
