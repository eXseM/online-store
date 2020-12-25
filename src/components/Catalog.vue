<template>
    <div class="catalog">
        <router-link class="catalog__links" :to="{name: 'Cart', params:{cart_data: CART}}" >
          <div class="catalog__link">Cart: {{CART.length}} </div>
        </router-link>
        <h1>CATALOG</h1>
        <div class="catalog__list">
            <catalog-item
            v-for="product in PRODUCTS"
            :key="product.article"
            v-bind:product_data="product"
            @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
import CatalogItem from '@/components/CatalogItem'
import {mapActions, mapGetters} from 'vuex'

    export default {
        name: 'Catalog',
        components:{
            CatalogItem
        },
        data(){
            return{

            }
        },
        computed:{
          ...mapGetters([
              'PRODUCTS',
              'CART'
          ]),
        },
        methods:{
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
          addToCart(data){
                this.ADD_TO_CART(data)
            }
        },
       mounted() {
          this.GET_PRODUCTS_FROM_API()
            .then((response) =>{
              if(response.data){
                console.log('Data arrived!')
              }
            })
      }
    }
</script>

<style lang="scss" scoped>

    .catalog{
        &__link{
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: center;
          top: 10px;
          right: 10px;
          width: 100px;
          height: 50px;
          font-size: 24px;
          font-family: 'Poppins', sans-serif;
          border: solid 1px #fff;
          border-radius: 8px;

          &:hover{
            background: #323232;
            box-shadow: 0 0 8px 0 #e0e0e0;
          }
        }
        &__links{
          color: #fff;
          text-decoration: none;
        }
        &__list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
    }

</style>