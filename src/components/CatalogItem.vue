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
      mounted() {
        this.$set(this.product_data, 'quantity', 1)
      },
      methods:{
            addToCart(){
                this.$emit('addToCart' ,this.product_data)
            }
        }
    }
</script>

<style lang="scss" scoped>

    .catalog-item{
        background: #232323;
        border-radius: 20px;
        overflow: hidden;
        z-index: 1;
        padding: 10px;
        position: relative;
        margin-bottom: 10px;

        &__img{
            width: 100%;
            height: 250px;
            & img{
                width: 250px;
                height: 250px;
                transition: 1s ease-in-out;

                &:hover{
                  scale: 1.2;
                }
            }
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

      &__addToCart{
        width: 150px;
        height: 40px;
        color: #fff;
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(35deg, #323232 10%, #2DCE89 , #323232);
        border: none;
        appearance: none;
        outline: none;
        border-radius: 8px;
        transition: .2s ease-in-out;
        &:hover{
          box-shadow: 0 0 5px 5px #2DCE89;
        }
      }
    }

</style>