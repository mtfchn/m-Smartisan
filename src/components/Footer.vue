<template>
	<div id="footer">
		<ul>	
			<router-link :to="'/'">
				<li>
					<i class="iconfont">&#xe6bc;</i>
					<p>首页</p>
				</li>	
			</router-link>	
			
			<router-link :to="'/category'">
				<li>
					<i class="iconfont">&#xe603;</i>
					<p>分类</p>
				</li>
			</router-link>	
			
			<router-link :to="'/cart'">
				<li>
					<i class="iconfont">&#xe61c;</i>
					<p>购物车</p>
				</li>
			</router-link>	
			
			<router-link :to="'/my'">
				<li>
					<i class="iconfont">&#xe675;</i>
					<p>我的</p>
				</li>
			</router-link>	
		</ul>
	</div>
</template>

<script>
	export default{
		name:'m-footer',
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	#footer{
		width: 100%;
		height: 5rem;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 100;
	}
	#footer ul{
		/*display: flex;
		flex-direction: row;*/
	}
	#footer ul li{
		/*display: inline-block;*/
		float: left;
		width: 25%;
		text-align: center;
		flex: 1;
		padding-top: 1rem;
	}
	#footer ul li .iconfont{
		font-size: 2.2rem;
	}
	#footer ul li p{
		font-size: 1.2rem;
	}
</style>