<template>
<div v-for="post in posts" :key="post.id" @click="checked(post)" :data-id="post.id" :data-check="post.checked" class="post">
  <div class="post-date">
    投稿日時：{{ post.created_at }}
  </div>
  <div class="post-content">
    {{ post.content }}
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    fetchPosts: function() {
      axios
        .get('/posts.json')
        .then(response => {
          this.posts = response.data
        })
        .catch(error => console.log(error))
    },
    checked: function(post) {
      axios
        .get(`posts/${post.id}`)
        .then(response => {
          post.checked = response.data.post.checked
        })
    },
  },
  mounted: function() {
    this.fetchPosts()
  },
}
</script>

<style scoped>
</style>