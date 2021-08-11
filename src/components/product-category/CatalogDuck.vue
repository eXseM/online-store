<template>
  <div class="catalog-turkey">
    <h2 class="title">Утки</h2>
    <div class="ind">
      <CatalogItemDuck
        v-for="product in products"
        :key="product.id"
        @addToCart="addToCart"
        :product_data="product"
      />
    </div>
  </div>
</template>

<script>
import CatalogItemDuck from "@/components/product-items/CatalogItemDuck";
import { mapActions } from "vuex";
export default {
  components: {
    CatalogItemDuck,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    ...mapActions(["ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.$store.state.duck.forEach((item) => {
      this.products.push(item.fields)
    })
  },
};
</script>

<style lang="scss" scoped>
.catalog-turkey {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .title {
    width: 75%;
    text-align: left;
    color: #000;
    font-weight: 500;
    font-size: 30px;
    flex-wrap: nowrap;
  }
  .ind {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
  }
}
</style>
