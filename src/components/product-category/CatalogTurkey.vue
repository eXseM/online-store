<template>
  <div class="catalog-turkey">
    <h2 class="title">Индейки</h2>
    <div class="ind">
      <CatalogItemTurkey
        v-for="product in products"
        :key="product.id"
        @addToCart="addToCart"
        :product_data="product"
      />
    </div>
  </div>
</template>

<script>
import CatalogItemTurkey from "@/components/product-items/CatalogItemTurkey";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    CatalogItemTurkey,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {
    ...mapActions(["ADD_TO_CART", "GET_PRODUCTS_FROM_FB"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  created() {
    this.products = this.$store.state.products[1].Turkey
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
