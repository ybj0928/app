<template>
  <div class="mui-numbox" data-numbox-min='0'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input readonly class="mui-input-numbox" v-model="count" type="number" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
  import mui from '../../../lib/MUI/js/mui'
  export default {
    data () {
      return {
        maxNum: 0,
        count: 1
      }
    },
    created () {
    },
    props: ['max'],
    watch: {
      max (newVal, oldVal) {
        this.maxNum = this.max
        mui('.mui-numbox').numbox().setOption('max', newVal)
      }
    }
  }
</script>