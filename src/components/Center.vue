<template>
	<div id="center">
		<mt-loadmore :bottomDistance="100" :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">
			<div id="banner">
				<mt-swipe :auto="4000" class="banner_img">
				  <mt-swipe-item v-for="item1 in imgData" :key="item1.src">
				  	<img :src="item1.src"/>
				  </mt-swipe-item>
				</mt-swipe>
				<ul class="list">
					<li>
						<i class="iconfont">&#xe6de;</i>
						<p>坚果pro2</p>
					</li>
					<li>
						<i class="iconfont">&#xe712;</i>
						<p>购买空净</p>
					</li>
					<li>
						<i class="iconfont">&#xe690;</i>
						<p>新品配件</p>
					</li>
					<li>
						<i class="iconfont">&#xe639;</i>
						<p>保险</p>
					</li>
					<li>
						<i class="iconfont">&#xe61f;</i>
						<p>以旧换新</p>
					</li>
				</ul>
			</div>
		
			<div id="hotProduct">
				<h3><span class="hotProduct_l">热门商品</span><i class="iconfont">&#xe686;</i></h3>
				<div class="hotProduct_box">
					<div class="hotProduct_bottom">
						<dl v-for="item2 in hotProductData">
							<router-link :to="{name:'Detail',params:{productid:item2.id}}">
								<dt><img :src="item2.shop_info.ali_image"/></dt>
								<dd>
									<h4>{{item2.shop_info.title}}</h4>
									<p>{{item2.shop_info.sub_title}}</p>
									<span><i class="iconfont">&#xe68a;</i>{{item2.price}}</span>
								</dd>
							</router-link>
						</dl>
					</div>
				</div>
				
			</div>
		</mt-loadmore>
		
		<div id="hotSell">
			<h3><span class="hotSell_l">热销机型</span></h3>
			<div class="hotSell_bottom">
				<mt-swipe :auto="4000" class="hotBanner" :show-indicators="false">
				  <mt-swipe-item v-for="item3 in hotSellData" :key="item3.src">
				  	<router-link :to="{name:'Detail',params:{productid:item3.id}}">
					  	<img :src="item3.shop_info.ali_image"/>
					  	<div><h4>{{item3.shop_info.title}}</h4></div>
					  	<p>{{item3.shop_info.sub_title}}</p>
						<span><i class="iconfont">&#xe68a;</i>{{item3.price}}</span>
					</router-link>
				  </mt-swipe-item>
				</mt-swipe>
			</div>
		</div>
		
		<div id="mountings">
			<h3><span class="mountings_l">净化器及配件</span><i class="iconfont">&#xe686;</i></h3>
			<div class="mountings_bottom">
				<div v-for="item4 in mountingsData">
					<router-link :to="{name:'Detail',params:{productid:item4.id}}">
						<img :src="item4.shop_info.ali_image" alt="" />
						<div><h4>{{item4.shop_info.title}}</h4></div>
					  	<p>{{item4.shop_info.sub_title}}</p>
						<span><i class="iconfont">&#xe68a;</i>{{item4.price}}</span>
					</router-link>
				</div>
				
			</div>
		</div>
		
		
		<div id="imgs" >
			<div class="imgs_box" v-if="imgsData">
				<div class="imgs_l">
					<ul>
						<li><img :src="imgsData[0].src"/></li>
						<li><img :src="imgsData[1].src"/></li>
						<li><img :src="imgsData[2].src"/></li>
					</ul>
				</div>
				<div class="imgs_r"><img :src="imgsData[3].src"/></div>
			</div>			
		</div>
		
		<div id="official">
			<h3><span class="official_l">官方精选</span><i class="iconfont">&#xe686;</i></h3>
			<div class="official_box">
				<div class="official_bottom" >	
				<dl v-for="item5 in officialData">
					<router-link :to="{name:'Detail',params:{productid:item5.id}}">
						<dt><img :src="item5.shop_info.ali_image"/></dt>
						<dd>
							<h4>{{item5.shop_info.sku_mobile_title}}</h4>
							<p>{{item5.shop_info.sub_title}}</p>
							<span><i class="iconfont">&#xe68a;</i>{{item5.price}}</span>
						</dd>
					</router-link>
				</dl>
			</div>
			</div>			
		</div>
		
		<div id="officialAfter">
			<div class="officialAfter_img" v-for="item6 in officialAfterImg">
				<!--<router-link :to="{name:'Detail',params:{productid:item6.id}}">-->
					<img :src="item6.src"/>
				<!--</router-link>-->
			</div>
		</div>
		
		<div id="official">
			<h3><span class="official_l">品牌精选</span><i class="iconfont">&#xe686;</i></h3>
			<div class="official_box">
				<div class="official_bottom" >	
				<dl v-for="item7 in brandData">
					<router-link :to="{name:'Detail',params:{productid:item7.id}}">
						<dt><img :src="item7.shop_info.ali_image"/></dt>
						<dd>
							<h4>{{item7.shop_info.sku_mobile_title}}</h4>
							<p>{{item7.shop_info.sub_title}}</p>
							<span><i class="iconfont">&#xe68a;</i>{{item7.price}}</span>
						</dd>
					</router-link>
				</dl>
			</div>
			</div>			
		</div>
		
		<div id="officialAfter">
			<div class="officialAfter_img lastImg" v-for="item8 in officialAfterImg2">
				<!--<router-link :to="{name:'Detail',params:{productid:item8.id}}">-->
					<img :src="item8.src"/>
				<!--</router-link>-->
			</div>
		</div>
		
	</div>
	
