<template>
	<div id="cart">
		<div class="cartBox">
			<div class="cartList" v-for="item in cartData">
				<span class="ids" style="display: none;">{{item._id}}</span>
				<div class="inputbox">
					<input type="checkbox" name="" class="cartinput" :value="item" v-model="checkshopcar"/>
				</div>			
				<div class="img_box">
					<img :src="item.ali_image"/>
				</div>
				<div class="msg_box">
					<h4>{{item.name}}</h4>
					<p class="p1">{{item.highlights}}</p>
					<p class="p2"><i class="iconfont">&#xe68a;<span>{{item.price}}</span></i></p>
				</div>
				<div class="del_box">
					
					<button class="delData">删除</button>
				</div>
			
			</div>
		</div>
		
		<div class="sum">
		<div class="sum_input">
			<input type="checkbox" name="" id="all" value="" v-model="ischecked"/>全选
		</div>
		<div class="sum_money">
			合计:{{sumall}}
		</div>
		<div class="sum_submit">
			<button>现在结算</button>
		</div>
			
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import axios from 'axios'
	export default{
		name:'cart',
		data(){
			return{
				cartData:[],
				msg:0,
				checkshopcar:[],
				ischecked:false
			}
		},
		mounted(){
			this.getCartData(),
			this.delCartData()
//			this.allChose()
		},
//		beforeCreate: function () {
//		    if (!this.$session.exists()) {
////		      this.$router.push('/')
//		    }
//		},
		methods: {
			getCartData(){
				var that = this
				axios.get('/users/getCart')
				.then(function(res){
					console.log(res)
					if(res.data.goodsList==null){
						that.$router.push("/my")						
						return
					}
					that.cartData = res.data.goodsList;
				})
			},
			delCartData(){
				setTimeout(function(){
					console.log($(this))
					$('.delData').click(function(){
						console.log($(this))
						axios.post('/users/delProduct', {
					    id: $(this).parent().parent().find('.ids').html()
					  })
					  .then(function (response) {
					    console.log(response);
					    if(response.data.code==1){
	//				    	alert('注册成功')
							location.reload();
					    	Toast({
							  message: '删除成功',
							  iconClass: 'icon icon-success',
							   duration: 5000,
							   position:'center'
							});
					    }
					  })
					  .catch(function (error) {
					    console.log(error);
					  });
				})
				},100)
				
				
			}
//			allChose() {
////				$('#all').change(function() {
////					var checked = $(this).prop('checked');
////					$('#cart .inputbox').find('input').prop('checked', checked);
////					
////				})
////				setInterval(function(){
////					$('#cart .inputbox').find('input').change(function() {
////						console.log('a')
////						var checkedCount = $('#cart .inputbox').find('input:checkbox:checked').length;
////						var allCount = $('#cart .inputbox input').length;
////						$('#all').prop('checked', checkedCount === allCount);
////					
////					})
////				},1000)				
//			},
//			choseMoney(){
//				
//			}
  		},
  		computed:{
  			sumall(){
  				var sum = 0;
  				for(var i =0;i<this.checkshopcar.length;i++){
  					sum += parseInt(this.checkshopcar[i].price) 
  				}
  				return sum
  			}
  		},
  		watch:{
  			ischecked(){
  				console.log(this.ischecked)
  				if(this.ischecked){
  					this.checkshopcar = this.cartData
  				}else{
  					this.checkshopcar = []
  				}
  			}
  		}
  	
	}
</script>

<style>
	#cart{
		margin-top: 5rem;
		font-size: 5rem;
		z-index: 600;
	}
	#cart .cartList:last-child{
		margin-bottom: 10rem;
	}
	#cart .cartList input{
		float: left;
		vertical-align: bottom;
	}
	#cart .cartList{
		width: 100%;
		height: 12rem;
		background: #FFFFFF;
	}
	#cart .cartList .inputbox{
		height: 12rem;
		line-height: 12rem;
		width: 10%;
		float: left;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		padding-left: 10px;
	}
	#cart .cartList .img_box{
		width: 30%;
		height: 12rem;
		float: left;
		background: #FFFFFF;
	}
	#cart .cartList .img_box img{
		width: 100%;
		float: left;
	}
	#cart .cartList .msg_box{
		width: 50%;
		height: 12rem;
		display: inline-block;
		font-size: 1.4rem;
	}
	#cart .cartList .msg_box h4{
		font-size: 1.8rem;
	}
	#cart .cartList .msg_box .p1{
		font-size: 1.4rem;
		color: #CCCCCC;
	}
	#cart .cartList .msg_box .p2{
		font-size: 1.8rem;
		color: red;
	}
	#cart .sum{
		width: 100%;
		height: 5rem;
		background:#ededed;
		position: fixed;
		left: 0;
		bottom: 5rem;
		border-radius: 10px;
	}
	#cart .sum .sum_input{
		width: 20%;
		font-size: 1.6rem;
		height: 5rem;
		line-height: 5rem;
		padding-left: 10px;
		float: left;
	}
	#cart .sum .sum_money{
		width: 40%;
		height: 5rem;
		line-height: 5rem;
		font-size: 1.6rem;
		float: left;
		text-align: center;
	}
	#cart .sum .sum_submit{
		width: 35%;
		height: 5rem;
		line-height: 5rem;
		font-size: 1.4rem;
		text-align: center;
		float: left;
	}
	#cart .sum .sum_submit button{
		width: 10rem;
		height: 3rem;
		background:#668be5;
		border-radius: 10px;
	}
	#cart .del_box{
		width: 10%;
		float: right;
		height: 8rem;
		line-height: 8rem;
		text-align: center;
		font-size: 1.6rem;
	}
	#cart .del_box button{
		border-radius: 5px;
	}
</style>