<template>
  <div class="cart-item">
    <img :src=" require('../assets/' + cart_item_data.image )" alt="" class="cart-item__img">
    <div class="cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="cart-item__quantity">
      <div class="quantity">
        <div @click="decrementItem" class="quantity__btn-min">&#10134;</div>
          {{cart_item_data.quantity}}
        <div @click="incrementItem" class="quantity__btn-plus">&#10133;</div>
      </div>
    </div>
    <button @click="deleteFromCart" class="cart-item__delete-btn">Delete</button>
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
      decrementItem(){
        this.$emit('decrement')
      },
      incrementItem(){
        this.$emit('increment')
      }
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
    &__delete-btn{
      width: 150px;
      height: 30px;
      border: none;
      outline: none;
      appearance: none;
      border-radius: 8px;
      background: linear-gradient(35deg, #323232 10%, #2DCE89 , #323232);
      margin-right: 15px;
      color: #fff;
      font-size: 16px;
      font-family: 'Poppins', sans-serif;
      cursor: pointer;
      transition: .2s ease-in-out;
      &:hover{
        box-shadow: 0 0 5px 5px #2DCE89;
      }
    }
    &__quantity{
      width: 70px;
    }
  }
  .quantity{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;

    &__btn-plus{
      padding: 10px;
      background: snow;
      border: 1px solid #323232;
      margin-left: 10px;
      border-bottom-right-radius: 16px;
      border-top-right-radius: 16px;
    }
    &__btn-min{
      background: snow;
      border: 1px solid #323232;
      padding: 10px;
      margin-right: 10px;
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
    }
  }

</style>