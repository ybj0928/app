import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsInfoList: localStorage.getItem('goodsInfoList') ? JSON.parse(localStorage.getItem('goodsInfoList')) : []
  },
  mutations: {
    detailAddGoods (state, data) {
      let isFind = state.goodsInfoList.some(value => {
        if (value.id === data.id) {
          value.count += data.count
          return true
        }
      })
      if (!isFind) {
        state.goodsInfoList.push(data)
      }
      console.log(state.goodsInfoList)
      localStorage.setItem('goodsInfoList', JSON.stringify(state.goodsInfoList))
    },
    carAddGoods (state, data) {
      state.goodsInfoList.some(value => {
        if (value.id === data.id) {
          value.count = data.count
          return true
        }
      })
      localStorage.setItem('goodsInfoList', JSON.stringify(state.goodsInfoList))
    },
    changeStatus (state, data) {
      state.goodsInfoList.some(value => {
        if (value.id === data.id) {
          value.select = data.select
          return true
        }
      })
      localStorage.setItem('goodsInfoList', JSON.stringify(state.goodsInfoList))
    },
    delGoods (state, index) {
      console.log(index)
      state.goodsInfoList.some((value, i) => {
        if (value.id === index) {
          state.goodsInfoList.splice(i, 1)
          return true
        }
      })
      localStorage.setItem('goodsInfoList', JSON.stringify(state.goodsInfoList))
    }
  },
  getters: {
    goodsInfoList (state) {
      return state.goodsInfoList
    },
    countList (state) {
      let obj = {}
      state.goodsInfoList.forEach(value => {
        obj[value.id] = value.count
      })
      return obj
    },
    getBage (state) {
      if (state.goodsInfoList.length) {
        let count = 0
        state.goodsInfoList.forEach(value => {
          count += value.count
        })
        return count
      } else {
        return 0
      }
    },
    selctedList (state) {
      let obj = {}
      state.goodsInfoList.forEach(value => {
        obj[value.id] = value.select
      })
      return obj
    },
    allPrice (state) {
      let total = 0
      state.goodsInfoList.forEach(value => {
        if (value.select) {
          total += value.count * value.price
        }
      })
      return total
    }
  }
})
