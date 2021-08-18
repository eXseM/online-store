<template>
  <splide :options="options">
    <splide-slide>
      <img src="@/assets/MyasnoyOreh.png" width="400" />
    </splide-slide>
    <splide-slide>
      <img src="@/assets/PelmeniIzIndeyki.png" width="400" />
    </splide-slide>
    <splide-slide>
      <img src="@/assets/PerecFarsh.png" width="400" />
    </splide-slide>
  </splide>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind: true,
        width: 800,
        height: 500,
        perPage: 1,
        gap: "3rem",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
