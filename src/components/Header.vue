<template>
  <div class="header">
    <div class="header__left" v-if="!mobileView">
      <img src="@/assets/LOGO.png" alt="" class="logo">
    </div>
    <div class="header__right" v-if="!mobileView">
      <div class="header__right__links">
        <router-link class="links" to="/"> Каталог </router-link>
        <router-link class="links" to="/contacts"> Контакты </router-link>
        <router-link class="links" to="/about-us"> О нас </router-link>
        <button class="reg-auth" @click="$emit('open-modal')" v-if="!name">
          Вход / Регистрация
        </button>
        <router-link
          class="links"
          :to="{ name: 'Cart', params: { cart_data: CART } }"
        >
          <img src="@/assets/Cart.png" alt="" width="20" height="15" class="cart-icon"> Корзина {{ CART.length }}
        </router-link>
        <div class="user-menu" v-click-outside="close">
          <div class="user-avatar" v-if="name">
            <img src="@/assets/user.png" alt="" class="user-avatar__img" />
          </div>
          <button class="user-name" @click="openMenu = !openMenu">
            {{ name }}
          </button>
          <transition name="fade">
            <div class="drop-menu" v-if="openMenu">
              <router-link to="/profile">
                <button class="drop-menu__action btn">
                    Личный кабинет
                </button>
              </router-link >
              <button class="drop-menu__action btn" @click="logout">
                Выйти
              </button>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <mobile-nav
      :auth="name"
      @open-modal="$emit('open-modal')"
      v-else
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MobileNav from "./modules/MobileNav.vue";
export default {
  components: { MobileNav },
  name: "Header",
  data() {
    return {
      openMenu: false,
      mobileView: false,
    };
  },
  methods: {
    close() {
      this.openMenu = false;
    },
    logout() {
      window.localStorage.clear();
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    handleView() {
      this.mobileView = window.innerWidth <= 1199;
    },
  },
  computed: {
    name() {
      return this.$store.getters.INFO?.name;
    },
    ...mapGetters(["CART"]),
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", function(item) {
      if (item.target === vm.$refs["dropMenu-close"]) {
        vm.close();
      }
    });
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  background: #ff6c6c;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 60px;
  width: 100%;
  font-family: Montserrat;
  z-index: 232;
  &__left {
    width: 40%;
    .logo{
      height: 60px;
    }
  }
  &__right {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    &__links {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      .links {
        font-size: 18px;
        font-weight: 400;
        padding-left: 10px;
        padding-right: 10px;
        // .cart-icon{
        //   position: relative;
        //   top: 5px;
        //   right: -10px;
        //   z-index: -2;
        // }
      }
      .user-menu {
        width: 130px;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        align-content: center;
        .user-avatar {
          width: 100px;
          height: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          &__img {
            width: 40px;
            height: 40px;
          }
        }
        .fade-enter,
        .fade-leave-to {
          opacity: 0;
          transition: opacity 0.5s;
        }
        .drop-menu {
          position: absolute;
          top: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          align-content: center;
          background: #a7a7a7;
          width: 150px;
          height: 70px;

          .btn {
            background: none;
            border: none;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
            height: 35px;
            width: 150px;
          }
        }
      }
      .user-name {
        font-size: 18px;
        font-weight: 400;
        padding-left: 20px;
        border: none;
        background: none;
        color: #fff;
        cursor: pointer;
      }
      .reg-auth {
        background: none;
        border: none;
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        cursor: pointer;
      }
    }
  }
}
a {
  text-decoration: none;
  color: #fff;
}
</style>
