<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header/index'
import Footer from './components/Footer/index'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
