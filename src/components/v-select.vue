<template>
  <div class="select">
    <p class="title" @click="areOptionsVisible = !areOptionsVisible">selected</p>
    <div class="options"
         v-if="areOptionsVisible"
    >
        <p v-for="option in options"
           :key="option.value"
           @click="selectOptions(option)">
          {{option.name}}
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-select',
  data(){
    return{
      areOptionsVisible: false,
    }
  },
  props:{
    options:{
      type: Array,
      default(){
        return []
      }
    },
    selected:{
      type: String,
      default: ''
    }
  },
  methods:{
    selectOptions(option){
      this.$emit('select', option)
    },
    hideSelect(){
      this.areOptionsVisible = false
    }
  },
  mounted() {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect)
  }
}
</script>

<style lang="scss" scoped>
  .select{
    position: relative;
    margin: 0;
    padding: 0;
    width: 50%;
    cursor: pointer;
    font-size: 28px;
  }
  .select span{
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .options{
    margin: 0 auto;
    width: 100%;
    border: 1px solid #fff;
    //position: absolute;
    //top: 20px;
    //left: 0;
    p{
      margin: 0;
      font-size: 28px;
    }
    p:hover{
      background: #323232;
      width: 100%;
    }
  }
  .title{
    border: 1px solid #fff;
  }
</style>