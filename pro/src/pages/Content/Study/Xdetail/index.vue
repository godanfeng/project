<template>
  <div>
    <div class="p1">
      <p>Vol. {{det.id}}: {{det.title}}</p>
    </div>

    <div class="container-sm box">
      <div class="main">
        <div class="main-wrap">
          <div class="content-box article">
            <div class="title">
              <h2>
                {{det.subhead}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i v-if="flag" @click="change" class="el-icon-star-on"></i>
                  <i v-if="!flag" @click="change" class="el-icon-star-off"></i>
                  <span>收藏</span>
              </h2>
              <div class="info">
                <span class="author">计算机书籍阅读</span> /
                <span class="date">2022-04</span>
              </div>
            </div>
            <div class="content">
              <p style="text-align: center;">
                <img :src="det.img" style="width: 500px; height: 600px;"/>
              </p>
              <div>
                <div class="rich_media_content" lang='="en"' id="js_content">
                  <p
                    style="
                      margin: 5px 16px;
                      white-space: normal;
                      max-width: 100%;
                      min-height: 1em;
                      color: rgb(51, 51, 51);
                      line-height: 1.75em;
                    "
                  >
                    <span style="font-size: 14px; letter-spacing: 0.5px"
                      ><strong
                        >书籍的介绍：</strong
                      ></span
                    >
                  </p>
                  <span
                    style="
                      margin: 5px 16px;
                      white-space: normal;
                      max-width: 100%;
                      min-height: 1em;
                      color: rgb(51, 51, 51);
                    "
                    ><br
                  /></span>
                  <p
                    style="
                      margin: 5px 16px;
                      white-space: normal;
                      max-width: 100%;
                      min-height: 1em;
                      color: rgb(51, 51, 51);
                      line-height: 1.75em;
                    "
                  >
                    <span style="font-size: 14px; letter-spacing: 0.5px">
                      {{det.introduce}}
                    </span>
                  </p>
                  <p
                    style="
                      margin: 5px 16px;
                      white-space: normal;
                      max-width: 100%;
                      min-height: 1em;
                      color: rgb(51, 51, 51);
                      line-height: 1.75em;
                    "
                  >
                    <br />
                  </p>

                  <img
                    class=""
                    data-copyright="0"
                    data-cropselx1="0"
                    data-cropselx2="23"
                    data-cropsely1="0"
                    data-cropsely2="26"
                    data-ratio="1.1538461538461537"
                    data-s="300,640"
                    data-src="https://mmbiz.qpic.cn/mmbiz_png/icNBqdsXEFLKuTl96M0cXWHCOs6MdiaibKicePHZSLXXXv03oIcgTv2wQMa8iae6wyV7JRiaCxQPH8znB8bibyk3JeEwQ/640?wx_fmt=png"
                    data-type="png"
                    data-w="26"
                    style="
                      width: 23px !important;
                      height: auto !important;
                      visibility: visible !important;
                      border-left-width: 0‒;
                      margin-left: 375px;
                    "
                    _width="23px"
                    src="https://mmbiz.qpic.cn/mmbiz_png/icNBqdsXEFLKuTl96M0cXWHCOs6MdiaibKicePHZSLXXXv03oIcgTv2wQMa8iae6wyV7JRiaCxQPH8znB8bibyk3JeEwQ/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1"
                    data-fail="0"
                  />

                  <section
                    style="
                      margin-right: 5px;
                      margin-left: 5px;
                      padding: 1em 0.5em;
                      max-width: 100%;
                      box-shadow: rgb(204, 204, 204) 0px 0px 2px 2px;
                      overflow: hidden;
                      box-sizing: border-box !important;
                      word-wrap: break-word !important;
                    "
                  >
                    <section
                      style="
                        max-width: 100%;
                        overflow-y: scroll;
                        height: 500px;
                        box-sizing: border-box !important;
                        word-wrap: break-word !important;
                      "
                    >
                      <p
                        style="
                          margin-right: 16px;
                          margin-left: 16px;
                          max-width: 100%;
                          min-height: 1em;
                          text-indent: 0em;
                          text-align: center;
                          box-sizing: border-box !important;
                          word-wrap: break-word !important;
                        "
                      >
                        <span
                          style="
                            max-width: 100%;
                            font-size: 13px;
                            line-height: normal;
                            color: rgb(136, 136, 136);
                            box-sizing: border-box !important;
                            word-wrap: break-word !important;
                          "
                          ><span
                            style="
                              max-width: 100%;
                              letter-spacing: 0.5px;
                              line-height: normal;
                              font-size: 12px;
                            "
                            >[ 滑动 ↓ 查看绪论 ]</span
                          >
                          <span
                            style="
                              line-height: normal;
                              max-width: 100%;
                              font-size: 12px;
                            "
                          ></span>
                        </span>
                      </p>
                      <p
                        style="
                          margin-right: 32px;
                          margin-left: 32px;
                          text-align: center;
                        "
                      >
                        <br />
                      </p>
                      <p style="text-align: center">
                        <span
                          style="font-size: 13px; color: rgb(0, 0, 0)"
                        ></span>
                      </p>
                      <p class="" style="text-align: left">
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size: 13px; color: rgb(0, 0, 0)">
                          {{det.exordial}}
                        </span>
                      </p>
                    </section>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sidebar">
        <div class="right-module">
          <h4 v-if="exdata[10]">{{exdata[10].title}}</h4>
          <ul class="new-artist-songs">
            <li class="artist-song" v-for="item in exdata.slice(0,5)" :key="item.id">
              <div class="avatar">
                <img :src="item.img" />
              </div>
              <div class="info">
                <h3>{{item.title}}</h3>
                <p>{{item.content}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="right-module">
          <h4 v-if="exdata[11]">{{exdata[11].title}}</h4>
          <ul class="new-artist-songs">
            <li class="artist-song" v-for="item in exdata.slice(5,10)" :key="item.id">
              <div class="avatar">
                <img :src="item.img" />
              </div>
              <div class="info">
                <h3>{{item.title}}</h3>
                <p>{{item.content}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { detail,extend,collect,getCollect,del } from '@/api';

export default {
  name: "Xdetail",
  data(){
    return{
      det:{},
      exdata:[],
      flag:false,
      res: '',
    }
  },
  methods:{
    async change(){
      this.flag = !this.flag
      if(this.flag && this.$store.state.user.token){
        await collect({
          id:this.det.id,
          userId:this.$store.state.user.userInfo.id,
          img:this.det.img,
          title:this.det.title
        })
      }else if(!this.$store.state.user.token){
        this.flag = !this.flag
        this.$message({ type: "warning", message: "请先登录后再继续收藏", center: "true" });
      }else if(!this.flag){
        await del(this.det.id,this.$store.state.user.userInfo.id)
      }
    },

    async getCol(){
      const res = await getCollect(this.$store.state.user.userInfo.id)
      res.data.forEach(element => {
        if(element.id == this.det.id){
          console.log(this.det.id)
          this.flag = true
        }
      });
    }
  },
  mounted(){
    detail(this.$route.query.id).then((value)=>{
      this.det = value.data
    })

    if(this.$store.state.user.token)
      this.$store.dispatch("getUserInfo").then((value)=>{
        this.getCol()
    })

    extend().then((value)=>{
      this.exdata = value.data
    })
  }
};
</script>

<style lang="less" scoped>
.mod_songlist {
  font-size: 14px;
  overflow: hidden;
  width: calc(100% - 340px);
  display: inline-block;
}

.songlist__list {
  overflow: hidden;
  clear: both;
}

.songlist__header,
.songlist__item {
  position: relative;
  padding-left: 46px;
  padding-right: 100px;
}

.songlist__item {
  clear: both;
  font-size: 0;
  overflow: hidden;
}

.songlist__item--even {
  background-color: #fbfbfd;
}

.songlist__album,
.songlist__artist,
.songlist__number,
.songlist__other,
.songlist__songname,
.songlist__time {
  line-height: 50px;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}

.songlist__header {
  height: 50px;
  line-height: 50px;
  background-color: #fbfbfd;
  color: #999;
}

.songlist__header_name,
.songlist__songname {
  float: left;
  width: 47.685185%;
  position: relative;
  white-space: normal;
}

.songlist__album,
.songlist__artist,
.songlist__header_album,
.songlist__header_author {
  float: left;
  padding-left: 20px;
  width: 25.5%;
  box-sizing: border-box;
}

.songlist__header_time,
.songlist__time {
  position: absolute;
  top: 0;
  right: 38px;
  width: 50px;
}

.songlist__header_other,
.songlist__other {
  position: absolute;
  top: 0;
  right: 0;
  width: 38px;
  overflow: inherit;
}

.songlist__song_txt {
  margin-left: 10px;
}

.songlist__song_txt,
.songlist__time {
  color: #999;
}

.songlist__number {
  position: absolute;
  top: 0;
  left: 10px;
  color: #999;
  width: 36px;
}

.songlist__songname_txt {
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 75%;
  margin-right: 8px;
  white-space: nowrap;
}

.songlist__item .songlist__songname_txt:nth-child(1) {
  max-width: 85%;
  box-sizing: border-box;
}

.songlist__item .songlist__icon:nth-child(1) + .songlist__songname_txt {
  max-width: 72%;
  box-sizing: border-box;
}

.songlist__item .songlist__icon:nth-child(2) + .songlist__songname_txt {
  max-width: 62%;
  box-sizing: border-box;
}

.songlist__icon {
  display: inline-block;
}

.songlist__item .mod_list_menu {
  position: absolute;
  right: -10px;
  right: -9999px\9;
  top: 50%;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
}

.songlist__item--current .mod_list_menu,
.songlist__item:hover .mod_list_menu {
  opacity: 1;
  pointer-events: inherit;
  right: -10px;
  margin-top: -18px;
}
.mod_other {
  width: 300px;
  display: inline-block;
  margin-left: 40px;
  margin-bottom: 80px;
}
.mod_other-cover {
  display: block;
  width: 100%;
  height: 100px;
  background-image: url(../img/20211128.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.mod_other ul {
  margin-top: 10px;
}
.mod_other ul li {
  float: left;
  width: calc((100% - 40px) / 3);
  margin-right: 20px;
  margin-bottom: 20px;
}
.mod_other ul li:nth-child(3n) {
  margin-right: 0;
}
.mod_other .author {
  font-size: 12px;
  color: #5c5c5c;
}
.mod_other h1 {
  font-size: 16px;
}
.mod_other p {
  margin: 10px 0 40px 0;
}
.mod_songlist a {
  font-size: #000;
}

/* end playlist page */

/* Article */

.article .title {
  border-left: 3px solid #b72120;
  padding-left: 14px;
  margin: 10px 0 20px;
}

.article .title h2 {
  color: #333;
  font-size: 22px;
  font-weight: 400;
  margin: 0;
}

.article .title .info {
  font-size: 12px;
  color: #888;
}

.article .content p {
  font-size: 14px;
  line-height: 26px;
  margin: 0 0 14px;
  word-break: break-all;
  color: rgb(102, 102, 102);
}
/* Artist Song */

.artist-song:before {
  content: "";
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-top: 1px solid #f2f2f2;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
}

.artist-song:first-child:before {
  border-top: none;
}

.artist-song {
  position: relative;
  padding: 16px 14px;
  list-style: none;
  color: #737373;
  overflow: hidden;
}

.artist-song:hover {
  box-shadow: 0 0 38px rgba(0, 0, 0, 0.08) inset;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
}

.artist-song h3 {
  color: #737373;
}

.artist-song .cover-link {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 4;
}

.artist-song .avatar {
  float: left;
  width: 48px;
  height: 48px;
}

.artist-song .avatar img {
  border-radius: 50%;
  width: 48px;
  height: 48px;
  overflow: hidden;
  line-height: 48px;
  text-align: center;
}

.artist-song .info {
  margin-left: 62px;
}

.artist-song .info h3 {
  display: block;
  margin: 0;
  line-height: 28px;
  font-weight: 400;
  font-size: 14px;
  color: #424242;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.artist-song .info p {
  margin: 0;
  font-size: 12px;
  line-height: 20px;
  color: #b2b2b2;
}

.main {
  width: 100%;
  float: left;
  margin-right: -250px;
  box-sizing: border-box;
}

.main-wrap {
  margin-right: 250px;
}

.content-box {
  padding: 20px 30px 30px;
}

.aplayer {
  margin: 0;
}
.aplayer
  .aplayer-info
  .aplayer-controller
  .aplayer-bar-wrap
  .aplayer-bar
  .aplayer-played
  .aplayer-thumb {
  border: 1px solid #000;
}

.sidebar {
  width: 250px;
  float: right;
  box-sizing: border-box;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.sidebar h4 {
  margin: 0;
  height: 55px;
  overflow: hidden;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  background: #f5f5f5;
  font-size: 16px;
  color: #757575;
  line-height: 60px;
  padding-left: 31px;
  font-weight: 400;
  -webkit-box-shadow: 0 1px 1px 1px #f6f6f6;
  -moz-box-shadow: 0 1px 1px 1px #f6f6f6;
  box-shadow: 0 1px 1px 1px #f6f6f6;
  background-image: -moz-linear-gradient(top, #fafafa, #f4f4f4);
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#fafafa),
    to(#f4f4f4)
  );
}

.sidebar .right-module {
  background: #fff;
  overflow: hidden;
}

.sidebar .right-module:first-child h4 {
  border-top: none;
}

/* Box */

.box {
  background: #fff;
  position: relative;
  z-index: 0;
  overflow: hidden;
  margin-top: 29px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.14);
  box-shadow: 0 3px 8px -3px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  margin-bottom: 100px;
}

.container,
.container-sm {
  margin-right: auto;
  margin-left: auto;
  transition: width 0.5s linear;
}

.container {
  width: 1080px;
}

.container-sm {
  width: 980px;
}

body {
  min-width: 1200px;
}

.p1 {
  p {
    padding: 10px;
    white-space: normal;
    max-width: 100%;
    min-height: 1em;
    box-sizing: border-box;
    border-style: none none none solid;
    font-size: 14px;
    line-height: 25px;
    font-family: arial, helvetica, sans-serif;
    text-shadow: rgb(34, 95, 135) 0px 1px 0px;
    color: rgb(255, 255, 255);
    border-radius: 4px;
    box-shadow: rgb(153, 153, 153) 2px 2px 4px;
    border-left-width: 10px;
    border-left-color: rgb(253, 208, 0);
    background-color: rgb(55, 57, 57);
    box-sizing: border-box !important;
    word-wrap: break-word !important;
    width: 980px;
    margin: 20px auto;
  }
}

/* scroll-y */

.scroll-y {
  overflow-y: auto;
}

/* webkit美化滚动条 */

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background: #dedede;
}

::-webkit-scrollbar-track-piece {
  background-color: none;
  background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb:vertical {
  background: #999999;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:horizontal {
  background: #999999;
  border-radius: 4px;
}
</style>