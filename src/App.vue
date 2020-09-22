<template>
  <div id="app">
    <h1 class="text-xl font-mono text-gray-700 font-bold">Apricot Scraper</h1>
    <Scraper/>
  </div>
</template>

<script>
import Scraper from './components/Scraper.vue'

export default {
  name: 'App',
  components: {
    Scraper
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
