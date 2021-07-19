<template>
    <div class="cart">
      <h2 class="title">Корзина</h2>
      <p v-if="!cart_data.length" class="cart__empty">There are no products in cart...</p>
      <div class="cart-item">
        <CartItem
          v-for="(item, index) in cart_data"
          :key="item.article"
          :cart_item_data="item"
          @deleteFromCart="deleteFromCart(index)"
          @increment="increment(index)"
          @decrement="decrement(index)"
        />
      </div>
    </div>
</template>

<script>
import CartItem from "@/components/cart/CartItem";
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
  color: #000;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  .title {
    width: 75%;
    text-align: left;
    color: #000;
    font-weight: 500;
    font-size: 30px;
  }
  .cart-item {
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &__empty{
    color: #000;
  }
}
</style>