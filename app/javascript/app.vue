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
import qs from 'qs';

export default {
  data() {
    return {
      message: "Hello Vue!",
      posts: [],
      postsCount: 0,
    }
  },
  methods: {
    fetchItem: function() {
      let params = { ...this.query, offset: this.offset };
      let path = '/posts.json?' + qs.stringify(params);
      axios.get(path).then((res) => {
        this.posts = this.posts.concat(res.data.posts);
        // this.postsCount = res.data.posts_count;
      });
    },
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