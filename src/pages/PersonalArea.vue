<template>
  <div class="profile">
    <h2 class="title">Личный кабинет</h2>
    <div class="profile__info">
      <div class="profile__info__left">
        <h2 class="left-title">Здравствуйте, {{ name }}</h2>
      </div>
      <div class="profile__info__right">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalArea",
  computed: {
    name() {
      return this.$store.getters.INFO?.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  .title {
    width: 75%;
    text-align: left;
    color: #000;
    font-weight: 500;
    font-size: 30px;
  }

  &__info {
    display: flex;
    justify-content: center;
    width: 100%;
    &__left{
      width: 35%;
      text-align: left;
      padding-left: 30px;
      .left-title{
        text-align: left;
        color: #4b4b4b;
        font-weight: 500;
        font-size: 26px;
      }
    }
    &__right{
      width: 35%;
      text-align: center;
      padding-left: 30px;
    }
  }
}
</style>
