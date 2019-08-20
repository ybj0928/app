<template>
  <div>
    <div class="detail_header">
      <h3>{{detailData.title}}</h3>
      <div>
        <span>发表时间：{{detailData.add_time | formatDate}}</span>
        <span>点击次数：{{detailData.click}} 次</span>
      </div>
    </div>
    <div class="detail_main">
      <div v-html="detailData.content + '<img src=https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=4c85fc7dcecec3fd9f33af27b7e1bf5a/58ee3d6d55fbb2fbb68159a3424a20a44723dcdd.jpg>'"></div>
    </div>
    <public-comment :id="$route.params.id"></public-comment>
  </div>
</template>

<script>
  import publicComment from '../common/publicComment.vue'
  export default {
    data () {
      return {
        detailData: {}
      }
    },
    methods: {
      getDetails (id) {
        this.$http.get('api/getnew/' + id).then(res => {
          if (res.body.status === 0) {
            this.detailData = res.body.message[0]
          } else {
            Toast('网络错误')
          }
        })
      }
    },
    created () {
      this.getDetails(this.$route.params.id)
    },
    components: {
      publicComment
    }
  }
</script>

<!-- 把style里面的scoped属性去除可以设置富文本里面的样式 -->
<style lang="scss">
  .detail_header {
    padding: 1rem;
    box-sizing: border-box;
    border-bottom: .1rem solid #999;
    h3 {
      color: #e4393c;
      font-size: 1.8rem;
      text-align: center;
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin: 0 0 1rem 0;
    }
    >div {
      display: flex;
      justify-content: space-between;
      >span {
        color: #26a2ff;
        font-size: 1.4rem;
      }
    }
  }
  .detail_main {
    padding: 1rem;
    img {
      width: 100%;
      height: auto;
    }
  }
</style>