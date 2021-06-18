<template>
    <div class="main">
        <keep-alive>
          <router-view />
        </keep-alive>
    </div>
</template>

<script>

    export default {
        name: 'Main'
    }
</script>

<style lang="scss" scoped>

.main{
    max-width: 900px;
    margin: 0 auto;
}
</style>