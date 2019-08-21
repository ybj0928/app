<template>
  <div>
    <div class="detail_header">
      <h3>{{detailData.content}}</h3>
      <div>
        <span>发表时间：{{detailData.add_time | formatDate}}</span>
        <span>点击次数：{{detailData.click}} 次</span>
      </div>
    </div>
    <div class="detail_main">
      <vue-preview v-if="imageList.length" :slides="setPreview" @close="handleClose" class="preview"></vue-preview>
      <div v-html="detailData.content"></div>
    </div>
    <public-comment :id="$route.params.id"></public-comment>
  </div>
</template>

<script>
  import publicComment from '../common/publicComment.vue'
  import {Toast} from 'mint-ui'
  export default {
    data () {
      return {
        detailData: {},
        imageList: []
      }
    },
    methods: {
      getImgInfo () {
        this.$http.get('api/getimageInfo/' + this.$route.params.id).then(res => {
          if (res.body.status === 0) {
            this.detailData = res.body.message[0]
          } else {
            Toast('网络错误')
          }
        })
      },
      getImageList () {
        this.$http.get('api/getthumimages/' + this.$route.params.id).then(res => {
          if (res.body.status === 0) {
            this.imageList = res.body.message
          } else {
            Toast('网络错误')
          }
        })
      },
      handleClose () {
        console.log('CLOSE')
      }
    },
    computed: {
      setPreview () {
        this.imageList.forEach(img => {
          img.msrc = img.src
          img.w = 300
          img.h = 300
        })
        return this.imageList
      }
    },
    created () {
      this.getImgInfo()
      this.getImageList()
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
    color: #666;
    font-size: 1.4rem;
  }
</style>