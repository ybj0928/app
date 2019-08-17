<template>
  <div>
    我是公用部分
    <button type="button" class="mui-btn mui-btn-royal">hello</button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {}
  },
  methods: {},
  created () {
    Toast({
      message: '成功',
      iconClass: 'glyphicon glyphicon-heart-empty',
      duration: -1
    })
  }
}
</script>