</template>

<script>
	import axios from 'axios'
	export default{
		name:'index',
		data(){
			return{
				imgData:[],
				hotProductData:[],
				hotSellData:[],
				mountingsData:[],
				imgsData:null,
				officialData:[],
				officialAfterImg:[],
				brandData:[],
				officialAfterImg2:[]
			}
		},
		mounted(){
			this.getImgData(),
			this.getHotProduct(),
			this.getHotSell(),
			this.getMountings(),
			this.getOfficial(),
			this.getBrand()
			
		},
		methods:{
			getImgData(){
				var that = this;
				axios.get('/marketing/mobile/index_7f320d26c12a2e049b3f78d89875789a.json')
				  .then(function (response) {
				    console.log(response);
				    that.imgData = response.data.banner.dataList;
				    that.imgsData = response.data.floors[4].dataList;
				    that.officialAfterImg = response.data.floors[6].dataList;
				    that.officialAfterImg2 = response.data.floors[8].dataList;
				    console.log(that.imgsData);
				    that.$refs.loadmore.onTopLoaded();
////
//				    that.$nextTick(function(){
//						var mySwiper = new Swiper('.swiper-container', {
//						      autoplay: {
//						        delay: 2500,
//						        disableOnInteraction: false,
//						      },
//						      loop: true
//						})
//				    })
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
			},
			loadBottom: function() {
				console.log("到达底部");
			},
			loadTop: function() {
				console.log("到达顶部");
				this.getImgData();
			},
			getHotProduct(){
				var that = this;
				axios.get('/product/skus?ids=100035101,100033802,100027314,100035202,100027004,100033913,100022302&with_stock=true&with_spu=true')
				  .then(function (response) {
//				    console.log(response);
				    that.hotProductData = response.data.data.list;
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
			},
			getHotSell(){
				var that = this;
				axios.get('/product/skus?ids=100035101,100027301&with_stock=true&with_spu=true')
				  .then(function (response) {
//				    console.log(response);
				    that.hotSellData = response.data.data.list;
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
			},
			getMountings(){
				var that = this;
				axios.get('/product/skus?ids=100033802&with_stock=true&with_spu=true')
				  .then(function (response) {
//				    console.log(response);
				    that.mountingsData = response.data.data.list;
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
			},
			getOfficial(){
				var that = this;
				axios.get('/product/skus?ids=100036003,100035803,100036601,100027004,100026701,100026601&with_stock=true&with_spu=true')
				  .then(function (response) {
				    console.log(response);
				    that.officialData = response.data.data.list;
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
			},
			getBrand(){
				var that = this;
				axios.get('/product/skus?ids=100032501,100022901,100032402,100022201,100032701,100023102&with_stock=true&with_spu=true')
				  .then(function (response) {
				    console.log(response);
				    that.brandData = response.data.data.list;
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
			}
		}
	}
</script>

<style scoped>
#center{
	width: 100%;
}
#banner{
	width: 100%;
	height: 25rem;
	background: #FFFFFF;
	overflow: hidden;
	margin-top: 5rem;
}
#banner .banner_img{
	width: 90% !important;
	margin-left: 5% !important;
	margin-top: 2rem !important;
	height: 14.5rem !important;
}
#banner img{
	width: 100%;
	
}
#banner .list{
	display: flex;
	flex-direction: row;
	margin-top: 2rem;
	width: 90%;
	margin-left: 5%;
}
#banner .list li{
	display: inline-block;
	flex: 1;
	text-align: center;
}
#banner .list li .iconfont{
	font-size: 26px;
	color: #e0483f;
}
#banner .list li p{
	font-size: 1.2rem;
	padding-top: 0.5rem;
}

#hotProduct{
	width: 100%;
	height: 26rem;
	background: #FFFFFF;
	margin-top: 1rem;
	/*overflow: auto;*/
	font-size: 1.6rem;
}
#hotProduct h3{
	height: 4rem;
	line-height: 4rem;
	border-bottom:1px solid #EEEEEE;
}
#hotProduct h3 .hotProduct_l{
	padding-left: 5%;
	
}
#hotProduct h3 .iconfont{
	float: right;
	padding-right: 5%;
}
#hotProduct .hotProduct_box{
	overflow: auto;
}
#hotProduct .hotProduct_bottom{
	width: 95rem;
	height: 20rem;
	overflow: auto;
	background: #FFFFFF;
	
}
#hotProduct .hotProduct_bottom dl{
	width: 12rem;
	height: 20rem;
	float: left;
	margin-right: 1rem;
}
#hotProduct .hotProduct_bottom dt img{
	width: 100%;
}
#hotProduct .hotProduct_bottom dd{
	margin-top: 0.5rem;
}
#hotProduct .hotProduct_bottom dd h4{
	display: block;
	width: 100%;
	font-size: 1.4rem;
	padding:0.5rem 1rem;
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
#hotProduct .hotProduct_bottom dd p{
	display: block;
	width: 100%;
	font-size: 1.2rem;
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding:0.5rem  1rem;
}
#hotProduct .hotProduct_bottom dd span{
	display: block;
	width: 100%;
	font-size: 1.2rem;
	padding:0.5rem  1rem;
	color: red;
}


