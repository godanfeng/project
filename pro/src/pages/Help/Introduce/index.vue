<template>
  <div>
    <div class="top">
      网站介绍
      <hr>
    </div>

    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
      <el-radio-button label="top">top</el-radio-button>
      <el-radio-button label="right">right</el-radio-button>
      <el-radio-button label="bottom">bottom</el-radio-button>
      <el-radio-button label="left">left</el-radio-button>
    </el-radio-group>
    <el-tabs :tab-position="tabPosition" style="height: 600px">
      <el-tab-pane label="网站介绍">
        <br>
        <span>此网站采用了前端框架vue.js开发，参考了部分网上开源码并采用了element-ui共同开发。</span>
        <br/><br/>
        <span>后端采用了nodejs开发，使用数据库为Mysql。</span>
      </el-tab-pane>

      <el-tab-pane label="联系我们">
        <br/>
        <span>手机号码：18981136691</span>
        <br/><br/>
        <span>qq邮箱：1121616159@qq.com</span>
      </el-tab-pane>

      <el-tab-pane label="意见反馈">意见反馈</el-tab-pane>

      <el-tab-pane label="友情链接">
        <br>
        <span>vue中文官网：</span>
        <a href="https://cn.vuejs.org/">https://cn.vuejs.org/</a>
        <br><br>
        <span>Element-ui：</span>
        <a href="https://element.eleme.io/#/zh-CN">https://element.eleme.io/#/zh-CN</a>
        <br><br>


      </el-tab-pane>

      <el-tab-pane label="未来开发">未来开发</el-tab-pane>
      <el-tab-pane label="未来开发">未来开发</el-tab-pane>
      <el-tab-pane label="未来开发">未来开发</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Introduce",
  data() {
    return {
      tabPosition: "left",
    };
  },
};
</script>

<style>
.top{
  font-size: 40px;
  text-align: center;
}
</style>