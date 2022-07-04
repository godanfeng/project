<template>
  <div class="typ">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router
    >
      <el-menu-item index="home" class="pic">网站首页</el-menu-item>
      <el-submenu index="2" class="pic">
        <template slot="title">学习</template>
        <el-menu-item index="study">主要</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">主要</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3" class="pic">
        <template slot="title">童话</template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
        <el-menu-item index="3-3">选项3</el-menu-item>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项1</el-menu-item>
          <el-menu-item index="3-4-2">选项2</el-menu-item>
          <el-menu-item index="3-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="4" class="pic">
        <template slot="title">小说</template>
        <el-menu-item index="4-1">选项1</el-menu-item>
        <el-menu-item index="4-2">选项2</el-menu-item>
        <el-menu-item index="4-3">选项3</el-menu-item>
        <el-submenu index="4-4">
          <template slot="title">选项4</template>
          <el-menu-item index="4-4-1">选项1</el-menu-item>
          <el-menu-item index="4-4-2">选项2</el-menu-item>
          <el-menu-item index="4-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="5" class="pic">
        <template slot="title">笑话</template>
        <el-menu-item index="5-1">选项1</el-menu-item>
        <el-menu-item index="5-2">选项2</el-menu-item>
        <el-menu-item index="5-3">选项3</el-menu-item>
        <el-submenu index="5-4">
          <template slot="title">选项4</template>
          <el-menu-item index="5-4-1">选项1</el-menu-item>
          <el-menu-item index="5-4-2">选项2</el-menu-item>
          <el-menu-item index="5-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="6" class="pic">
        <template slot="title">健康</template>
        <el-menu-item index="5-1">选项1</el-menu-item>
        <el-menu-item index="5-2">选项2</el-menu-item>
        <el-menu-item index="5-3">选项3</el-menu-item>
        <el-submenu index="5-4">
          <template slot="title">选项4</template>
          <el-menu-item index="5-4-1">选项1</el-menu-item>
          <el-menu-item index="5-4-2">选项2</el-menu-item>
          <el-menu-item index="5-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/feedback" class="pic">反馈意见</el-menu-item>
      <!-- <el-avatar icon="el-icon-user-solid"></el-avatar> -->
      <el-menu-item index="" class="pic">
        <el-dropdown @command="handleCommand" style="left: 15px">
          <span class="el-dropdown-link">
            <el-avatar :src=pic>
              <!-- <i class="el-icon-user"></i> -->
            </el-avatar>
          </span>
          <el-dropdown-menu slot="dropdown" style="width: 75px; text-align: center;">
            <el-dropdown-item command="/login">登录</el-dropdown-item>
            <el-dropdown-item command="/set">个人中心</el-dropdown-item>
            <el-dropdown-item command="c">未来开发</el-dropdown-item>
            <el-dropdown-item command="d">未来开发</el-dropdown-item>
            <el-dropdown-item @click.native="out" command='/'>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {removeToken} from '@/utils/token'
import { reqGetUserInfo } from "@/api";
export default {
  name: "TypeNav",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      pic: ''
    };
  },
  methods: {
    out(){
      this.$store.state.user.token = ''
      removeToken()
      this.$store.state.user.userInfo = ''
      this.$router.push('/login')
    },
    async get() {
      const result = await reqGetUserInfo();
      if(this.$store.state.user.token){
        this.pic = result.data.user_pic
      }
      
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleCommand(command) {
      this.$router.push(command)
    },
  },
  mounted(){
    this.get()
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0%;
  padding: 0%;
}

.pic{
  margin-left: 70px;
}

.typ {
  height: 100px;
  width: 1200px;
  margin: 0 auto;

}

.el-menu.el-menu--horizontal {
  width: 1200px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>