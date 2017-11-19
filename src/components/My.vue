<template>
	<div id="my">
		<router-view></router-view>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import axios from 'axios'
	export default{
		name:'my',
		data(){
			return{
				
			}
		},
		mounted(){
//			this.isLogin()
		},
		methods:{
		}
	}
</script>

<style>
	#my{
		width: 100%;
		height: 100%;
		background: #EEEEEE;
		z-index: 90;
		position: fixed;
		left: 0;
		top: 5rem;
	}
	
</style>