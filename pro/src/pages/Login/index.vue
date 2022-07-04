<template>
  <div>
    <ul class="bg-bubbles">
      <li v-for="i in 14" :key="i"></li>
      <div class="log">
        <span class="char">请进行登录验证</span>
        <br /><br />
        <span class="char1">账号：</span>
        <input
          v-model="username"
          type="text"
          style="width: 150px; height: 22px; opacity: 0.3; outline: none"
        />
        <br /><br />
        <span class="char1">密码：</span>
        <input
          v-model="password"
          type="password"
          style="width: 150px; height: 22px; opacity: 0.3; outline: none"
        />
        <br /><br />
        <el-button type="success" plain @click="login">登录</el-button>
        <el-button type="success" plain @click="reg">注册</el-button>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const { username, password } = this;
        username &&password &&(await this.$store.dispatch("log", { username, password }));
        if(this.username && this.password) {
          this.$message({ type: "success", message: "登录成功", center: "true" });
          let toPath = this.$route.query.redirect || "home";
          this.$router.push(toPath);
        }else{
          this.$message({ type: "warning", message: "请输入正确的账号密码", center: "true" });
        }
      } catch (error) {
        this.$message({
          type: "error",
          message: "账号或密码错误",
          center: "true",
        });
        console.log(error.message);
      }
    },
    reg() {
      this.$router.push("./reg");
    },
  },
};
</script>
<style lang="less" scoped>
* {
  margin: 0%;
  padding: 0%;
}

.char {
  width: 200px;
  font-size: 28px;
  font-family: "华文行楷";
  color: rgb(237, 235, 235);
}

.char1 {
  font-family: "华文行楷";
  color: rgb(237, 235, 235);
  font-size: 22px;
}

.log {
  position: relative;
  text-align: center;
  // margin: auto;
  margin-top: 20%;
  button {
    color: rgb(72, 203, 39);
    font-family: "华文行楷";
    margin-left: 50px;
    width: 50px;
    height: 30px;
  }
}

.bg-bubbles {
  background: linear-gradient(to bottom right, #50a3a2, #53e3a6);
  position: absolute;
  // 使气泡背景充满整个屏幕；
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // 如果元素内容超出给定的宽度和高度，overflow 属性可以确定是否显示滚动条等行为；
  overflow: hidden;
  li {
    position: absolute;
    // bottom 的设置是为了营造出气泡从页面底部冒出的效果；
    bottom: -160px;
    // 默认的气泡大小；
    width: 40px;
    height: 40px;
    background-color: rgba(19, 200, 25, 0.15);
    list-style: none;
    // 使用自定义动画使气泡渐现、上升和翻滚；
    animation: square 10s infinite;
    transition-timing-function: linear;
    // 分别设置每个气泡不同的位置、大小、透明度和速度，以显得有层次感；
    &:nth-child(1) {
      left: 10%;
    }
    &:nth-child(2) {
      left: 20%;
      width: 90px;
      height: 90px;
      animation-delay: 2s;
      animation-duration: 7s;
    }
    &:nth-child(3) {
      left: 25%;
      animation-delay: 4s;
    }
    &:nth-child(4) {
      left: 40%;
      width: 60px;
      height: 60px;
      animation-duration: 8s;
      background-color: rgba(255, 255, 255, 0.3);
    }
    &:nth-child(5) {
      left: 70%;
    }
    &:nth-child(6) {
      left: 80%;
      width: 120px;
      height: 120px;
      animation-delay: 3s;
      background-color: rgba(255, 255, 255, 0.2);
    }
    &:nth-child(7) {
      left: 32%;
      width: 160px;
      height: 160px;
      animation-delay: 2s;
    }
    &:nth-child(8) {
      left: 55%;
      width: 20px;
      height: 20px;
      animation-delay: 4s;
      animation-duration: 15s;
    }
    &:nth-child(9) {
      left: 25%;
      width: 10px;
      height: 10px;
      animation-delay: 2s;
      animation-duration: 12s;
      background-color: rgba(255, 255, 255, 0.3);
    }
    &:nth-child(10) {
      left: 85%;
      width: 160px;
      height: 160px;
      animation-delay: 5s;
    }
    &:nth-child(11) {
      left: 40%;
      width: 160px;
      height: 160px;
      animation-delay: 5s;
    }
    &:nth-child(12) {
      left: 24%;
      width: 100px;
      height: 100px;
      animation-delay: 3s;
    }
    &:nth-child(12) {
      left: 14%;
      width: 80px;
      height: 80px;
      animation-delay: 1s;
    }
    &:nth-child(13) {
      left: 5%;
      width: 75px;
      height: 75px;
      animation-delay: 3s;
    }
    &:nth-child(14) {
      left: 85%;
      width: 75px;
      height: 75px;
      animation-delay: 1s;
    }
  }
  // 自定义 square 动画；
  @keyframes square {
    0% {
      opacity: 0.5;
      transform: translateY(0px) rotate(45deg);
    }
    25% {
      opacity: 0.75;
      transform: translateY(-400px) rotate(90deg);
    }
    50% {
      opacity: 1;
      transform: translateY(-600px) rotate(135deg);
    }
    100% {
      opacity: 0;
      transform: translateY(-1000px) rotate(180deg);
    }
  }
}
</style>