<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <a href="#/">helloworld组件</a>
    <a href="#/work">work组件</a> -->
    <!-- <a href="/">helloworld组件</a>
    <a href="/work">work组件</a> -->
    <!-- <router-link to="/" exact>helloworld组件</router-link>
    <router-link to="/work" active-class="pink" tag="span">work组件</router-link>
    <router-link to="/home">home组件</router-link> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.router-link-active{
  color: red;
  font-weight: bold;
}
.pink{
  color:pink;
  font-weight: bold;
}
.nav{
  background-color: red;
  color: white;
  font-weight: bold;
}
</style>
