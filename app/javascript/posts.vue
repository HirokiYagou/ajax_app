<template>
<div>
  <div v-for="post in posts" :key="post.id" class="post" :data-id="post.id" :data-check="post.checked">
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
import qs from 'qs';

export default {
  data() {
    return {
      posts: {},
    }
  },
  created() {
    this.posts = sharedData.posts
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