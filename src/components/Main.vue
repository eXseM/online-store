<template>
    <div class="main">
        <keep-alive>
          <router-view />
        </keep-alive>
<!--      <Vselect-->
<!--      :options="options"-->
<!--      @select="optionSelect"-->
<!--      :selected="selected"-->
<!--      />-->
<!--      <p>=>{{selected}}</p>-->
    </div>
</template>

<script>
// import Vselect from "@/components/v-select";

    export default {
        name: 'Main',
        components:{
          // Vselect
        },
        data(){
          return{
            options:[
              {name: 'Option 1', value: 1},
              {name: 'Option 2', value: 2},
              {name: 'Option 3', value: 3},
              {name: 'Option 4', value: 4},
              {name: 'Option 5', value: 5},
            ],
            selected: 'Select'
          }
        },
        computed:{},
        methods:{
          optionSelect(option){
            this.selected = option.name
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