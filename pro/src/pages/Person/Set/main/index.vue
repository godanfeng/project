<template>
  <div>
    <div class="ava">
      <el-avatar img :size="75" :src="data.user_pic"></el-avatar>
    </div>
    <br /><br /><br />
    <div>
      <span>{{ data.nickname }}</span>
    </div>
    <br /><br />
    <div class="box">
      <div class="up">
        <el-upload
          class="avatar-uploader"
          accept=".jpeg, .png , .jpg"
          action="#"
          :auto-upload="false"
          :show-file-list="false"
          :drag="true"
          :on-change="getFile"
        >
          <i class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div>上传头像</div>
      </div>
      <br /><br />
      <div class="nick">
        用户名：{{ data.nickname }}&nbsp;&nbsp;
        <el-button type="text" @click="open">点击更改用户名</el-button>
      </div>
      <div class="nick">
        邮箱：{{ data.email }}&nbsp;&nbsp;
        <el-button type="text" @click="email">点击更改邮箱</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { reqGetUserInfo, updateUserInfo,updateAvatar } from "@/api";
export default {
  name: "Set0",
  data() {
    return {
      imageUrl: "",
      img: "111",
      data: {},
      avatar: "",
    };
  },
  components: {},
  methods: {
    async get() {
      const result = await reqGetUserInfo();
      // this.$store.dispatch('getUserInfo')
      // this.data = this.$store.state.user.userInfo;
      this.data = result.data
    },

    async open() {
      this.$prompt("请输入要更改的用户名", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputErrorMessage: "用户名格式不正确",
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的用户名是: " + value,
          });
          this.data.nickname = value;
          const res =updateUserInfo(this.data)
          this.$emit("name", this.data);
        })
        .catch((err) => {
          console.log(err.message);
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },

    async email() {
      this.$prompt("请输入要更改的邮箱号", "请输入正确的邮箱号", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputErrorMessage: "邮箱格式不正确",
      })
        .then(({ value }) => {
          this.data.email = value;
          const res = updateUserInfo(this.data);
        })
        .catch((err) => {
          console.log(err.message);
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },

    getBase64(file) {
      return new Promise(function (resolve, reject) {
        const reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function () {
          imgResult = reader.result;
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.onloadend = function () {
          resolve(imgResult);
        };
      });
    },

    async getFile(file) {
      this.getBase64(file.raw).then((res) => {
        this.data.user_pic = res;
        updateAvatar({avatar: res})
        this.$emit("name", this.data)
      });
    },

    handleAvatarSuccess(res, file) {
      this.data.user_pic = URL.createObjectURL(file.raw);
      console.log(res);
      console.log(this.data);
      const result = updateUserInfo(this.data);
      this.$emit("name", this.data);
      this.get();
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
  mounted() {
    this.get();
  },
  watch: {
    data() {}
  },
};
</script>

<style lang="less" scoped>
.nick {
  font-size: 18px;
  text-align: center;
  button {
    text-decoration: none;
  }
  input {
    width: 100px;
    border: 0px;
    outline: none;
  }
}

.up {
  text-align: center;
}

.box {
  border: black 1px solid;
  height: 700px;
  width: 800px;
  margin: auto;
}

.ava {
  text-align: center;
  height: 25px;
}
.per {
  font-size: 40px;
  text-align: center;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>