<template>
  <div class="content-wrapper clearfix">
    <div class="about-banner"></div>
    <h2>学习</h2>
    <div class="playlist-info clearfix">
      <ul class="clearfix">
        <li v-for="item in detailList" :key="item.id">
          <router-link :to="{path:'/Xdetail',query:{id:item.id}}">
            <div>
              <img class="playlist_mask" :src="item.img" alt="" />
            </div>
            <div class="author">{{item.title}}</div>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- <div class="block">
      <span class="demonstration">1</span>
      <el-pagination layout="prev, pager, next" page-sizes:[3] :total="100"> </el-pagination>
    </div> -->
  </div>
</template>

<script>
import { maind } from '@/api';

export default {
  name: "Study",
  data(){
    return{
      detailList:[]
    }
  },
  mounted(){
    maind().then((value)=>{
      this.detailList = value.data
    })
  }
};
</script>

<style lang="less" scoped>
body {
  min-width: 1200px;
}

h2 {
  text-align: center;
  background: rgb(209, 206, 206);
}

.about-banner {
  height: 200px;
  border-radius: 10px;
  background-image: url(./img/tt.webp);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 40px;
}

.button {
  display: inline-block;
  text-align: center;
  font-size: 10px;
  font-weight: normal;
  background: #eb593c;
  line-height: 28px;
  padding: 0 10px;
  border: 0;
  border-radius: 2px;
  box-sizing: border-box;
  color: #fff !important;
  margin-top: 10px;
  cursor: pointer;
}

.common-title {
  color: #6e9b76;
  font-size: 20px;
  padding: 20px 0;
}

.content-wrapper a {
  color: #000;
}

.content-wrapper a:hover {
  color: #eb593c;
}

.content-wrapper .line {
  height: 1px;
  overflow: hidden;
  margin: 40px 0 20px 0;
  background: #dbe3d9;
  background: rgba(189, 212, 193, 0.42);
}

.content-wrapper {
  width: 980px;
  margin: 0 auto;
  height: 1000px;
}

.playlist-info ul li {
  width: calc((100% - 80px) / 5);
  margin-right: 20px;
  margin-bottom: 20px;
  float: left;
}
.playlist-info ul li:nth-child(5n) {
  margin-right: 0;
}
.playlist_mask {
  display: inline-block;
  width: 100%;
  height: 230px;
  // background-image: url("./img/20211128.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.playlist-info {
  margin-top: 100px;
  margin-bottom: 100px;
}
.playlist-info .author {
  margin-top: 10px;
  text-align: center;
}
.playlist_detail {
  width: 980px;
  margin: 0 auto;
}
.playlist_detail_head {
  min-height: 250px;
  margin-bottom: 50px;
}
.playlist_detail_head .cover {
  display: block;
  position: absolute;
  width: 250px;
  height: 250px;
  background-image: url("./img/20211128.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.playlist_detail_head .info {
  padding-left: 300px;
}
.playlist_detail_head .info h1 {
  font-size: 32px;
}
.playlist_detail_head .info .author {
  font-size: 18px;
}
.playlist_detail_head .info div {
  line-height: 30px;
}

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
  background-image: url("./img/20211128.png");
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
</style>