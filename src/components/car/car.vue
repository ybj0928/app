<template>
  <div class="car">
    <div class="mui-card" v-for="(item, index) in goodsList" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner goodsTab">
          <div>
            <mt-switch @change="selectedGoods(item.id, $store.getters.selctedList[item.id])" v-model="$store.getters.selctedList[item.id]"></mt-switch>
          </div>
          <div>
            <img :src="item.thumb_path" alt="">
          </div>
          <div>
            <div>{{item.title}}</div>
            <div>
              <span class="money">¥{{item.sell_price}}</span>
              <number-box :id="item.id" :count="$store.getters.countList[item.id]"></number-box>
              <span class="delBtn" @click="delGoods(index, item.id)">删除</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner allPreview">
          <div>
            <div>总计（不含运费）</div>
            <div class="totel">
              已勾选商品 <span>{{$store.getters.getBage}}</span> 件，总价：<span> ¥ {{$store.getters.allPrice}} </span>
            </div>
          </div>
          <div>
            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  import numberBox from '../common/numberBox.vue'
  export default {
    data () {
      return {
        value: false,
        goodsList: []
      }
    },
    methods: {
      getCarList () {
        let arr = []
        this.$store.getters.goodsInfoList.forEach(value => {
          arr.push(value.id)
        })
        if (this.$store.getters.goodsInfoList.length) {
          this.$http.get('api/goods/getshopcarlist/' + arr.join(',')).then(res => {
            if (res.body.status === 0) {
              this.goodsList = res.body.message
              console.log(this.goodsList)
            } else {
              Toast('网络错误')
            }
          })
        }
      },
      changeCount (count) {
        console.log(count)
      },
      selectedGoods (id, select) {
        this.$store.commit('changeStatus', {id, select})
        console.log(id, select)
      },
      delGoods (index, id) {
        this.goodsList.splice(index, 1)
        console.log(id)
        this.$store.commit('delGoods', id)
      }
    },
    created () {
      // console.log(this.$store.getters.goodsInfoList)
      this.getCarList()
      console.log(this.$store.getters.countList)
    },
    components: {
      numberBox
    }
  }
</script>

<style lang="scss" scoped>
  .car {
    background: #eee;
    overflow: hidden;
    .goodsTab {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        margin: 0 .5rem;
        vertical-align: middle;
      }
      >div:nth-child(3) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        >div:nth-child(1) {
          font-size: 1.6rem;
          font-weight: 600;
        }
        >div:nth-child(2) {
          display: flex;
          align-items: center;
        }
      }
    }
    .mui-numbox {
      height: 25px;
      margin: 0.5rem;
    }
    .money {
      color: #e4393c;
    }
    .delBtn {
      color: blue;
    }
    .allPreview {
      color: #666;
      display: flex;
      justify-content: space-between;
    }
    .totel {
      span {
        color: #e4393c;
        font-size: 1.8rem;
        font-weight: bold;
      }
    }
  }
</style>