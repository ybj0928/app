<template>
  <div>
    <mt-header fixed title='杨鞭骥'>
      <mt-button icon="back" slot="left" v-if="gobackIcon" @click="goBack"></mt-button>
    </mt-header>
    <div class="main_container" :style="'min-height: '+ height +'px'">
      <transition name='slide'>
        <router-view></router-view>
      </transition>
    </div>
    <nav class="mui-bar mui-bar-tab">
      <router-link tag="span" class="mui-tab-item1" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link tag="span" class="mui-tab-item1" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link tag="span" class="mui-tab-item1" to="/car">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="goodsCount">{{$store.getters.getBage ? $store.getters.getBage : 0}}</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link tag="span" class="mui-tab-item1" to='/search'>
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        height: 0,
        gobackIcon: false
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      }
    },
    created () {
    },
    mounted () {
      this.height = document.documentElement.clientHeight
    },
    watch: {
      '$route.path' (newVal, oldVal) {
        console.log(newVal)  
        this.gobackIcon = newVal === '/home/homePage' ? false : true
         
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    touch-action: pan-y;
  }
  .main_container {
    padding: 40px 0 50px 0;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
  }
  
  .slide-enter {
    opacity: 0;
    transform: translateX(100%);
    left: 100%;
  }

  .slide-leave-to {
    opacity: 0;
    transform: translateX(-100%);

  }

  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
    position: absolute;
  }
  .mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }
  .mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
  }

  .mint-header.is-fixed {
    z-index: 999;
  }

  .mui-bar {
    box-shadow: none;
    border-top: .1rem solid #eee;
  }

</style>