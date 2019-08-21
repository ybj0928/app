<template>
  <div>
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a @click.prevent="getPhotoList(item.id)" v-for="(item, index) in navList" :key="item.id" :class="['mui-control-item', {'mui-active': index === 0}]" href="#item1mobile">
            {{item.title}}
          </a>
        </div>
      </div>
    </div>
    <ul class="photoList">
      <router-link tag="li" :to="'/home/photoDetails/' + item.id" v-for="item in photoList" :key="item.id">
        <img v-lazy="item.img_url">
        <div class="maskBox">
          <h4>{{item.title}}</h4>
          <div>{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import mui from '../../../lib/MUI/js/mui'
  import {Toast} from 'mint-ui'
  export default {
    data () {
      return {
        navList: [],
        photoList: []
      }
    },
    methods: {
      getNavList () {
        this.$http.get('api/getimgcategory').then(res => {
          if (res.body.status === 0) {
            res.body.message.unshift({title: '全部', id: 0})
            this.navList = res.body.message
          } else {
            Toast('网络错误')
          }
        })
      },
      getPhotoList (id) {
        this.$http.get('api/getimages/' + id).then(res => {
          if (res.body.status === 0) {
            this.photoList = res.body.message
          } else {
            Toast('网络错误')
          }
        })

      }
    },
    created () {
      this.getNavList()
      this.getPhotoList(0)
    },
    mounted () {
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      })
    }
  }
</script>

<style lang="scss" scoped>
  img[lazy=loading] {
    width: 5rem;
    height: 5rem;
    margin-top: 13rem;
  }
  .photoList {
    list-style: none;
    padding: 0;
    margin: 0;
    padding: 1rem;
    li {
      text-align: center;
      background: #999;
      margin-bottom: 1rem;
      height: 34rem;
      overflow: hidden;
      border-radius: .3rem;
      box-shadow: 0 0 1rem #999;
      position: relative;
      img {
        width: 100%;
        vertical-align: middle;
      }
      &:last-child {
        margin-bottom: 0;
      }
      .maskBox {
        position: absolute;
        width: 100%;
        background: rgba(0, 0, 0, .6);
        color: #fff;
        bottom: 0;
        padding: .5rem;
        box-sizing: border-box;
        text-align: left;
        font-size: 1.2rem;
        h4 {
          font-size: 1.4rem;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: lightcoral;
        }
        div {
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          max-height: 6.3rem;
        }
      }
    }
    
  }
  .mui-slider {
    border-bottom: .1rem solid #eee;
  }
</style>