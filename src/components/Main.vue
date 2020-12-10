<template>
    <div class="main">
        <h1>Main</h1>
        <Catalog />
    </div>
</template>

<script>
import Catalog from '@/components/Catalog'

    export default {
        name: 'Main',
        components:{
            Catalog
        },
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>
.main{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
}
</style>