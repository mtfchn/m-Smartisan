<template>
	<div id="header">
		<div class="header_box">

			<div class="header_left"><i class="iconfont"  @click="change()">&#xe619;</i></div>
			<div class="header_right"><i class="iconfont">&#xe82e;</i></div>
			<slot class="slotr"></slot>
			<!--<div class="header_right">{{$store.state.message}}</div>-->
		</div>
		
		<transition name="css">
			<ul class="menu" v-show="msg" @click="msg = !msg">
				<router-link :to="{path:'/'}">
					<li class="list1">
			  			<p><i class="iconfont">&#xe61c;</i></p>
			  			<p>锤子科技商城</p>
			  		</li>
				</router-link>
		  		
		  		<li class="list2">
		  			<p><i class="iconfont">&#xe6de;</i></p>
		  			<p>坚果pro2</p>
		  		</li>
		  		<li class="list3">
		  			<p><i class="iconfont">&#xe6de;</i></p>
		  			<p>坚果pro</p>
		  		</li>
		  		<li class="list4">
		  			<p><i class="iconfont">&#xe82e;</i></p>
		  			<p>Smartisan OS</p>
		  		</li>
		  		<li class="list5">
		  			<p><i class="iconfont">&#xe604;</i></p>
		  			<p>应用下载</p>
		  		</li>
		  		<li class="list6">
		  			<p><i class="iconfont">&#xe996;</i></p>
		  			<p>锤子科技论坛</p>
		  		</li>
		  	</ul>
		</transition>
	</div>
</template>

<script>
	export default{
		name:'m-header',
		data(){
			return{
				msg:false,
//				headerTitle:'首页'
			}
		},
		methods:{
			change(){
				
				if(this.msg==false){
					this.msg=true
				}else{
					this.msg=false
				}
			}
		}
	}
</script>

<style scoped>
	
	#header{
		width: 100%;
		height: 5rem;
		background: #000000;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 500;
	}
	#header .header_box{
		z-index: 600;
	}
	.menu{
		width: 100%;
		height: 100%;
		background: #000000;
		position: fixed;
		left: 0;
		top: 5rem;
		/*z-index: 10;*/
	}
	.menu li{
		width: 25%;
		height: 10rem;
		border: 1px solid #EEEEEE;
		float: left;
		padding-top: 20px;
	}
	.menu li p{
		color: #CCCCCC;
		font-size: 1.4rem;
		text-align: center;
		margin-bottom: 10px;
	}
	.menu li .iconfont{
		font-size: 3rem;
	}
	#header .header_left{
		display: inline-block;
		width: 10%;
		height: 5rem;
		line-height: 5rem;
		text-align: center;
		font-size: 2.4rem;
	}
	#header .header_right{
		display: inline-block;
		width: 75%;
		height: 5rem;
		line-height: 5rem;
		text-align: center;
		font-size: 2.8rem;
		color: #FFFFFF;
	}
	#header .iconfont{
		color: #FFFFFF;
	}
	
	.css-enter{
		top: -85%;
		opacity: 0;
	}
	.css-enter-to{
		left: 0;
		opacity: 1;
		transition-duration: 0.6s;
	}
	.css-leave{
		left: 0;
		opacity: 1;
	}
	.css-leave-to{
		top:-85%;
		opacity: 0;
		transition-duration: 0.5s;
	}
	
</style>