#hotSell{
	width: 100%;
	background: #FFFFFF;
	margin-top: 1rem;
	font-size: 1.6rem;
}
#hotSell h3{
	height: 4rem;
	line-height: 4rem;
	border-bottom:1px solid #EEEEEE;
}
#hotSell h3 .hotSell_l{
	padding-left: 5%;
	
}
#hotSell img{
	width: 90%;
	margin-left: 5%;
}
#hotSell .hotBanner{
	width: 100%;
	height: 40rem;
}
#hotSell .hotBanner h4{
	text-align: center;
	font-size: 1.8rem;
	margin: 0.5rem 0;
}
#hotSell .hotBanner p{
	text-align: center;
	color: #CCCCCC;
	margin: 0.5rem 0;
}
#hotSell .hotBanner span{
	display: block;
	text-align: center;
	color: red;
	margin: 0.5rem 0;
	padding-bottom: 1rem;
}


#mountings{
	width: 100%;
	/*height: 500px;*/
	background: #FFFFFF;
	margin-top: 1rem;
	font-size: 1.6rem;
}
#mountings h3{
	height: 4rem;
	line-height: 4rem;
	border-bottom:1px solid #EEEEEE;
}
#mountings h3 .mountings_l{
	padding-left: 5%;
	
}
#mountings h3 .iconfont{
	float: right;
	padding-right: 5%;
}
#mountings img{
	width: 90%;
	margin-left: 5%;
}

#mountings .mountings_bottom h4{
	text-align: center;
	font-size: 1.8rem;
	margin: 0.5rem 0;
}
#mountings .mountings_bottom p{
	text-align: center;
	color: #CCCCCC;
	margin: 0.5rem 0;
}
#mountings .mountings_bottom span{
	display: block;
	text-align: center;
	color: red;
	margin: 0.5rem 0;
}

#imgs{
	width: 100%;
	height: 31.5rem;
	background: #FFFFFF;
	margin-top: 1rem;
}
#imgs .imgs_box{
	width: 90%;
	margin-left: 5%;
}
#imgs .imgs_box .imgs_l{
	width: 50%;
	height: 100%;
	float: left;
}
#imgs .imgs_box .imgs_r{
	width: 50%;
	height: 100%;
	float: left;
}
#imgs .imgs_box img{
	width: 100%;
}


#official{
	width: 100%;
	/*height: 260px;*/
	background: #FFFFFF;
	margin-top: 1rem;
	font-size: 1.6rem;
}
#official h3{
	height: 4rem;
	line-height: 4rem;
	border-bottom:1px solid #EEEEEE;
}
#official h3 .official_l{
	padding-left: 5%;
	
}
#official h3 .iconfont{
	float: right;
	padding-right: 5%;
}
#official #official_box{
	width: 100%;
	background: #FFFFFF;
}
#official .official_bottom{
	width: 90%;
	margin-left: 5%;
	z-index: 10;
	/*display: flex;
	flex-direction: row;
	flex-wrap: wrap;*/
}
#official .official_bottom dl{
	width: 50%;
	background: #FFFFFF;
	display: inline-block;
	/*float: left;*/
	margin-bottom: 1rem;
}
#official .official_bottom dt{
	display: inline-block;
	width: 100%;
}
#official .official_bottom dd{
	width: 100%;
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
#official .official_bottom dd h4{
	width: 100%;
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.4rem;
}
#official .official_bottom dd p{
	width: 100%;
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.2rem;
}
#official .official_bottom dd span{
	width: 100%;
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.2rem;
    color: red;
}
#official .official_bottom img{
	width: 100%;
	font-size: 1.2rem;
	
}

#officialAfter{
	width: 100%;
	margin-top: 10px;
	background: #FFFFFF;
	overflow: hidden;
}
#officialAfter .officialAfter_img{
	width: 90%;
	margin-left: 5%;
	margin-top: 1rem;
}
#officialAfter .lastImg:last-child{
	margin-bottom: 5rem;
}
#officialAfter .officialAfter_img img{
	width: 100%;
}
</style>