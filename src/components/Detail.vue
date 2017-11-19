<template>
	<div id="detail">
		<m-header>
			<router-link :to="{path:'/'}">
				<button id="btn">返回</button>
			</router-link>
		</m-header>
		<div class="detail_header">
			<ul>
				<li>商品</li>
				<li>详情</li>
				<li>参数</li>
				<li>推荐</li>
			</ul>
		</div>
		<div v-if="detailProduct" class="detail_bottom">
			<img :src="detailProduct[0].shop_info.ali_image"/>
			<div class="detail_msg">
				<h2>商品信息</h2>
				<div class="detail_msg_bottom">
					<h1>{{detailProduct[0].spu.name}}</h1>
					<p>{{detailProduct[0].spu.shop_info.highlights}}</p>
					<span><i class="iconfont">&#xe68a;</i>{{detailProduct[0].price}}</span>
				</div>
			</div>
			
		</div>
		<div class="detail_footer">
			<ul>
				<li @click="addCart()">加入购物车</li>
				<li>现在购买</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import axios from 'axios'
	export default{
		name:'detail',
		data(){
			return{
				detailProduct:null,
			}			
		},
		mounted(){
			this.getDetailProduct()
		},
		methods:{
			getDetailProduct(){
				var that = this;
				axios.get(`/product/skus?ids=${this.$route.params.productid}&with_stock=true&with_spu=true`)
				.then(function(res){
					console.log(res)
					that.detailProduct = res.data.data.list;
				})
			},
			addCart(){
				axios.post('/users/createProduct', {
				    ali_image: this.detailProduct[0].shop_info.ali_image,
				    name: this.detailProduct[0].spu.name,
				    highlights:this.detailProduct[0].spu.shop_info.highlights,
				    price:this.detailProduct[0].price
				  })
				  .then(function (response) {
				    console.log(response);
				    if(response.data.code==1){
//				    	alert('注册成功')
				    	Toast({
						  message: '添加成功',
						  iconClass: 'icon icon-success',
						   duration: 5000,
						   position:'center'
						});
				    }
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
			}
		}
	}
</script>

<style scoped>
	#detail{
		margin-top: 5rem;
	}
	#detail .detail_header{
		list-style: none;
		width: 100%;
		background: #f2f2f2;
		height: 5rem;
		line-height: 5rem;
		overflow: hidden;
		position: fixed;
		top: 5rem;
		left: 0;
	}
	#detail .detail_header ul{
		width: 90%;
		margin-left: 5%;
		margin-top: 1rem;
		height: 5rem;
	}
	#detail .detail_header li{
		float: left;
		width: 25%;
		height: 3rem;
		line-height: 3rem;
		text-align: center;
		border: 1px solid #999999;
		font-size: 1.4rem;
	}
	#detail .detail_bottom{
		margin-top: 10rem;
	}
	#detail .detail_bottom img{
		width: 100%;
		background: #FFFFFF;
	}
	#detail .detail_bottom .detail_msg{
		width: 100%;
		background: #FFFFFF;
		margin-top: 1rem;
	}
	#detail .detail_bottom .detail_msg h2{
		font-size: 2rem;
		padding-left: 5%;
		height: 3rem;
		line-height: 3rem;
		border-bottom: 1px solid #EEEEEE;
	}
	#detail .detail_bottom .detail_msg .detail_msg_bottom h1{
		padding-left: 5%;
		font-size: 2.2rem;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	#detail .detail_bottom .detail_msg .detail_msg_bottom p{
		padding-left: 5%;
		font-size: 1.6rem;
		margin-top: 10px;
		margin-bottom: 10px;
		color: #bfbfbf;
	}
	#detail .detail_bottom .detail_msg .detail_msg_bottom span{
		padding-left: 5%;
		font-size: 2rem;
		margin-top: 10px;
		padding-bottom: 20px;
		color: red;
		display: block;
	}
	#detail .detail_footer{
		width: 100%;
		height: 5rem;
		background: #FFFFFF;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	#detail .detail_footer ul li{
		width: 35%;
		float: left;
		margin-left: 10%;
		text-align: center;
		height: 3rem;
		line-height: 3rem;
		margin-top: 1rem;
		border: 1px solid #EEEEEE;
		font-size: 1.4rem;
		font-weight: bold;
	}
	#btn{
		display: inline-block;
		width: 12%;
		height: 2rem;
		line-height: 2rem;
		text-align: center;
		margin-top: 1rem;
		border: none;
		border-radius: 10px;
		background: #CCCCCC;
		color: #FFFFFF;
		font-size: 1.2rem;
	}
</style>