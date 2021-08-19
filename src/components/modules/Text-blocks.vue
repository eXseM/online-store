<template>
  <div class="blocks-wrapper">
    <div class="block" v-for="item in $options.textBlocks" :key="item.id">
      <img :src="require('@/assets/'+ item.img)" alt="img" width="150" height="150">
      <p class="block__title">{{item.title}}</p>
      <p class="block__desc">{{item.desc}}</p>
    </div>
  </div>
</template>

<script>
import textBlocks from '@/components/text-configs/text-config'
export default {
  textBlocks,
  name: 'Text-blocks',
};
</script>

<style lang="scss" scoped>
.blocks-wrapper{
  margin-top: 40px;
  display: flex;
  color: #000;
  width: 100%;
  margin-bottom: 50px;
  .block{
    max-width: 300px;
    width: 260px;
    height: auto;

    &__title{
      font-size: 24px;
      text-align: center;
      height: 50px;
    }
    &__desc{
      padding-top: 20px;
      font-size: 16px;
      font-weight: 400;
    }
  }
}
@media only screen and (max-width: 768px) {
  .blocks-wrapper{
    display: flex;
    flex-direction: column;
  }
}
</style>
