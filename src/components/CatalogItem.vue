<template>
    <div class="catalog-item">
        <div class="catalog-item__img">
            <img :src=" require('../assets/' + product_data.image )" alt="">
        </div>
        <div class="catalog-item__box">
            <p class="catalog-item__name">{{ product_data.name }}</p>
            <p class="catalog-item__price">Price: {{product_data.price}}$</p>
            <button 
            class="catalog-item__addToCart btn" 
            @click="addToCart"
            > 
                Add to cart 
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            product_data: {
                type: Object,
                default(){
                    return{

                    }
                }
            }
        },
        methods:{
            addToCart(){
                this.$emit('addToCart', this.product_data.article)
            }
        }
    }
</script>

<style lang="scss" scoped>

    .catalog-item{
        background: #232323;
        z-index: -2;
        border-radius: 20px;
        overflow: hidden;
        padding: 10px;
        position: relative;
        margin-bottom: 10px;
        
        &__img{
            z-index: 10000;
            width: 100%;
            height: 250px;
            
            & img{
                width: 250px;
                height: 250px;
            }
        }
        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgb(45, 206, 137);
            clip-path: circle(150px at 90% 10%);
            transition: .5s ease-in-out;
            z-index: -1;
        }
        &::after{
            content: 'eX';
            position: absolute;
            top: 40%;
            left: 10%;
            font-size: 12em;
            font-weight: 800;
            font-style: italic;
            color: rgba(45, 206, 137,0.04);
            z-index: -1;
        }
    }

</style>