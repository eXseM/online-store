<template>
  <div class="cart-items">
    <img
      :src="require('@/assets/' + cart_item_data.image)"
      alt=""
      class="cart-item__img"
    />
    <div class="cart-items__info">
      <div class="cart-items__info__title">
        <p>{{ cart_item_data.name }}</p>
      </div>
      <div class="cart-items__info__actions">
        <button @click="deleteFromCart" class="cart-item__delete-btn">
          D
        </button>
        <div class="cart-items__quantity">
          <div class="quantity">
            <div @click="decrementItem" class="quantity__btn-min">&#10134;</div>
            {{ cart_item_data.quantity }}
            <div @click="incrementItem" class="quantity__btn-plus">
              &#10133;
            </div>
          </div>
        </div>
        <p>{{ cart_item_data.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {},
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-items {
  border: 1px solid black;
  color: #000;
  width: 260px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  &__info {
    display: flex;
    flex-direction: column;
    background: #696969;
    width: 100%;

    &__actions {
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
