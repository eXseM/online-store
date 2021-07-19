<template>
  <footer class="footer">
    <div class="footer__reserved box">
      <p class="text">© 2021 - All Right Reserved</p>
    </div>
    <div class="footer__studio box">
      <p class="text">Web-studio на базе ЦИТ</p>
    </div>
    <div class="footer__adres box">
      <p class="text">
        Г. Краснодар, Старокорсунский сельский округ, участок 106
      </p>
    </div>
    <div class="footer__social box">Social link</div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  position: static;
  bottom: 0;
  background: #ff6c6c;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  .text {
    text-align: center;
  }
  &__reserved {
    width: 25%;
  }
  &__studio {
    width: 20%;
  }
  &__adres {
    width: 20%;
  }
  &__social {
    width: 15%;
  }
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
}
</style>
