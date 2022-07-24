<template>
  <div id="app">
    <NavBar :route="$route.name"/>
    <router-view/>
    <FooterBar/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import FooterBar from './components/FooterBar';
// import axios from 'axios'; //

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar,
  },
  //
  // async mounted() {
  //   let payload = {
  //     image: "2.jpg",
  //     name: "T-shirt 2111111111",
  //     price: 100111111111111,
  //     article: "Article T2111111111",
  //     available: true,
  //     category: "Female",
  //     quantity: 1
  //   }

  //   await axios.post('http://localhost:3333/api/products/create', payload);
    
  //   axios.get('http://localhost:3333/api/products/all')
  //     .then(res => console.log('DATABASE:', res))
  //     .catch(e => console.log(e));
  // }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  position: relative;
  background-image: url("@/assets/images/background.jpg");
  background-repeat: no-repeat;
  height: 100%;
  background-position: center;
  background-size: cover;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 40px;
  /* padding: 40px 0 40px 0; */
}
</style>
