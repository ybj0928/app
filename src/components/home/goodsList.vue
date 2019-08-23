<template>
  <div class="goodsList">
    <div @click="toGoodsDetail(item.id)" class="goodsItem" v-for="item in goodsList" :key='item.id'>
      <div class="imgWord">
        <img :src="item.img_url" width="100%" alt="">
        <h3>{{item.title}}</h3>
      </div>
      <div class="priceAndStatus">
        <div>
          <span>￥{{item.sell_price}}</span>
          <span>￥{{item.market_price}}</span>
        </div>
        <div>
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </div>
      </div>
    </div>
    <mt-button size="large" type="default" icon="more" class="loaderMore" @click="loaderMore">加载更多</mt-button>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  export default {
    data () {
      return {
        goodsList: [],
        index: 1,
        currentList: []
      }
    },
    methods: {
      getGoodsList () {
        this.$http.get('api/getgoods?pageindex=' + this.index).then(res => {
          if (res.body.status === 0) {
            this.currentList = res.body.message
            this.goodsList = this.goodsList.concat(res.body.message)
          } else {
            Toast('网络错误')
          }
        })
      },
      loaderMore () {
        if (this.currentList.length === 0) return Toast('没有更多数据啦！')
        this.index++
        this.getGoodsList()
      },
      toGoodsDetail (id) {
        console.log(id)
      }
    },
    created () {
      this.getGoodsList()
    }
  }
</script>

<style lang="scss" scoped>
  .goodsList {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .goodsItem {
      width: 48.2%;
      min-height: 20rem;
      overflow: hidden;
      border-radius: .5rem;
      box-shadow: 0 0 .5rem #999;
      margin-top: 1rem;
      &:nth-child(1),  &:nth-child(2){
        margin-top: 0;
      }
      .imgWord {
        img {
          border-radius: 0 0 .5rem .5rem;
          vertical-align: middle;
          min-height: 16rem;
        }
        h3 {
          font-size: 1.6rem;
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          line-height: 1.8rem;
          padding: 0 .5rem;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          font-weight: 600;
          color: #333;
        }
      }
      .priceAndStatus {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: .7rem .5rem;
        background: #e0e0e0;
        font-size: 1.6rem;
        height: 5.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: #333;
        border-radius: .5rem .5rem 0 0;
        div:nth-child(1) {
          span:nth-child(1) {
            color: #e4393c;
            font-size: 2rem;
          }
          span:nth-child(2) {
            text-decoration: line-through;
            margin-left: 1rem;
          }
        }
        div:nth-child(2) {
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .loaderMore {
      margin-top: 1rem;
    }
  }
</style>
