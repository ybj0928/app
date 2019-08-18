<template>
  <div>
    <mt-header fixed title='杨鞭骥'></mt-header>
    <div  class="main_container">
      <transition name='slide' mode="appear">
        <router-view></router-view>
      </transition>
    </div>
    <nav class="mui-bar mui-bar-tab">
			<router-link tag="span" class="mui-tab-item" to="/index/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link tag="span" class="mui-tab-item" to="/index/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link tag="span" class="mui-tab-item" to="/index/car">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link tag="span" class="mui-tab-item" to='/index/search'>
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
        selected: 'member'
      }
    },
    methods: {},
    created () {
    }
  }
</script>

<style lang="scss" scoped>
  .main_container {
    padding: 40px 0 50px 0;
    box-sizing: border-box;
  }
  
  .slide-enter, .slide-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }

  .slide-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
    position: absolute;
  }

</style>