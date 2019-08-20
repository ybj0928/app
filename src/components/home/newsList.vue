<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../static/images/1.jpg">
          <div class="mui-media-body">
            幸福
            <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../static/images/1.jpg">
          <div class="mui-media-body">
            木屋
            <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../static/images/1.jpg">
          <div class="mui-media-body">
            CBD
            <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  export default {
    data () {
      return {
        newsList: []
      }
    },
    methods: {
      getNewsList () {
        this.$http.get('api/getnews?pageIdx=1').then(res => {
          console.log(res)
          if (res.body.status === 1) {
            this.newsList = res.data.news
          } else {
            Toast('系统繁忙')
          }
        })
      }
    },
    created () {
      this.getNewsList()
    }
  }
</script>