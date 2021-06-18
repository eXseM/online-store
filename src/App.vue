<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Main from '@/components/Main'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Main,
    Header
  }
}
</script>

<style>

body{
  background: #fff;
  font-family: 'Poppins', sans-serif;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  padding: 0;
  margin: 0;
}
</style>
