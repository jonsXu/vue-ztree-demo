

<template>
	<li class="treeItem" :class="liLevelClassVal">
	<span :class="spanClassVal" type="tree-node-switch" @click="openChildren"></span>
	<span v-if="node.openCheck" class="button chk" :class="checkClassVal" type="tree-node-check" @click="checkNode"></span>	
		<a :class="aClassVal">
			<span class="button" :class='iconClass'></span>
			<span class="node_name">{{data.name}}</span>
		</a>
		<ul v-if="data.children" v-show="node.prefix" :class="ulClassVal">
			<tree-node v-for="(item, i) in data.children" :nodeData="item" :nodeObject="item.nodeObject" :key="i" @checkChange="checkChange"></tree-node>
		</ul>

  	</li>
	  <!-- <span v-if="data.openCheck" class="button chk" :class="checkClassVal" type="tree-node-check"></span>  -->
</template>
<script>
	
export default {
  name: 'TreeNode',
  components: {
    
  },
  props:{
		nodeData:{
			type:Object
		},//当前节点的数据对象
		
		nodeObject:{
			type:Object,
			
		},//当前节点的节点对象
		/** node:{
		 * 	treeLevel:0,//当前节点的级别,默认从10为一级节点,也就是根节点组
		 *  nodeIndex:0,//当前节点在当前级别数组中的下标
			nodeNum:0,//当前节点所在级别的数组的长度
			isClicked:false,//当前节点是否被点击
			isChecked:false，//是否被选中
			checkStatu:0,//选中的状态，分为半选1（只有有儿子的情况下才会出现），全选2 不选0，可以用来控制样式
			openCheck:false,//是否开启单选框
			parentnode:null,//当前节点的父级节点
			prefix:false,是否展开
			}*/
		
  },
  computed:{
	//节点位置
	place(){
		let str = ''
		//如果当前节点级别是10，并且当前节点在当前级别中下标为0，并且当前级别的节点数量为1,那么位置为root
		if(this.node.treeLevel==10 && this.node.nodeIndex ==0&&!this.node.nodeNum ==1) {str = "root"}
		//如果当前节点级别是10，并且当前节点在当前级别中下标为0，并且当前级别的节点数量为大于1，那么为roots
		if(this.node.treeLevel==10 && this.node.nodeIndex ==0&&this.node.nodeNum>1){ str = 'roots'} 
		//如果当前节点在当前级别中不在开头，也不在末尾，则位置处于center
		if(this.node.nodeIndex!=0 && this.node.nodeIndex!=this.node.nodeNum-1) {str = 'center'} 
		//如果当前节点不是根级节点，那么只要它不是最后一个节点，他也处于center
		if(this.node.treeLevel!=10&& this.node.nodeIndex!=this.node.nodeNum-1) {str = 'center'} 
		//如果当前节点在当前级别中，不是第一个并且处在
		if( this.node.nodeIndex==this.node.nodeNum-1) {str = 'bottom'} 
		return str
	},
	// 展开/收起
	prefixClass(){
		var str =''
		if(this.node.prefix !=undefined && this.node.prefix == true){
			str=  'open'
		}
		if(this.node.prefix !=undefined && this.node.prefix == false) {
			str =  'close'
		}
		if(this.node.prefix == undefined) {
			str =  'docu'
		}
		return str

	},
	//节点容器样式
	liLevelClassVal(){
		return 'level'+this.node.treeLevel
	},
	//当前节点的前置图标 switch图标
	spanClassVal(){
		let className = `switch button level${this.node.treeLevel} ${this.place}_${this.prefixClass} ${this.pro=='development'?'dev':'pro'}`
		return className
	},
	//a标签样式
	aClassVal(){
		return this.node.clickNode ? "level"+this.node.treeLevel+' curSelectedNode':"level"+this.node.treeLevel;
	},
	ulClassVal(){
		let className = ''
		if(this.data.children.length>0&&this.node.nodeNum!=this.node.nodeIndex+1){
			className = `level${this.node.treeLevel} line`
		} else if(this.data.children.length == 0 ){
			className = `level${this.node.treeLevel}`
		}
		return className
	},
	//iconClass
	iconClass(){
		return `ico_${this.prefixClass} ${this.pro=='development'?'dev':'pro'}`
	},
	//选择框样式
	checkClassVal(){
		let className = ''
		if(this.node.checkStatu==0){
			//没有勾选
			className="checkbox_false_full "
		}else if(this.node.checkStatu==1){
			//半选
			className = 'checkbox_true_part'
		}else if(this.node.checkStatu==2){
			//全选
			className = 'checkbox_true_full'
		}
		return className+`${this.pro=='development'?'dev':'pro'}`
	}
  },
  data(){
	  return {
		  node:{},
		  data:{},
		  pro : process.env.NODE_ENV 
	  }
  },
  created(){
	  //使用浅拷贝，是为了让复制组件数据保持一致
	  this.node = this.nodeObject
	  this.data = this.nodeData 
  },
  methods:{
	  //展开
	  openChildren(){
		  this.node.prefix = !this.node.prefix
		  //this.prefixClass = 'open'
	  },
	  //勾选或者取消勾选
	  checkNode(){
		  //isChecked:false，//是否被选中
			//checkStatu:0,//选中的状态，分为半选1（只有有儿子的情况下才会出现），全选2不选0，可以用来控制样式
		//自身状态切换
		this.node.checkStatu= this.node.checkStatu==0?2:0
		this.node.isChecked = !this.node.isChecked
		this.$emit('checkChange',{node:this.node,nodeData:this.data})
	  },
	  checkChange(param){
		  this.$emit('checkChange',{node:param.node,nodeData:param.nodeData})
	  }
  },
  watch:{
	//   nodeObject: {
	// 	handler(newName, oldName) {
	// 		debugger
	// 		this.node = JSON.parse(JSON.stringify(newName))
	// 	},
	// 	immediate:true,
	// 	deep: true
	// },
	// nodeData: {
	// 	handler(newData, oldData) {
	// 		debugger
	// 		this.data = JSON.parse(JSON.stringify(newData))
	// 	},
	// 	immediate:true,
	// 	deep: true
	// },
  }
}
</script>
