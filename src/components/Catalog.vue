<template>
    <div class="catalog">
        <h1>Catalog</h1>
        <div class="catalog__list">
            <catalog-item 
            
            v-for="product in products"
            :key="product.article"
            v-bind:product_data="product"
            @addToCart="showChildArticleInConsole"
            />
        </div>
    </div>
</template>

<script>
import CatalogItem from '@/components/CatalogItem'

    export default {
        name: 'Catalog',
        components:{
            CatalogItem
        },
        data(){
            return{
                products:[
                    {
                        image:"1.png",
                        name: "T-shirt 1",
                        price: 100,
                        article: "T1",
                        available: true
                    },
                    {
                        image:"2.png",
                        name: "T-shirt 2",
                        price: 150,
                        article: "T2",
                        available: true
                    },
                    {
                        image:"3.png",
                        name: "T-shirt 3",
                        price: 200,
                        article: "T3",
                        available: false
                    },
                    {
                        image:"4.png",
                        name: "T-shirt 4",
                        price: 300,
                        article: "T4",
                        available: true
                    },
                    {
                        image:"5.png",
                        name: "T-shirt 5",
                        price: 500,
                        article: "T5",
                        available: false
                    },
                    {
                        image:"6.png",
                        name: "T-shirt 6",
                        price: 700,
                        article: "T6",
                        available: true
                    }
                ]
            }
        },
        methods:{
            showChildArticleInConsole(data){
                console.log(data);
            }
        }
    }
</script>

<style lang="scss" scoped>

    .catalog{
        &__list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
    }

</style>