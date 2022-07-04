<template>
  <div>
      <TypeNav/>
      <Swiper0/>
      <ListContainer/>
  </div>
</template>

<script>
import TypeNav from "./TypeNav/index";
import Swiper0 from "./Swiper0/index";
import ListContainer from "./ListContainer/index";

export default {
  name: "Home",
  components: {
    TypeNav,
    Swiper0,
    ListContainer,
  },
};
</script>

<style>


</style>
