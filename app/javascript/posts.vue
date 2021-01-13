<template>
<div>
  <div v-for="post in posts" :key="post.id" @click="checked" :data-id="post.id" :data-check="post.checked" class="post">
    <div class="post-date">
      投稿日時：{{ post.created_at }}
    </div>
    <div class="post-content">
      {{ post.content }}
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      posts: {},
    }
  },
  methods: {
    checked: function() {
      const postId = post.id
      axios
        .get(`posts/${postId}`)
        .then(function(response) {
          console.log(response)
        })
    },
  },
  created() {
    this.posts = sharedData.posts
  },
  mounted() {
    axios
      .get('/')
      .then(function(response) {
        // this.posts = response.data
        console.log(response)
      })
  },
}
</script>

<style scoped>
</style>