<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Main from '@/pages/Main'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Main,
    Header,
    Footer
  }
}
</script>

<style>

body{
  background: #fff;
  font-family: Montserrat, sans-serif;
  padding: 0;
  margin: 0;
}
textarea:focus, input:focus{
    outline: none;
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
