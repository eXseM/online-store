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
import firebase from 'firebase/app'
import 'firebase/firestore'
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
    firebase.firestore().collection("products").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      })
    })
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
