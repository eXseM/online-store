<template>
  <div id="app">
    <notifications group="foo" />
    <Header @open-modal="open()" />
    <RegAuthModal ref="modal" />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Main from "@/pages/Main";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegAuthModal from "@/components/modules/RegAuthModal";
export default {
  name: "App",
  components: {
    Main,
    Header,
    Footer,
    RegAuthModal,
  },
  async created(){
    await this.$store.dispatch("FETCH_INFO");
    await this.$store.dispatch('GET_TURKEY_FROM_FB')
    await this.$store.dispatch('GET_SEMI_FROM_FB')
    await this.$store.dispatch('GET_DUCK_FROM_FB')
    await this.$store.dispatch('GET_SAUS_FROM_FB')
  },
  methods: {
    open() {
      this.$refs.modal.open();
    },
  }
};
</script>

<style>
body {
  background: #fff;
  font-family: Montserrat, sans-serif;
  padding: 0;
  margin: 0;
  min-height: 100vh;
}
textarea:focus,
input:focus {
  outline: none;
}
.dirty {
  border-color: #5a5;
  background: #efe;
}
.error {
  border: 1px solid red;
  background: #fdd;
}
#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  padding: 0;
  margin: 0;
}
</style>
