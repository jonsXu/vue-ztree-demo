<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Demo</h3>
    <ul>
      <li><a @click="showTreeDom" target="_blank" rel="noopener">tree</a></li>
      <li><a @click="showEditor" target="_blank" rel="noopener">ueditor</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <div style="height:20px;"></div>
    <tree v-if="showTree" :listData="list" :openCheck="true"></tree>
    <Editor v-if="showEditorDom" :id="editorId" :doType="['plugin','design','insert','edit']"></Editor>
  </div>
</template>

<script>
import Tree from "@/views/vue-ztree.vue"
import Editor from "@/views/ueditor/index.vue"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Tree,
    Editor
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
      pro : process.env.NODE_ENV ,
      editorId:'editorDemo',
      showEditorDom:false
    }
  },
  methods:{
    showTreeDom(){
      this.showTree = !this.showTree
    },
    showEditor(){
      this.showEditorDom = !this.showEditorDom
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  cursor: pointer;
  text-decoration: underline;
}
</style>
