<template>
    <div>
        <h1>Catalog</h1>
        <catalog-item />
    </div>
</template>

<script>
import CatalogItem from '@/components/CatalogItem'

    export default {
        name: 'Catalog',
        components:{
            CatalogItem
        }
    }
</script>

<style lang="scss" scoped>

</style>