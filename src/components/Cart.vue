<template>
    <div class="cart">
      <div class="cart__links">
        <router-link class="cart__router" to="/">Main</router-link>
      </div>
      <h1>CART</h1>
      <p v-if="!cart_data.length">There are no products in cart...</p>
      <CartItem
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
      />
    </div>
</template>

<script>
import CartItem from "@/components/CartItem";
import {mapActions} from "vuex"
    export default {
        components:{
          CartItem
        },
        props:{
          cart_data:{
            type: Array,
            default() {
              return []
            }
          }
        },
        methods:{
          ...mapActions([
              'DELETE_FROM_CART'
          ]),
          deleteFromCart(index){
            this.DELETE_FROM_CART(index)
          }
        }
    }
</script>

<style lang="scss" scoped>
.cart{
  &__links{
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100px;
    height: 50px;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    border-radius: 8px;

    &:hover{
      background: #323232;
      box-shadow: 0 0 8px 0 #e0e0e0;
    }
  }
  &__router{

    color: #fff;
    text-decoration: none;
  }
}
</style>