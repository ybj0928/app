<template>
  <div>
    <div class="autoPlay">
      <mt-swipe>
        <mt-swipe-item>
          <img class="autoPlayImg" src="../../static/images/1.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="autoPlayImg" src="../../static/images/2.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="autoPlayImg" src="../../static/images/3.jpg" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newsList">
          <img src="../../static/images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photoShare">
          <img src="../../static/images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../static/images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../static/images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../static/images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../static/images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
  .autoPlay {
    height: 200px;
    .autoPlayImg {
      width: 100%;
      height: 100%;
    }
  }
  .mui-grid-view.mui-grid-9 {
    border: none;
    background: #fff;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
    background: #fff;
  }

  .mui-table-view-cell img{
    width: 60px;
    height: 60px;
  }
</style>