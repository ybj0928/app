<template>
  <div :id="'name' + id" class="mui-numbox" data-numbox-min='0'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input @change="changeCount" readonly class="mui-input-numbox" :value="count" type="number" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
  import mui from '../../../lib/MUI/js/mui'
  export default {
    props: ['max', 'count', 'id'],
    data () {
      return {
        maxNum: 0,
      }
    },
    mounted () {
      mui('.mui-numbox').numbox()
    },
    methods: {
      changeCount () {
        this.$emit('getCount', mui('.mui-numbox').numbox().getValue())
        if (this.id) {
          console.log(mui('#name' + this.id).numbox().getValue())
          this.$store.commit('carAddGoods', {id: this.id, count: mui('#name' + this.id).numbox().getValue()})
        }
      }
    },
    watch: {
      max (newVal, oldVal) {
        this.maxNum = this.max
        mui('.mui-numbox').numbox().setOption('max', newVal)
      }
    }
  }
</script>