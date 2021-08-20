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
import { mapActions } from "vuex";
export default {
  components: {
    CatalogItemTurkey,
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
    this.$store.state.products.forEach((item) => {
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
  margin-top: 60px;
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
