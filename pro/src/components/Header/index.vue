<template>
  <div>
    <div class="top1_main">
      <span class="dl"
        >您好，欢迎光临本网站！>
        <router-link to="/login"> 登录</router-link>
        <router-link to="/reg"> 注册</router-link>
      </span>
      <span class="yh_zx">
        <router-link to="/home">首页</router-link>
        <router-link to="/set">个人中心</router-link>
        <router-link to="/introduce">帮助中心</router-link>
        <router-link to="/introduce">联系方式</router-link>
      </span>
    </div>
    <div class="top2">
      <div class="logo">
        <img src="./img/logo.png" alt="zz" />
      </div>
      <div class="search">
        <input type="text" @focus="chan0" @blur="chan1" placeholder="请输入你想看的书籍" v-model="val" size="25" />
        <el-button type="primary" icon="el-icon-search" @click="enter"></el-button>
        <div v-show="flag" class="box" style="display: none">
          <div ref="cs" @click="on(item.id)" v-for="item in sea" :key="item.id" style="cursor : pointer;">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from "lodash";
import { search } from "@/api";

export default {
  name: "Header",
  data() {
    return {
      val: "",
      sea: [],
      res: [],
      flag: false,
      id: ''
    };
  },
  methods: {
    enter(){
      this.sea.forEach(element => {
        if(element.title == this.val){
          this.id = element.id
        }
      });
      this.$router.push({path: '/Xdetail', query:{id:this.id}})
    },

    on(id){
      this.sea.forEach(element => {
        if(element.id == id){
          this.val = element.title
        }
      });
    },
    chan0(){
        this.flag = true
    },
    chan1(){
        setTimeout(()=>{
          this.flag = false
        },100)
    },
    change: debounce(function () {
      if (this.val) {
        search(this.val).then((value) => {
          this.sea = value.data
          console.log(this.sea)
        });
      }
    }, 500),
  },
  mounted(){
  },
  watch:{
    val(){
      this.change()
    }
  }
};
</script>

<style lang="less" scoped>
.box{
  width: 180px;
  height: 150px;
  background: white;
  border: 1px solid grey;
  z-index: 10;
  position: relative;
  div{
    background: rgb(232, 229, 229);
  }
}

.top1_main {
  height: 29px;
  line-height: 29px;
  width: 100%;
  margin: 0 auto;
  background-color: rgb(236, 234, 234);
}
.dl {
  float: left;
  margin-left: 18%;
}
.dl a {
  color: #accb07;
}
.yh_zx {
  float: right;
  margin-right: 20%;
  a {
    text-decoration: none;
    color: black;
  }
}
.yh_zx a {
  margin: 0 10px;
}
.top2 {
  height: 120px;
  /* background-color: #accb07; */
  position: relative;
}
.logo {
  position: absolute;
  margin-left: 20%;
  top: 15px;
}
.search {
  position: absolute;
  margin-left: 65%;
  top: 50px;
  input {
    height: 30px;
    border: 1px solid rgb(91, 226, 42);
    outline: none;
  }
  button {
    margin-left: 2px;
    height: 38px;
    background-color: rgb(91, 226, 42);
    width: 75px;
  }
}
</style>