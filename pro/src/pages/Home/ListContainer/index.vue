<template>
  <div>
    <div id="mainNew">
      <div class="fl small-left" v-for="item in art.slice(0,6)" :key="item.id" style="margin:15px;">
        <div class="fl content_left"></div>
        <div class="fl content_right">
          <router-link to="/study"><h4>{{item.title}}</h4></router-link>
          <p>{{item.content}}</p>
        </div>
        <div class="cl"></div>
      </div>
      <p class="cl"></p>
    </div>
    <div class="line" style="margin: 0 auto"></div>
    <div class="ad" style="margin: 0 auto">
      <h4 v-if="art[6]">
        {{art[6].title}}
      </h4>
      <p v-if="art[6]">
        {{art[6].content}}
      </p>
      <a href="#"><img class="image1" src="./img/content_message.jpg" /></a>
    </div>
    <div class="line" style="margin: 0 auto">
      <h4>童话</h4>
    </div>
    <div id="SecondNew">
      <div class="fl newBox small-left" v-for="item in view.slice(0,4)" :key="item.id">
        <img :src="item.img" style="width: 247px;height: 310px;"/>
        <h4>{{item.title}}</h4>
        <p>{{item.content}}</p>
      </div>
    </div>
    <div class="line" style="margin: 0 auto"></div>
    <div class="ad" style="margin: 0 auto">
      <h4 v-if="art[7]">
        {{art[7].title}}
      </h4>
      <p v-if="art[7]">
        {{art[7].content}}
      </p>
      <a href="#"
        ><img class="image2" src="./img/content_message.jpg"
      /></a>
    </div>
    <div class="line" style="margin: 0 auto">
      <h4>健康</h4>
      <h4 class="h4_content">小说</h4>
    </div>
    <div class="content_bottom">
      <div class="bottom_left fl">
        <div class="fl small-left" v-for="item in view.slice(4,6)" :key="item.id">
          <img :src="item.img" style="width:340px; height:255px;"/>
          <h4 class="title">{{item.title}}</h4>
          <p>{{item.content}}</p>
          <h4 class="foot">Read more</h4>
        </div>
        <div class="cl"></div>
      </div>
      
      <div class="bottom_right fl">
        <div class="bottom_right_content" v-for="item in view.slice(6,9)" :key="item.id" style="margin: 22px;">
          <div class="mainContent">
            <div class="fl" style="width: 87px; height: 108.5px">
              <img :src="item.img" />
            </div>
            <div class="fl" style="width: 278px; height: 110px">
              <h4 class="text1">{{item.title}}</h4>
              <p class="text2">文学作品</p>
              <p class="text3">长篇小说集</p>
            </div>
            <div class="cl"></div>
          </div>
          <p class="keyWord">{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {article,show} from "@/api"

export default {
  name: "ListContainer",
  data(){
    return{
      art:[],
      view:[]
    }
  },
  mounted(){
    article().then((value)=>{
      this.art = value.data
    })
    show().then((value)=>{
      this.view = value.data
    })
  }
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
.fl {
  float: left;
}
.cl {
  clear: both;
}

a {
  text-decoration: none;
  color: black;
}

#mainNew {
  width: 1200px;
  height: 250px;
  margin: 40px auto;
}
#mainNew .fl {
  box-shadow: 3px 4px 4px #c8c8c8;
}
#mainNew .fl .content_left {
  background: url("./img/content_top_img.jpg") no-repeat;
  width: 67px;
  height: 123px;
}

#mainNew .fl .content_right {
  width: 300px;
  height: 123px;
}
#mainNew .fl .content_right h4 {
  margin-left: 25px;
  margin-top: 10px;
}
#mainNew .fl .content_right p {
  margin-left: 25px;
  margin-top: 5px;
  color: #cccccc;
  font-size: 14px;
}
.small-left {
  margin-left: 30px;
}
.small-top {
  margin-top: 20px;
}

.line {
  background: url("./img/content_line.jpg") repeat-x center;
  height: 100px;
  width: 1200px;
  margin-left: 18%;
  position: relative;
}
.line h4 {
  position: absolute;
  line-height: 98px;
  background: #ffffff;
}
.line .h4_content {
  left: 762px;
}
.ad {
  position: relative;
  width: 1200px;
  height: 130px;
  margin-left: 18%;
  border: 1px solid #dddddd;
  border-left: 5px solid #ea583f;
  background-color: #eeeeee;
}
.ad h4 {
  margin-top: 40px;
  margin-left: 10px;
}
.ad p {
  font-size: 15px;
  color: #cccccc;
  margin-top: 15px;
  margin-left: 10px;
}
.ad .image1 {
  position: absolute;
  right: 0px;
  bottom: 0px;
}
.ad .image2 {
  position: absolute;
  right: 0px;
  bottom: 0px;
}
#SecondNew {
  width: 1250px;
  height: 470px;
  margin: 0 auto;
}
#SecondNew .newBox {
  width: 275px;
  height: 470px;
  background: #eeeeee;
}
#SecondNew .newBox img {
  margin-left: 13px;
  margin-top: 13px;
}
#SecondNew .newBox h4 {
  border-bottom: 1px solid #e3e3e3;
  line-height: 48px;
  font-size: 16px;
  color: #1c2431;
  text-align: center;
}
#SecondNew .newBox p {
  margin-top: 8px;
  line-height: 23px;
  color: #9d9d9d;
  font-size: 12px;
  text-align: center;
}
.content_bottom {
  width: 1200px;
  height: 480px;
  margin: 0 auto;
}
.content_bottom .bottom_left .fl .title {
  line-height: 49px;
  font-size: 16px;
  color: #19232d;
  border-bottom: 1px solid #c2c2c2;
}
.content_bottom .bottom_left .fl {
  width: 340px;
  height: 480px;
}
.content_bottom .bottom_left .fl p {
  margin-top: 12px;
  margin-bottom: 9px;
  line-height: 23px;
  color: #a7a7a7;
  font-size: 12px;
}
.content_bottom .bottom_left .fl .foot {
  border-top: 1px solid #c2c2c2;
  line-height: 80px;
  width: 340px;
  background: url("./img/content_bmore.jpg") no-repeat right center;
}
.content_bottom .bottom_right {
  width: 365px;
  height: 400px;
  margin-left: 58px;
}
.content_bottom .bottom_right .bottom_right_content .mainContent {
  width: 365px;
  height: 110px;
  /*position: relative;*/
}
.content_bottom .bottom_right .bottom_right_content .mainContent img {
  width: 87px;
  height: 108.5px;
  /*position: absolute;*/
  /*left: 0;*/
  /*top: 0;*/
}
.content_bottom .bottom_right .bottom_right_content .mainContent .text1 {
  font-size: 16px;
  line-height: 23px;
  color: #363636;
  margin-left: 10px;
}
.content_bottom .bottom_right .bottom_right_content .mainContent .text2 {
  font-size: 14px;
  line-height: 23px;
  color: #474747;
  margin-left: 10px;
}
.content_bottom .bottom_right .bottom_right_content .mainContent .text3 {
  font-size: 14px;
  line-height: 23px;
  color: red;
  margin-left: 10px;
}
.content_bottom .bottom_right .bottom_right_content .keyWord {
  line-height: 20px;
  font-size: 12px;
  color: #999999;
  width: 327px;
  text-indent: 26px;
  font-style: italic;
  background: url("./img/content_brword.jpg") no-repeat;
}
</style>