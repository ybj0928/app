<template>
  <div class="goodsList">
    <div class="goodsItem"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .goodsList {
    padding: .5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .goodsItem {
      width: 49%;
      min-height: 20rem;
      border: 1px solid #000;
      margin-top: .5rem;
      &:nth-child(1),  &:nth-child(2){
        margin-top: 0;
      }
    }
  }
</style>