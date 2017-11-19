<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
	import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
//	this.getData()
//	this.getDatas()
  },
  methods:{
//	getData(){
//				var that = this;
//				axios.get('/product/skus?ids=100023102,100032201,100031301&with_stock=true&with_spu=true')
//				  .then(function (response) {
//				    console.log(response);
////				    that.moviedata = response.data.data.films;
//				  })
//				  .catch(function (error) {
//				    console.log(error);
//				  });
//			},
//			getDatas(){
//				var that = this;
//				axios.get('/marketing/mobile/index_7f320d26c12a2e049b3f78d89875789a.json')
//				  .then(function (res) {
//				    console.log(res);
////				    that.moviedata = response.data.data.films;
//				  })
//				  .catch(function (error) {
//				    console.log(error);
//				  });
//			},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
