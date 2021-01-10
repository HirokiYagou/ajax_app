<template>
<div>
  <p>
    {{ message }}
  </p>

  <!-- class="post" data-id="post.id" data-check="post.checked" -->
  <div v-for="post in posts" :key="post.id">
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
      message: "Hello Vue!",
      posts: [],
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/api/posts.json')
      .then(response => (self.posts = response.data))
  },
  mounted: function() {
    this.fetchItem()
  }
}
</script>

<style scoped>
p {
  background-color: azure;
  font-size: 2em;
  text-align: left;
}
</style>