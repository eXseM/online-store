<template>
  <div class="cart-items">
    <img
      :src="require('@/assets/' + cart_item_data.image)"
      alt=""
      class="cart-items__img"
      width="250"
      height="250"
    />
    <div class="cart-items__info">
      <div class="cart-items__info__title">
        <p>{{ cart_item_data.name }}</p>
      </div>
      <div class="cart-items__info__actions">
        <img
          @click="deleteFromCart"
          src="@/assets/trash.png"
          alt="delete"
          class="delete-btn"
        />
        <div class="quantity-block">
          <div class="quantity">
            <div @click="decrementItem" class="quantity__btn-min btn">&#10134;</div>
            <p class="quantity-counter">{{ cart_item_data.quantity }}</p>
            <div @click="incrementItem" class="quantity__btn-plus btn">
              &#10133;
            </div>
          </div>
        </div>
        <p>{{ cart_item_data.price }} ₽</p>
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
  color: #000;
  width: 300px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  &__img{
    height: 250px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    width: 100%;

    &__actions {
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      align-content: center;

      .delete-btn {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
      .quantity-block {
        width: 40%;
        .quantity {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: center;

          .quantity-counter {
            color: #000;
          }
        }
        .btn{
          cursor: pointer;
        }
      }
    }
  }
}
</style>
