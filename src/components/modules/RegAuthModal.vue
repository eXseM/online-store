<template>
  <div class="modal" v-if="modal" ref="modal-close">
    <div class="modal__container">
      <RegAuthForm @register="register" @login="login" @close="close" />
    </div>
  </div>
</template>

<script>
import RegAuthForm from "@/components/forms/RegAuthForm";
export default {
  name: "RegAuthModal",
  components: {
    RegAuthForm,
  },
  data() {
    return {
      modal: false,
    };
  },
  methods: {
    open() {
      this.modal = true;
    },
    close() {
      this.modal = false;
    },
    async login(formLoginData) {
      this.$store.dispatch("login", formLoginData);
      await this.$store.dispatch("FETCH_INFO");
    },
    async register(formRegData) {
      this.$store.dispatch("register", formRegData);
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", function(item) {
      if (item.target === vm.$refs["modal-close"]) {
        vm.close();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.modal {
  z-index: 222;
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__container {
    width: 25%;
    border-radius: 16px;
    min-height: 400px;
    box-shadow: 0px 0px 5px 5px #f18f8f;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
}
@media only screen and (max-width: 768px) {
  .modal{
    z-index: 5555;
    &__container{
      width: 80%;
      height: 100%;
    }
  }
}
</style>
