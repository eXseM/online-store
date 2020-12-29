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
        @increment="increment(index)"
        @decrement="decrement(index)"
      />
      <div class="cart__total">
        <p class="total__name">Total: </p>
        <p>{{ cartTotalCost }} $</p>
      </div>
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
              'DELETE_FROM_CART',
              'INCREMENT_CART_ITEM',
              'DECREMENT_CART_ITEM'
          ]),
          increment(index){
            this.INCREMENT_CART_ITEM(index)
          },
          decrement(index){
            this.DECREMENT_CART_ITEM(index)
          },
          deleteFromCart(index){
            this.DELETE_FROM_CART(index)
          }
        },
      computed:{
          cartTotalCost(){
            return this.cart_data.reduce((res, item) => res + item.price*item.quantity, 0)
          }
      }
    }
</script>

<style lang="scss" scoped>
.cart{
  margin-bottom: 130px;
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
  &__total{
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 24px;
    display: flex;
    justify-content: center;
    background: #2DCE89;
    color: #fff;
    font-size: 24px;
  }
  .total__name{
    margin-right: 16px;
  }
}
</style>