<template>
  <div id="app">
	   <m-header></m-header>
	   <router-view></router-view>
	   
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body,h1,h2,h3,h4,h5,h6,p,a,img,input,ul,li,ol,dl,dt,dd,figure,figcaption{ padding:0; margin:0}
img{ display:block; border:0;}
input{ outline:none}
ul,ol{ list-style:none;}
body{ font-size:0.14rem; font-family:"微软雅黑"; color:#000;}
a{ text-decoration:none; color:#909090;}
header,footer,section,figure,figcaption,main,nav,aside,article{ display:block;}
*{ box-sizing:border-box;}
html,body{
	height:100%;
	background: #eee;
}
@font-face {
	  font-family: 'iconfont';
	  src: url('../static/font/iconfont.eot');
	  src: url('../static/font/iconfont.eot?#iefix') format('embedded-opentype'),
	  url('../static/font/iconfont.woff') format('woff'),
	  url('../static/font/iconfont.ttf') format('truetype'),
	  url('../static/font/iconfont.svg#iconfont') format('svg');
	}
	.iconfont{
	  font-family:"iconfont" !important;
	  font-style:normal;
	  -webkit-font-smoothing: antialiased;
	  -webkit-text-stroke-width: 0.2px;
	  -moz-osx-font-smoothing: grayscale;
	}
#app {
  width: 100%;
  height: 100%;
  /*display: flex;
  flex-direction: column;*/
}
#box{
	/*flex: 1;
	overflow: auto;*/
}
</style>
