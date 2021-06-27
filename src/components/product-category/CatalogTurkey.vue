<template>
  <div class="catalog-turkey">
    <h2 class="title">Индейки</h2>
    <div class="ind">
      <CatalogItemTurkey
        v-for="product in PRODUCTS"
        :key="product.article"
        v-bind:product_data="product"
        @addToCart="addToCart"
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
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Data arrived!");
      }
    });
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
    width: 75%;
  }
}
</style>
