<template>
  <div>
    <el-carousel :interval="4000" type="card" height="320px">
      <el-carousel-item v-for="item in img" :key="item">
        <img :src="item" style="width: 100%;">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { banner } from '@/api';

export default {
  name: "Swiper0",
  data(){
    return{
      img: []
    }
  },
  components: {},
  methods:{
    async getbanner(){
      const res = await banner();
      this.img = res.data
    }
  },
  mounted() {
    // banner().then((value)=>{
    //   this.img = value.data
    //   console.log(this.img)
    // })
    this.getbanner();
  },
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel{
  width: 1200px;
  margin: 0 auto;
}
</style>
