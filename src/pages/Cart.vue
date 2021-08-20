<template>
  <div class="cart">
    <h2 class="title">Корзина</h2>
    <p v-if="!cart_data.length" class="cart__empty">
      There are no products in cart...
    </p>
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
    <div class="cart__price">
      <p class="count">Сумма заказа: {{ cartTotalCost }} ₽</p>
      <button class="checkout_btn" @click="routeToYandex">Перейти к оплате</button>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/cart/CartItem";
import { mapActions } from "vuex";

export default {
  components: {
    CartItem,
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    routeToYandex(){
      window.location.href = 'https://yandex.ru/support/pay/test-account.html'
    }
  },
  computed: {
    cartTotalCost() {
      return this.cart_data.reduce(
        (res, item) => res + item.price * item.quantity,
        0
      );
    },
    cart_data() {
      return this.$store.state.cart
    }
  },
};
</script>

<style lang="scss" scoped>
.cart {
  margin-top: 60px;
  color: #000;
  display: flex;
  min-height: 90vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &__price {
    width: 100%;
    margin-top: 200px;
    background: #ff6c6c50;
    .count {
      font-size: 20px;
      color: #000;
    }
    .checkout_btn{
      width: 200px;
      height: 40px;
      color: #000;
      border: none;
      background: none;
      border-radius: 4px;
      font-size: 20px;
      margin-bottom: 20px;
      cursor: pointer;
      &:hover{ 
        border: 2px solid #000;
      }
    }
  }
  &__empty {
    color: #000;
  }
}
</style>
