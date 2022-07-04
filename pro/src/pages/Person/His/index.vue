<template>
  <div>
    <el-container>
      <el-header>未来开发</el-header>
      <el-container>
        <el-aside width="200px">
          <div>
            <div class="demo-type">
              <div><el-avatar :size="75" :src="data.user_pic"></el-avatar></div>
              <br>
              <span>{{data.nickname}}</span>
              <br><br><br>
              <el-menu
                default-active="/his"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                router
              >
                <el-menu-item index="/his">
                  <i class="el-icon-menu"></i>
                  <span slot="title">未来开发</span>
                </el-menu-item>
                <el-menu-item index="/col">
                  <i class="el-icon-menu"></i>
                  <span slot="title">个人收藏</span>
                </el-menu-item>
                <el-menu-item index="/ful">
                  <i class="el-icon-menu"></i>
                  <span slot="title">未来开发</span>
                </el-menu-item>
                <el-menu-item index="/Set">
                  <i class="el-icon-setting"></i>
                  <span slot="title">账号设置</span>
                </el-menu-item>
              </el-menu>
            </div>
          </div>
        </el-aside>
        <el-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import His0 from "./main/index";
import {reqGetUserInfo} from "@/api"
export default {
  name: "His",
  data() {
    return {
      img: '',
      data: {}
    };
  },
  components: {
    His0,
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    async get() {
      const result = await reqGetUserInfo();
      this.data = result.data
    },
  },
  mounted(){
    this.get()
  }
};
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  // background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 199px;
  min-height: 500px;
}
</style>