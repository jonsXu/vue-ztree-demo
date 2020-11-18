<template>
	<div class="ztree_content_wrap">
		<div class="zTreeDemoBackground left">
			<ul class="ztree">
				<TreeNode v-for="(item, i) in dataArray" :key="i" :nodeData="item" :nodeObject="item.nodeObject" @checkChange="checkChange"></TreeNode>
			</ul>
		</div>
	</div>
  
</template>

<script>
// @ is an alias to /src
const pro = process.env.NODE_ENV 

import TreeNode from '../components/treeNode.vue'
import { white } from 'color-name';
import { setInterval } from 'timers';

export default {
  name: 'VueZtree',
  props:{
    listData:{
		type:Array
	},
	openCheck:{
		type:Boolean,
		default:false,
	},
	icon:{
		type:String,
		default:''
	}
  },
  computed:{
  },
  data(){
	  return{
		  treeListToArray:[],//树形结构数据拉平
		  dataArray:[],//加工后的数据
		  date:'',
		  treeListToObject:{}
	  }
  },
  components: {
    TreeNode
  },
  created(){
	this.level = 9
	this.dataArray = JSON.parse(JSON.stringify(this.listData))
	this.initLevel(this.dataArray)
	this.initData(this.dataArray)
  },
  methods:{
	  /**
	   * dataList（数组），需要加工的数据
	   * id，当前数组所属父级的id
	   * parentNodeObject,当前数组所属父级的节点的对象
	   */
	  initData(dataList,id,parentNodeObject){
		  //增加字段
		  dataList = dataList.map((item,i) =>{
			  if(id){
				  item.parentId = id
				  item.id = id+'-'+i
			  } else {
				  item.id = item.treeLevel+"-"+i
			  }
			  
			  item.nodeObject = {
				id:item.id,
				parentId:id,
				treeLevel:item.treeLevel,//当前节点的级别,默认从10为一级节点,也就是根节点组
				nodeIndex:i,//当前节点在当前级别数组中的下标
				nodeNum:dataList.length,//当前节点所在级别的数组的长度
				isClicked:false,//当前节点是否被点击
				//prefix:false,//是否展开，默认不展开
				parentNodeObject:null,//当前节点的父级节点对象
				iconClass:'',
			  }
			  if(this.openCheck){
				  //判断是否开启复选框
				  /****
				   * isChecked:false,//是否被选中
				checkStatu:0,//选中的状态，分为选中1，半选2（只有有儿子的情况下才会出现，）不选0，可以用来控制样式
				openCheck:false,//是否开启复选框
				   */
				  item.nodeObject.isChecked = false
				  item.nodeObject.checkStatu = 0
				  item.nodeObject.openCheck = true
			  }
			  
			  if(parentNodeObject){
				  item.parentNodeObject = parentNodeObject
			  }
			  if(item.children !=undefined){
				  item.nodeObject.prefix = false
			  }
			  this.treeListToArray.push(item)
			  this.treeListToObject[item.id] = item
			  if(item.children){
				  this.initData(item.children,item.id,item.nodeObject)
			  }
			  
		  })
	  },
	  //初始化级别，广度优先的遍历
	  initLevel(dataList){
		  if(dataList.length>0){
			  	let arr= dataList
				let level = 10
				do{
					var m = []
					for(let i=0;i<arr.length;i++){
						let item = arr[i]
						item.treeLevel = level
						if(item.children){
							item.children.map(ite =>{
								m.push(ite)
							})
						}
					}
					arr = []
					arr = m
					level = level+1
				}while(arr.length>0)

		  }
	  },
	  //节点点击过后对其他节点的属性影响
	  checkChange(param){
		  let checkNode = param.node
		  let checkData = param.nodeData
		  //修改自身
		  this.changeTreeDataKeyValue(checkNode,['checkStatu','isChecked'],[checkNode.checkStatu,checkNode.isChecked])

		  //对父级节点的影响
		  /**1.改变上级节点的勾选状态
		   *   上级勾选状态改变为 半选，或者全选，或者取消选中
		   * 判断依据：a,checkStatu = 1,为半选，当上级节点的子节点中 ，不是全部的节点都是checkStatu=2 的时候 ,存在两种情况，所有的都为1，或者有的为1有的为2，或者有的为1有的为0
		   *          b,checkStatu = 0,为不选，当上级节点的子节点除了checkNode以外，全部处于 checkStatu = 0的时候
		   *          c,checkStatu = 2,为全选，当上级节点的所有子节点都处于checkStatu = 2的时候
		   * 综合上诉，所以要在存储中找到上级节点的子节点进行遍历
		   */
		  debugger
		  let fatherNodes = this.getAllFatherNode(checkNode,0)
		  fatherNodes.map(oneF=>{
			  let statuNum1=0
			  let statuNum2=0
			  let statuNum0=0
			  for(let i=0;i<this.treeListToArray.length;i++){
				  let item = this.treeListToArray[i]
				  if(item.nodeObject.parentId==oneF.id){
					  
					  item.nodeObject.checkStatu ==2?statuNum2 =statuNum2+1:''
					  item.nodeObject.checkStatu ==1?statuNum1 =statuNum1+1:''
					  item.nodeObject.checkStatu ==0?statuNum0 =statuNum0+1:''
				  }
			  }
			  //判断为1
			if(statuNum1>0||(statuNum2>0&&statuNum0>0)){
				this.treeListToObject[oneF.id].nodeObject.checkStatu = 1
				this.treeListToObject[oneF.id].nodeObject.isClicked = true
			}
			//判断为2
			if(statuNum1==0&&statuNum0==0&&statuNum2>0){
				this.treeListToObject[oneF.id].nodeObject.checkStatu = 2
				this.treeListToObject[oneF.id].nodeObject.isClicked = true
			}
			//判断为0
			if(statuNum1==0&&statuNum2==0&&statuNum0>0){
				this.treeListToObject[oneF.id].nodeObject.checkStatu = 0
				this.treeListToObject[oneF.id].nodeObject.isClicked = false
			}
		  })
		  //对子节点的影响
		  /***1.子级节点所有过欧萱状态要切换和目标节点保持一致 */
		  let childrenDataList = this.getAllChildNode(checkData,[])
		  for(let i=0;i<childrenDataList.length;i++){
			  let childrenNode = childrenDataList[i].nodeObject
			  this.changeTreeDataKeyValue(childrenNode,['checkStatu','isChecked'],[checkNode.checkStatu,checkNode.isChecked])
		  }
	  },
	  //找到整个树形结构上当前节点上级节点,()
	  /**
	   * node 需要查找的节点
	   * flag,如果是正整数，代表往上找的层数，如果是0，代表找到最顶层 
	   * */
	  getAllFatherNode(node,flag){
		  let fathersNode = []
		  if(node.parentId){
			  if(flag!=0){
				  
				  for(let i=0;i<flag;i++){
					  let findNode= node
					  findNode =  this.getFather(findNode)
					  fathersNode.push(findNode)
				  }
			  }else {
				  let findNode = node
				  while(findNode.parentId){
					  findNode =  this.getFather(findNode)
					  fathersNode.push(findNode)
				  }
			  }

		  }
		  return fathersNode
	  },
	  //找父级节点
	  getFather(node){
		  let parentNode = null
		  if(node.parentId){
			  this.treeListToArray.forEach(item=>{
				  if(item.id==node.parentId){
					  parentNode = item.nodeObject
				  }
			  })
		  }
		  return parentNode
	  },
	  //查找子级节点
	  /**
	   * node 需要查找的节点
	   * */
	  getAllChildNode(node,childrenList){
		  if(node.children){
			  for(let i=0;i<node.children.length;i++){
				  let item = node.children[i]
				  childrenList.push(item)
				  if(item.children){
					childrenList = this.getAllChildNode(item,childrenList)
				  }
			  }
		  }
		  return childrenList
	  },
	  //改变树形结构下的目标node的属性
	  /***
	   * node,目标node
	   * keys,需要修改的属性如 ['name','id']
	   * values，对应的值['1','2']
	   * 
	   */
	  changeTreeDataKeyValue(node,keys,values){
		  if(this.dataArray.length>0){
				  let arr= this.dataArray
				  var m = []
				  let doWhile = true
				do{
					m = []
					for(let i=0;i<arr.length;i++){
						let item = arr[i]
						if(item.nodeObject.id==node.id){
							doWhile = false
							for(let j=0; j<keys.length;j++){
								item.nodeObject[keys[j]] = values[j] //属性修改
							}
							arr=[]
						} else {
							if(item.children){
								item.children.map(ite =>{
									m.push(ite)
								})
							}
							
						}
					}
					arr = m
					
				}while(arr.length>0&&doWhile)

		  }
	  }	
  }
  // .ztree li span.button.pro {line-height:0; margin:0; width:16px; height:16px; display: inline-block; vertical-align:middle;
	// 	border:0 none; cursor: pointer;outline:none;
	// 	background-color:transparent; background-repeat:no-repeat; background-attachment: scroll;
	// 	background-image:url("~public/image/ztree/zTreeStandard.png"); *background-image:url("~public/image/ztree/zTreeStandard.gif")}
}
</script>
<style lang="scss">
	div.ztree_content_wrap {height:380px; }
	div.ztree_content_wrap div.left{float: left;width: 100%;}
	div.zTreeDemoBackground {width:100%;height:500px;text-align:left;}

	.expendIcon {
		background-position: -74px -36px;
		line-height: 0;
	    margin: 0;
	    width: 16px;
	    height: 16px;
	    display: inline-block;
	    vertical-align: middle;
	    border: 0 none;
	    cursor: pointer;
	    outline: none;
	    position: absolute;
	    top:4px;
	    background-color: transparent;
	    background-repeat: no-repeat;
	    background-attachment: scroll;
	    background-image: url("../../public/image/ztree/zTreeStandard.png");
	}

	ul.ztree {border:1px solid #ddd;background: #ffffff;width:100%;height:auto;overflow-x:auto;padding: 10px;box-sizing: border-box}

	.ztree * {padding:0; margin:0; font-size:12px; font-family: Verdana, Arial, Helvetica, AppleGothic, sans-serif}
	.ztree {margin:0; padding:5px; color:#333 ;}
	.ztree li{position: relative;padding:0; margin:0; list-style:none; line-height:18px; text-align:left; white-space:nowrap; outline:0;}
	.ztree li ul{ margin:0; padding:0 0 0 18px}
	.ztree li ul.line{ background:url('../../public/image/ztree/line_conn.gif') 0 0 repeat-y;}

	.ztree li a {padding:1px 3px 0 5px; margin:0; cursor:pointer; height: 18px; color:#333; background-color: transparent;
		text-decoration:none; vertical-align:top;}
	.ztree li a:hover {text-decoration:underline;color:blue;}
	.ztree li a.curSelectedNode {padding-top:0px; background-color:#191d22; color:#fff; height:18px; border:1px #191d22 solid; opacity:0.8;}
	.ztree li a.curSelectedNode_Edit {padding-top:0px; background-color:#FFE6B0; color:black; height:16px; border:1px #FFB951 solid; opacity:0.8;}
	.ztree li a.tmpTargetNode_inner {padding-top:0px; background-color:#316AC5; color:white; height:16px; border:1px #316AC5 solid;
		opacity:0.8; filter:alpha(opacity=80)}
	.ztree li a.tmpTargetNode_prev {}
	.ztree li a.tmpTargetNode_next {}
	.ztree li a input.rename {height:14px; width:80px; padding:0; margin:0;
		font-size:12px; border:1px #7EC4CC solid; *border:0px}
	.ztree li span {line-height:16px; margin-right:2px; top: 3px; display: inline-block;}
	
	.ztree li span.button.dev {line-height:0; margin:0; width:16px; height:16px; display: inline-block; vertical-align:middle;
		border:0 none; cursor: pointer;outline:none;
		background-color:transparent; background-repeat:no-repeat; background-attachment: scroll;
		background-image:url("../../public/image/ztree/zTreeStandard.png"); *background-image:url("../../public/image/ztree/zTreeStandard.gif")}
	.ztree li span.button.chk {width:13px; height:13px; margin:0 3px 0 0; cursor: auto}
	.ztree li span.button.chk.checkbox_false_full {background-position:0 0}
	.ztree li span.button.chk.checkbox_false_full_focus {background-position:0 -14px}
	.ztree li span.button.chk.checkbox_false_part {background-position:0 -28px}
	.ztree li span.button.chk.checkbox_false_part_focus {background-position:0 -42px}
	.ztree li span.button.chk.checkbox_false_disable {background-position:0 -56px}
	.ztree li span.button.chk.checkbox_true_full {background-position:-14px 0}
	.ztree li span.button.chk.checkbox_true_full_focus {background-position:-14px -14px}
	.ztree li span.button.chk.checkbox_true_part {background-position:-14px -28px}
	.ztree li span.button.chk.checkbox_true_part_focus {background-position:-14px -42px}
	.ztree li span.button.chk.checkbox_true_disable {background-position:-14px -56px}
	.ztree li span.button.chk.radio_false_full {background-position:-28px 0}
	.ztree li span.button.chk.radio_false_full_focus {background-position:-28px -14px}
	.ztree li span.button.chk.radio_false_part {background-position:-28px -28px}
	.ztree li span.button.chk.radio_false_part_focus {background-position:-28px -42px}
	.ztree li span.button.chk.radio_false_disable {background-position:-28px -56px}
	.ztree li span.button.chk.radio_true_full {background-position:-42px 0}
	.ztree li span.button.chk.radio_true_full_focus {background-position:-42px -14px}
	.ztree li span.button.chk.radio_true_part {background-position:-42px -28px}
	.ztree li span.button.chk.radio_true_part_focus {background-position:-42px -42px}
	.ztree li span.button.chk.radio_true_disable {background-position:-42px -56px}

	.ztree li span.button.switch {width:18px; height:18px;position: relative;
    top: -2px;}
	.ztree li span.button.root_open{background-position:-92px -54px}
	.ztree li span.button.root_close{background-position:-74px -54px}
	.ztree li span.button.roots_open{background-position:-92px 0}
	.ztree li span.button.roots_close{background-position:-74px 0}
	.ztree li span.button.center_open{background-position:-92px -18px}
	.ztree li span.button.center_close{background-position:-74px -18px}
	.ztree li span.button.bottom_open{background-position:-92px -36px}
	.ztree li span.button.bottom_close{background-position:-74px -36px}
	.ztree li span.button.noline_open{background-position:-92px -72px}
	.ztree li span.button.noline_close{background-position:-74px -72px}
	.ztree li span.button.root_docu{ background:none;}
	.ztree li span.button.roots_docu{background-position:-56px 0}
	.ztree li span.button.center_docu{background-position:-56px -18px}
	.ztree li span.button.bottom_docu{background-position:-56px -36px}
	.ztree li span.button.noline_docu{ background:none;}

	.ztree li span.button.ico_open{margin-right:2px; background-position:-110px -16px; vertical-align:top; *vertical-align:middle}
	.ztree li span.button.ico_close{margin-right:2px; background-position:-110px 0; vertical-align:top; *vertical-align:middle}
	.ztree li span.button.ico_docu{margin-right:2px; background-position:-110px -32px; vertical-align:top; *vertical-align:middle}
	.ztree li span.button.edit {margin-right:2px; background-position:-110px -48px; vertical-align:top; *vertical-align:middle}
	.ztree li span.button.remove {margin-right:2px; background-position:-110px -64px; vertical-align:top; *vertical-align:middle}

	/*.ztree li span.button.ico_loading{margin-right:2px; background:url('~public/image/ztree/loading.gif') no-repeat scroll 0 0 transparent; 
	            vertical-align:top; *vertical-align:middle}*/

	ul.tmpTargetzTree {background-color:#FFE6B0; opacity:0.8; filter:alpha(opacity=80)}

	span.tmpzTreeMove_arrow {width:16px; height:16px; display: inline-block; padding:0; margin:2px 0 0 1px; border:0 none; position:absolute;
		background-color:white; background-repeat:no-repeat; background-attachment: scroll;
		background-position:-110px -80px; background-image:url("../../public/image/ztree/zTreeStandard.png"); *background-image:url("../../public/image/ztree/zTreeStandard.gif")}

	ul.ztree.zTreeDragUL {margin:0; padding:0; position:absolute; width:auto; height:auto;overflow:hidden; 
	             background-color:#cfcfcf; border:1px #00B83F dotted; opacity:0.8; filter:alpha(opacity=80)}

	.zTreeMask {z-index:10000; background-color:#cfcfcf; opacity:0.0; filter:alpha(opacity=0); position:absolute}

	.loadSyncNode {
		width: 16px;
        height: 16px;
        position: relative;
        display: inline-block;
		background-image:url("data:image/gif;base64,R0lGODlhEAAQAMQAAP///+7u7t3d3bu7u6qqqpmZmYiIiHd3d2ZmZlVVVURERDMzMyIiIhEREQARAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAQACwAAAAAEAAQAAAFdyAkQgGJJOWoQgIjBM8jkKsoPEzgyMGsCjPDw7ADpkQBxRDmSCRetpRA6Rj4kFBkgLC4IlUGhbNQIwXOYYWCXDufzYPDMaoKGBoKb886OjAKdgZAAgQkfCwzAgsDBAUCgl8jAQkHEAVkAoA1AgczlyIDczUDA2UhACH5BAUHABAALAAAAAAPABAAAAVjICSO0IGIATkqIiMKDaGKC8Q49jPMYsE0hQdrlABCGgvT45FKiRKQhWA0mPKGPAgBcTjsspBCAoH4gl+FmXNEUEBVAYHToJAVZK/XWoQQDAgBZioHaX8igigFKYYQVlkCjiMhACH5BAUHABAALAAAAAAQAA8AAAVgICSOUGGQqIiIChMESyo6CdQGdRqUENESI8FAdFgAFwqDISYwPB4CVSMnEhSej+FogNhtHyfRQFmIol5owmEta/fcKITB6y4choMBmk7yGgSAEAJ8JAVDgQFmKUCCZnwhACH5BAUHABAALAAAAAAQABAAAAViICSOYkGe4hFAiSImAwotB+si6Co2QxvjAYHIgBAqDoWCK2Bq6A40iA4yYMggNZKwGFgVCAQZotFwwJIF4QnxaC9IsZNgLtAJDKbraJCGzPVSIgEDXVNXA0JdgH6ChoCKKCEAIfkEBQcAEAAsAAAAABAADgAABUkgJI7QcZComIjPw6bs2kINLB5uW9Bo0gyQx8LkKgVHiccKVdyRlqjFSAApOKOtR810StVeU9RAmLqOxi0qRG3LptikAVQEh4UAACH5BAUHABAALAAAAAAQABAAAAVxICSO0DCQKBQQonGIh5AGB2sYkMHIqYAIN0EDRxoQZIaC6bAoMRSiwMAwCIwCggRkwRMJWKSAomBVCc5lUiGRUBjO6FSBwWggwijBooDCdiFfIlBRAlYBZQ0PWRANaSkED1oQYHgjDA8nM3kPfCmejiEAIfkEBQcAEAAsAAAAABAAEAAABWAgJI6QIJCoOIhFwabsSbiFAotGMEMKgZoB3cBUQIgURpFgmEI0EqjACYXwiYJBGAGBgGIDWsVicbiNEgSsGbKCIMCwA4IBCRgXt8bDACkvYQF6U1OADg8mDlaACQtwJCEAIfkEBQcAEAAsAAABABAADwAABV4gJEKCOAwiMa4Q2qIDwq4wiriBmItCCREHUsIwCgh2q8MiyEKODK7ZbHCoqqSjWGKI1d2kRp+RAWGyHg+DQUEmKliGx4HBKECIMwG61AgssAQPKA19EAxRKz4QCVIhACH5BAUHABAALAAAAAAQABAAAAVjICSOUBCQqHhCgiAOKyqcLVvEZOC2geGiK5NpQBAZCilgAYFMogo/J0lgqEpHgoO2+GIMUL6p4vFojhQNg8rxWLgYBQJCASkwEKLC17hYFJtRIwwBfRAJDk4ObwsidEkrWkkhACH5BAUHABAALAAAAQAQAA8AAAVcICSOUGAGAqmKpjis6vmuqSrUxQyPhDEEtpUOgmgYETCCcrB4OBWwQsGHEhQatVFhB/mNAojFVsQgBhgKpSHRTRxEhGwhoRg0CCXYAkKHHPZCZRAKUERZMAYGMCEAIfkEBQcAEAAsAAABABAADwAABV0gJI4kFJToGAilwKLCST6PUcrB8A70844CXenwILRkIoYyBRk4BQlHo3FIOQmvAEGBMpYSop/IgPBCFpCqIuEsIESHgkgoJxwQAjSzwb1DClwwgQhgAVVMIgVyKCEAIfkECQcAEAAsAAAAABAAEAAABWQgJI5kSQ6NYK7Dw6xr8hCw+ELC85hCIAq3Am0U6JUKjkHJNzIsFAqDqShQHRhY6bKqgvgGCZOSFDhAUiWCYQwJSxGHKqGAE/5EqIHBjOgyRQELCBB7EAQHfySDhGYQdDWGQyUhADs=")
	}
</style>
