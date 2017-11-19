<template>
	<div class="login_box login">
		<div class="inputBox">
			<input type="text" name="" id="username" placeholder="用户名" v-model="username"/>
			<input type="password" name="" id="password" placeholder="密码" v-model="password" />
		</div>
		<p class="check"><input type="radio" />自动登录
			<router-link :to="'regist'">
				<span>注册</span>
			</router-link>
			
		</p>
		<button @click="login()">登录</button>			
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import axios from 'axios'
	export default{
		name:'login',
		data(){
			return{
				username:'',
				password:''
			}
		},
		mounted(){
			
		},
		methods:{
			login(){
				var that = this
				axios.post('/users/login', {
//				    username: document.querySelector('.login #username').value,
//				    password: document.querySelector('.login #password').value
					username:this.username,
					password:this.password
				  })
				  .then(function (response) {
				    console.log(response);
				    if(response.data.code==1){
						that.$router.push("/")
				    	document.cookie= 'username='+ document.querySelector('.login #username').value
				    	return
				    }
					Toast({
						  message: response.data.message,
						  iconClass: 'icon icon-success',
						   duration: 5000,
						   position:'top'
					});
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
			}
			
		}
	}
</script>

<style scoped>
	 .login_box{
		width: 90%;
		margin-left: 5%;
	}
	 .login_box .inputBox{
		margin-top: 2rem;
	}
	 .login_box .inputBox input{
		width: 100%;
		height: 4rem;
		background: #FFFFFF;
		border: 1px solid #EEEEEE;
		padding-left: 5%;
		border-radius: 5px;
		font-size: 1.6rem;
	}
	 .login_box .check{
		margin-top: 1rem;
		font-size: 1.6rem;
		padding-left: 5%;
		color: #999999;
	}
	 .login_box span{
		float: right;
		padding-right: 5%;
		color: #999999;
	}
	 .login_box button{
		width: 100%;
		height: 5rem;
		margin-top: 2rem;
		border: none;
		background: #6086e3;
		border-radius: 10px;
		font-size: 1.6rem;
		color: #FFFFFF;
		
	}
	
</style>