<template>
  <div class="publicComment">
    <h2>发表评论：</h2>
    <textarea v-model="content" cols="30" placeholder="请输入评论内容" maxlength="200" rows="3"></textarea>
    <mt-button size="large" type="primary" @click="myComment">发表评论</mt-button>
    <ul>
      <li v-for="(item, index) in commentsList" :key="index">
        <div>{{index+1}}楼 &nbsp;&nbsp; 用户: {{item.user_name}} &nbsp;&nbsp; 发表时间: {{item.add_time | formatDate}}</div>
        <p>{{item.content}}</p>
      </li>
    </ul>
    <mt-button size="large" type="default" icon="more" class="loaderMore" @click="loaderMore">加载更多</mt-button>
  </div>
</template>
<script>
  import {Toast} from 'mint-ui'
  export default {
    props: ['id'],
    data () {
      return {
        commentsList: [],
        pageindex: 1,
        content: ''
      }
    },
    methods: {
      getComments (pageindex) {
        this.$http.get('api/getcomments/' + this.id + '?pageindex=' + pageindex).then(res => {
          if (res.body.status === 0) {
            this.commentsList = this.commentsList.concat(res.body.message)
          } else {
            Toast('网络错误')
          } 
        })
      },
      loaderMore () {
        this.pageindex++
        this.getComments(this.pageindex)
      },
      myComment () {
        // 字符串的 trim() 方法是去掉空格
        if (this.content.trim().length === 0) return Toast('评论不能为空')
        this.$http.post('api/postcomment/' + this.id, {content: this.content}).then(res => {
          if (res.body.status === 0) {
            Toast('评论发表成功')
            let commentObj = {
              content: this.content,
              user_name: '匿名用户',
              add_time: Date.now()
            }
            this.commentsList.unshift(commentObj)
            this.content = ''
          } else {
            Toast('网络错误')
          }
        })
      }
    },
    created () {
      this.getComments(1)
    }
  }
</script>

<style lang="scss" scoped>
  .publicComment {
    padding: 1rem;
    h2 {
      font-size: 1.8rem;
      border-bottom: .1rem solid rgba(0, 0, 0, .2);
      color: #666;
      padding: .5rem 0;
    }
    textarea {
      font-size: 1.4rem;
      margin-bottom: 0;
      box-sizing: border-box;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: 12px;
      li {
        border:  .1rem solid rgba(0, 0, 0, .2);
        box-sizing: border-box;
        margin: .5rem 0;
        div {
          padding: .5rem .5rem;
          box-sizing: border-box;
          background: rgba(0, 0, 0, .2);
          margin-bottom: .5rem;
        }
        p {
          text-indent: 2em;
          padding: .5rem;
          color: #333;
        }
      }
    }
  }
</style>