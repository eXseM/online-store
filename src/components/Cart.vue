<template>
    <div class="cart">
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
}
</style>