<template>
  <div class="cart-item">
    <img :src=" require('../assets/' + cart_item_data.image )" alt="" class="cart-item__img">
    <div class="cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="cart-item__quantity">
      <p>Qty: {{cart_item_data.quantity}}</p>
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
  export default {
    name: 'CartItem',
    props:{
      cart_item_data:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    mounted() {},
    methods:{
      deleteFromCart(){
        this.$emit('deleteFromCart')
      },
    },
  }
</script>

<style lang="scss" scoped>
  .cart-item{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    margin-bottom: 20px;
    &__img{
      max-width: 250px;
      height: 250px;
    }
  }
</style>