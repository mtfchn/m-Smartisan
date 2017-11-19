<template>
	<div class="myhome">
		<div class="my_header">
			<div class="my_header_top">
				用户名：{{usermsg}}
				<button class="logout" @click="logout()">注销</button>
			</div>
			<div class="my_header_bottom">
				<ul>
					<li>全部订单</li>
					<li>待付款</li>
					<li>待收货</li>
					<li>售后</li>
				</ul>
			</div>
		</div>
		<div class="my_center">
			<div class="my_center_top">
				发起售后
			</div>
			<div class="my_center_bottom">
				我的售后
			</div>
		</div>
		<div class="my_center">
			<div class="my_center_top">
				地址管理
			</div>
			<div class="my_center_bottom">
				我的优惠卷
			</div>
		</div>
		<div class="my_center">
			<div class="my_center_top">
				线下门店查询
			</div>
			<div class="my_center_bottom">
				常见问题
			</div>
		</div>		
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import axios from 'axios'
	export default{
		name:'login',
		data(){
			return{
				usermsg:''
			}
		},
		mounted(){
			this.isLogin()
			this.getName()
		},
		methods:{
			isLogin(){
				var that = this
				axios.get('/users/getUser')
				.then(function(res){
					console.log(res)
					if(res.data.userList==null){
						that.$router.push("/my/login")
						return
					}
					
				})
			},
			getName(){
				function getCookie(name) {
				    var cookie = document.cookie;
				    var arr = document.cookie.split('; ');
				    var name_value;
				    for (var i = 0; i < arr.length; i++) {
				        name_value = arr[i].split('=');
				        if (name_value[0] === name) {
				            return name_value[1];
				        }
				    }
				    return null;
				}
				this.usermsg=getCookie('username')
			},
			logout(){
				axios.get('/users/logout')
				.then(function(res){
					console.log(res)
					location.reload()
				})
			},
			
				
				
			
			
		}
	}
</script>

<style scoped>
	.my_header{
		width: 90%;
		height: 10rem;
		background: #FFFFFF;
		margin-left: 5%;
		margin-top: 20px;
		border-radius: 10px;
	}
	.my_header .my_header_top{
		width: 100%;
		height: 6rem;
		line-height: 6rem;
		font-size: 2rem;
		border-bottom: 1px solid #EEEEEE;
		padding-left: 5%;
	}
	.my_header .my_header_bottom li{
		width: 25%;
		float: left;
		line-height: 4rem;
		text-align: center;
	}
	.my_center{
		width: 90%;
		height: 10rem;
		background: #FFFFFF;
		margin-left: 5%;
		margin-top: 20px;
		border-radius: 10px;
	}
	.my_center .my_center_top{
		height: 5rem;
		border-bottom: 1px solid #EEEEEE;
		line-height: 5rem;
		font-size: 2rem;
		padding-left: 5%;
	}
	.my_center .my_center_bottom{
		height: 5rem;
		line-height: 5rem;
		font-size: 2rem;
		padding-left: 5%;
	}
	.logout{
		float: right;
		padding-right: 5%;
		width: 5rem;
		height: 3rem;
		line-height: 3rem;
		background: red;
		border: none;
		border-radius: 10px;
		text-align: center;
		margin-top: 1.5rem;
		margin-right: 5%;
		

	}
</style>