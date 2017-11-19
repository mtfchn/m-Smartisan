<template>
	<div id="category">
		<div class="search_box">
			<input type="text" v-model="condition" class="search" placeholder="搜索"/>
			<ul v-for="item in $store.state.data" v-if="item.shop_info.title.indexOf(condition) != -1">
				<router-link :to="{name:'Detail',params:{productid:item.id}}">
					<li>{{item.shop_info.title}}</li>
				</router-link>			
			</ul>
		</div>		
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:'category',
		data(){
			return{
				condition:'',
				searchData:[]
			}
		},
		mounted(){
			this.getSearch()
		},
		methods:{
			getSearch(){
				var that = this;
				axios.get('/product/skus?ids=100035101,100033802,100027314,100035202,100027004,100033913,100022302,100035101,100027301,100033802,100036003,100035803,100036601,100027004,100026701,100026601,100032501,100022901,100032402,100022201,100032701,100023102&with_stock=true&with_spu=true')
				  .then(function (response) {
				    console.log(response);
				    that.searchData = response.data.data.list;
				    that.$store.dispatch("setData",response.data.data.list)
				    console.log(that.$store.state.data)
				  })
				  .catch(function (error) {
				    console.log(error);
				});
			}
		}
	}
</script>

<style scoped>
	#category{
		margin-top: 5rem;
	}
	.search_box{
		margin-top: 6rem;
		width: 90%;
		margin-left: 5%;
	}
	.search{
		width: 100%;
		height: 3rem;
		border: none;
		padding-left: 20px;
	}
	button{
		width: 20%;
		height: 3rem;
		border: none;
	}
	li{
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		margin-top: 1rem;
		text-align: center;
		background: #FFFFFF;
	}
</style>