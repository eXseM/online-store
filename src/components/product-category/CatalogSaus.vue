<template>
  <div class="catalog-semi">
    <h2 class="title">Колбасы</h2>
    <div class="pol">
      <CatalogItemSemi
        v-for="product in products"
        :key="product.id"
        @addToCart="addToCart"
        :product_data="product"
      />
    </div>
  </div>
</template>

<script>
import CatalogItemSemi from "@/components/product-items/CatalogItemSemi";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    CatalogItemSemi,
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
    ...mapActions(["ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.$store.state.saus.forEach((item) => {
      this.products.push(item.fields);
    });
  },
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
