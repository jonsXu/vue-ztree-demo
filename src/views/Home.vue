<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Tree from "@/views/vue-ztree.vue"
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Tree
  },
  computed:{
    setClass(){
      return this.pro =="development"?'red':'black'
    }
  },
  data(){
    return {
      list:[
        {name:'张三',children:[{name:"张二炮"},{name:"张da炮"},{name:"张san炮"}]},
        {name:'李三',children:[{name:"李二炮"},{name:"李da炮"},{name:"李san炮",children:[{name:'李三枪'}]}]},
        {name:'王三',children:[{name:"王二炮"},{name:"王da炮"},{name:"王san炮",children:[{name:'王三枪',children:[{name:'王三刀'}]}]}]},
        {name:'徐三',children:[{name:"徐二炮"},{name:"徐da炮"},{name:"徐san炮"}]},
      ],
      showTree:false,
      pro : process.env.NODE_ENV 
    }
  }
}
</script>
<style lang="scss">
.red{
  color:red
}
.blue{
  color:blue
}
</style>
