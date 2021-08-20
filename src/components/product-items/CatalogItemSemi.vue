<template>
  <div class="catalog-item">
    <div class="catalog-item__img">
      <img :src="require('@/assets/' + product_data.image)" alt="" width="250" height="250"/>
    </div>
    <div class="catalog-item__box">
      <p class="catalog-item__name">{{ product_data.name }}</p>
      <!-- <p class="catalog-item__weight">{{ product_data.weight }} гр.</p> -->
      <p class="catalog-item__price">{{ product_data.price }} ₽ за 1 кг.</p>
      <button class="catalog-item__addToCart btn" @click="addToCart">
        Выбрать
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product_data: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.$set(this.product_data, "quantity", 1);
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
      this.$notify({
        group: "foo",
        title: "Товар добавлен в корзину",
        type: "success",
        duration: 1500
      })
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog-item {
  font-family: Montserrat, serif;
  border-radius: 20px;
  width: 300px;
  height: 450px;
  overflow: hidden;
  z-index: 1;
  padding: 10px;
  position: relative;
  margin-bottom: 10px;

  &__img {
    width: 100%;
    height: 250px;
    & img {
      width: 250px;
      height: 250px;
      transition: 1s ease-in-out;

      &:hover {
        scale: 1.2;
      }
    }
  }
  &__box {
    text-align: left;
    padding-left: 20px;
  }
  &__name {
    color: #fff;
  }
  &__weight {
    color: #fff;
  }
  &__price {
    color: #fff;
  }

  &__addToCart {
    font-family: Montserrat, serif;
    margin-left: 170px;
    width: 80px;
    height: 35px;
    color: #fff;
    font-size: 14px;
    background: none;
    border: 1px solid #fff;
    border-radius: 2px;

    &:hover {
      background: #ff6c6c;
      color: #fff;
      border: none;
      border-radius: 2px;
    }
  }
}
</style>
