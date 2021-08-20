<template>
  <div class="mobile" @click="showMenu = !showMenu" v-click-outside="close">
    <img src="@/assets/Burger.png" alt="Open menu" width="40" height="30" />
    <ul class="mobile__menu" v-if="showMenu">
      <li>
        <router-link class="link" to="/">
          Каталог
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/contacts">
          Контакты
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/about-us">
          О нас
        </router-link>
      </li>
      <li>
        <button class="auth-btn" v-if="!auth" @click="$emit('open-modal')">
          Вход / Регистрация
        </button>
        <router-link class="link" to="/profile" v-else>
          Личный кабинет
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/cart">
          <img src="@/assets/Cart.png" alt="" width="20" height="15" class="cart-icon"> Корзина {{cartLength}}
        </router-link>
      </li>
      <li v-if="auth">
        <button class="auth-btn" @click="logout">
          Выйти из аккаунта
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MobileNav",
  props: {
    auth: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    cartLength() {
      return this.$store.state.cart.length
    }
  },
  methods: {
    close() {
      this.showMenu = false;
    },
    logout() {
      window.localStorage.clear();
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: #ff6c6c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  z-index: 332;
  img {
    width: 40px;
    height: 30px;
  }
  &__menu {
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    background: #ff6c6c;
    color: #fff;
    top: 0;
    height: auto;
    text-decoration: none;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 333;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      justify-items: center;
      font-size: 26px;
      border-bottom: 1px solid #000;
      width: 100%;
      padding-bottom: 20px;
      padding-top: 20px;
    }
    .link {
      margin: 0;
      padding: 0;
      text-decoration: none;
      color: #fff;
      width: 100%;
      height: 100%;
    }
    .auth-btn{
      background: none;
      border: none;
      width: 100%;
      color: #fff;
      font-size: 26px;
    }
  }
}
</style>
