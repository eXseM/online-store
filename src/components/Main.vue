<template>
    <div class="main">
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
    max-width: 900px;
    margin: 0 auto;
}
</style>