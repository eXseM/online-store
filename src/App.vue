<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from '@/components/Main'


export default {
  name: 'App',
  components: {
    Main
    
  }
}
</script>

<style>

body{
  background: #131313;
  font-family: 'Poppins', sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
</style>
