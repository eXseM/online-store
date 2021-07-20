<template>
  <div class="header">
    <div class="header__left">
      LOGO
    </div>
    <div class="header__right">
      <div class="header__right__links">
      <router-link class="links" to="/"> Каталог </router-link>
      <router-link class="links" to="/contacts"> Контакты </router-link>
      <router-link class="links" to="/about-us"> О нас </router-link>
      <button class='reg-auth' @click="$emit('open-modal')"> Вход / Регистрация </button>
      <router-link class="links" :to="{name: 'Cart', params:{cart_data: CART}}"> Корзина {{CART.length}} </router-link>
      <router-link class="user-name" to="/">user-name</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    name: "Header",
    computed: {
      ...mapGetters(['CART'])
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    background: #FF6C6C;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 60px;
    width: 100%;
    font-family: Montserrat;
    &__left {
      width: 40%;
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
        .links{
          font-size: 18px;
          font-weight: 400;
          padding-left: 10px;
          padding-right: 10px;
        }
        .user-name{
          margin-left: 20px;
          font-size: 18px;
          font-weight: 400;
          padding-left: 20px;
        }
        .reg-auth{
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