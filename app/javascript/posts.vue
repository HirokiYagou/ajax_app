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
export default {
  data() {
    return {
      posts: {},
    }
  },
  created() {
    this.posts = sharedData.posts
  }
}
</script>

<style scoped>
</style>