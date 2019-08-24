<template>
  <div>
    <public-comment :id="$route.params.id"></public-comment>
  </div>
</template>

<script>
  import publicComment from '../common/publicComment.vue'
  export default {
    data () {
      return {}
    },
    components: {
      publicComment
    }
  }
</script>