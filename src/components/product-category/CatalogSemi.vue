<template>
  <div class="catalog-semi">
    <h2 class="title">Полуфабрикат</h2>
    <div class="pol">
      <!-- <CatalogItemTurkey
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      /> -->
    </div>
  </div>
</template>

<script>
// import CatalogItemTurkey from "@/components/product-items/CatalogItemTurkey";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    // CatalogItemTurkey,
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {
    ...mapActions(["ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.catalog-semi {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #1c1a22;
  .title {
    width: 75%;
    text-align: left;
    color: #fff;
    font-weight: 500;
    font-size: 30px;
  }
  .pol {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
  }
}
</style>
