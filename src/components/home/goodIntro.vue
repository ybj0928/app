<template>
  <div class="goodsIntro">
    <h3>{{introData.title}}</h3>
    <div>
      <div v-html="introData.content"></div>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  export default {
    data () {
      return {
        introData: {}
      }
    },
    methods: {
      getIntro () {
        this.$http.get('api/goods/getdesc/' + this.$route.params.id).then(res => {
          if (res.body.status === 0) {
            this.introData = res.body.message[0]
          } else {
            Toast('网络错误')
          }
        })
      }
    },
    created () {
      this.getIntro()
      console.log(123)
    }
  }
</script>

<style lang="scss">
  .goodsIntro {
    h3 {
      color: #333;
      font-size: 1.8rem;
      padding: 1rem 0;
      border-bottom: .1rem solid #999;
      margin-bottom: 1rem;
    }
    padding: .5rem;
    img {
      width: 100%;
    }
  }
</style>