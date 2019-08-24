<template>
  <div class="goodsDetails">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-swipe>
            <mt-swipe-item v-for="item in imageList" :key="item.src">
              <img :src="item.src" alt />
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>
    <div class="mui-card" style="overflow: visible">
      <div class="mui-card-header">{{ goodsDetail.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="priceInfo">
            <div>
              市场价：<span>¥{{ goodsDetail.market_price }}</span>
              销售价：<span>¥{{ goodsDetail.sell_price }}</span>
            </div>
            <div class="ballFather">
              购买数量：<number-box :max="goodsDetail.stock_quantity"></number-box>
              <transition
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:after-enter="afterEnter">
                <div class="ball" v-if="isShowBall"></div>
              </transition>
            </div>
            <div>
              <div class="mui-btn mui-btn-primary">立即购买</div>
              <div class="mui-btn mui-btn-danger" @click="addToCar">加入购物车</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner h10 text_left paramsProduct">
          <div>商品货号：<span>{{ goodsDetail.goods_no }}</span></div>
          <div>库存情况：<span>{{ goodsDetail.stock_quantity }}</span></div>
          <div>上架时间：<span>{{ goodsDetail.add_time | formatDate }}</span></div>
        </div>
      </div>
      <div class="mui-card-footer lastBtns">
        <mt-button @click="toIntro" size='large' type="primary" plain>图文介绍</mt-button>
        <mt-button @click="toComment" size='large' type="danger" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import numberBox from '../common/numberBox.vue'
  export default {
    data () {
      return {
        id: this.$route.query.id,
        imageList: [],
        goodsDetail: {},
        isShowBall: false
      }
    },
    methods: {
      getImageList () {
        this.$http.get('api/getthumimages/' + this.id).then(res => {
          if (res.body.status === 0) {
            this.imageList = res.body.message
          } else {
            Toast('网络错误')
          }
        })
      },
      getGoodsDetails () {
        this.$http.get('api/goods/getinfo/' + this.id).then(res => {
          if (res.body.status === 0) {
            this.goodsDetail = res.body.message[0]
          } else {
            Toast('网络错误')
          }
        })
      },
      toIntro () {
        this.$router.push({name: 'goodsIntro', params: {id: this.id}})
      },
      toComment () {
        this.$router.push({name: 'goodsComment', params: {id: this.id}})
      },
      addToCar () {
        this.isShowBall = !this.isShowBall
      },
      beforeEnter (el) {
        el.style.transform = 'translate(0, 0)'
      },
      enter (el, done) {
        el.offsetWidth
        let x = document.getElementById('goodsCount').getBoundingClientRect().left - el.getBoundingClientRect().left
        let y = document.getElementById('goodsCount').getBoundingClientRect().top - el.getBoundingClientRect().top
        el.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
        el.style.transition = 'all .5s cubic-bezier(.16,-0.27,.55,.22)'
        done()
      },
      afterEnter (el) {
        this.isShowBall = !this.isShowBall
      }
    },
    created () {
      this.getImageList()
      this.getGoodsDetails()
    },
    components: {
      numberBox
    }
  }
</script>

<style lang="scss" scoped>
  .mui-card-content-inner {
    height: 20rem;
    text-align: center;
    img {
      height: 100%;
    }
  }
  .h10 {
    height: 10rem;
  }
  .goodsDetails {
    background: #eee;
    border: 1px solid #eee;
    box-sizing: border-box;
    .priceInfo {
      text-align: left;
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      >div:nth-child(1) {
        span:nth-of-type(1) {
          text-decoration: line-through;
          color: #666;
          margin-right: 1rem;
        }
        span:nth-of-type(2) {
          color: #e4393c;
          font-size: 1.8rem;
        }
      }
      .ballFather {
        position: relative;
        .ball {
          width: 1.5rem;
          height: 1.6rem;
          border-radius: 50%;
          position: absolute;
          background: red;
          top: 1rem;
          left: 12.3rem;
          z-index: 999;
        }
      }
    }
    .lastBtns {
      flex-direction: column;
      button {
        margin-top: 1rem;
        &:nth-child(1) {
          margin-top: 0;
        }
      }
    }
    .paramsProduct{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #666;
      span {
        color: #333;
      }
    }
  }
</style>