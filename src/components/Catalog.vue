<template>
  <div class="catalog">
    <div class="catalog__list">
      <CatalogTurkey />
      <CatalogSemi />
    </div>
  </div>
</template>

<script>
import CatalogTurkey from "@/components/product-category/CatalogTurkey"
import CatalogSemi from "@/components/product-category/CatalogSemi"
export default {
  name: "Catalog",
  components: {
    CatalogTurkey,
    CatalogSemi
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  &__link {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 10px;
    right: 10px;
    width: 100px;
    height: 50px;
    font-size: 24px;
    font-family: "Poppins", sans-serif;
    border: solid 1px #fff;
    border-radius: 8px;

    &:hover {
      background: #323232;
      box-shadow: 0 0 8px 0 #e0e0e0;
    }
  }
  &__links {
    color: #fff;
    text-decoration: none;
  }
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
}
</style>
