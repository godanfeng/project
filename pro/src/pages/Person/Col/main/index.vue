<template>
  <div>
    <div v-for="item in col" :key="item.id"  class="pic">
      <router-link :to="{ path: '/Xdetail', query: { id: item.id } }">
        <p><img :src="item.img" alt="" /></p>
        <span>{{ item.title }}</span>
    </router-link>
    </div>
    
  </div>
</template>

<script>
import { getCollect } from "@/api";

export default {
  name: "Col0",
  data() {
    return {
      col: [],
    };
  },
  methods: {
    async getCol() {
      const res = await getCollect(this.$store.state.user.userInfo.id);
      this.col = res.data;
    },
  },
  mounted() {
    this.$store.dispatch("getUserInfo").then((value) => {
      this.getCol();
    });
  },
};
</script>

<style lang="less" scoped>
.pic {
  // display: inline-block;
  float: left;
  img {
    margin: 25px;
    width: 180px;
    height: 230px;
  }
}
</style>