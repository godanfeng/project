<template>
  <div class="pos">
    <hr />
    <br />
    <div class="foot1">
      <router-link to="/introduce">网站介绍</router-link>
      <span>|</span>
      <router-link to="/introduce">联系我们</router-link>
      <span>|</span>
      <router-link to="/introduce">意见反馈</router-link>
      <span>|</span>
      <router-link to="/introduce">友情链接</router-link>
      <span>|</span>
      <router-link to="/introduce">未来开发</router-link>
      <span>|</span>
      <router-link to="/introduce">未来开发</router-link>
      <span>|</span>
      <router-link to="/introduce">未来开发</router-link>
    </div>
    <br />
    <div class="foot"><span>此项目为Vue最初开发作品</span></div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>


<style lang="less" scoped>
.pos{
   bottom: 10px;
}
.foot {
  text-align: center;
}
.foot1 {
  text-align: center;
  span,
  a {
    color: black;
    margin-left: 50px;
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }
}
</style>