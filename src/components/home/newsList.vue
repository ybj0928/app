<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.uniquekey">
        <router-link tag="div" :to="'/home/newsDetail/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <div class="news_title">{{item.title}}</div>
            <div class="news_memo">
              <span>发表时间：{{item.add_time | formatDate}}</span>
              <span>点击次数：{{item.click}}</span>
            </div>
          </div>
        </router-link>
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
        this.$http.get('api/getnewslist').then(res => {
          if (res.body.status === 0) {
            this.newsList = res.body.message
          } else {
            Toast('网络错误')
          }
        })
      }
    },
    created () {
      this.getNewsList()
    }
  }
</script>

<style lang="scss" scoped>
  .news_title {
    font-size: 14px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #333;
  }
  .news_memo {
    display: flex;
    color: #26a2ff;
    font-size: 12px;
    justify-content: space-between;
  }
</style>