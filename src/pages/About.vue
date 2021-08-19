<template>
  <div class="about">
    <h2 class="title">О нас</h2>
    <div class="about__slider">
      <Slider />
    </div>
    <div class="about__text-blocks">
      <TextBlocks />
    </div>
  </div>
</template>

<script>
import Slider from '@/components/modules/Slider'
import TextBlocks from '@/components/modules/Text-blocks'
export default {
  name: "About",
  components: {
    Slider,
    TextBlocks
  }
};
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  .title {
    width: 75%;
    text-align: left;
    color: #000;
    font-weight: 500;
    font-size: 30px;
  }
}
@media only screen and (max-width: 768px) {
  .about{
    &__slider{
      display: none;
    }
  }
}
</style>
