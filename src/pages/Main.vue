<template>
  <div class="main">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import messages from "@/utils/messages";
export default {
  messages,
  name: "Main",
  computed: {
    error() {
      return this.$store.getters.ERROR;
    },
  },
  watch: {
    error(fbError) {
      this.$notify({
        group: "foo",
        title: this.$options.messages[fbError.code],
        type: "error",
        duration: 3000,
      });
    },
  },
  async mounted() {
    if (this.$store.getters.state === {})
      await this.$store.dispatch("FETCH_INFO");
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin: 0 auto;
}
</style>
