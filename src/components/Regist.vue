<template>
	<div class="login_box regist_box">
			<div class="inputBox">
				<input type="text" name="" id="username" placeholder="用户名" v-model="username"/>
				<input type="password" name="" id="password" placeholder="密码" v-model="password"/>
				<input type="password2" name="" id="" placeholder="密码密码" />
			</div>
			<p class="check"><input type="radio" />我已阅读并同意遵守法律声明和隐私条款</p>
			<button @click="regist()">注册</button>	
			<p class="check">如果你已经拥有Smartisan ID,则可在此&nbsp;
				<router-link :to="'login'">
					<a>登录</a>
				</router-link>
			</p>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import axios from 'axios'
	export default{
		name:'regist',
		data(){
			return{
				username:'',
				password:''
			}
		},
		methods:{
			regist(){
				var that = this
				axios.post('/users/regist', {
//				    username: document.querySelector('.regist_box #username').value,
//				    password: document.querySelector('.regist_box #password').value
					username:this.username,
					password:this.password
				  })
				  .then(function (response) {
				    console.log(response);
				    if(response.data.code==1){
//				    	alert('注册成功')
				    	Toast({
						  message: '注册成功',
						  iconClass: 'icon icon-success',
						   duration: 5000,
						   position:'center'
						});
						that.$router.push("/my")
				    	location.reload()
				    	return;
				    }
				   Toast({
						  message: response.data.message,
						  iconClass: 'icon icon-success',
						   duration: 5000,
						   position:'center'
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