<template>
<div>
  <button @click="openForm" type="button" id="submit">投稿する</button>

  <div class="modal-container" v-show="isVisible">
    <div class="modal-overlay" @click.self="closeForm">
      <div class="modal-body">
        <form @submit="submit" class="modal-imgae-container" :class="{'isLoaded': isThumbnailLoaded}">
          <input type="text" placeholder="" v-model="message" required>
          <button type="submit" @submit="submit">投稿する</button>
        </form>
        <p>
          <button class="button button--close" @click="closeForm">CLOSE</button>
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      message: '',
      posts: [],
      isVisible: false
    }
  },
  methods: {
    submit: function() {
      axios
        .post('/posts', {
          content: this.message
        })
        .then(response => this.posts.unshift(response.data))
        .catch(error => console.log(error))
    },
    openForm: function() {
      this.isVisible = true
    },
    closeForm: function() {
      this.isVisible = false
    },
  },
  created() {
    this.posts = sharedData.posts
  }
}
</script>

<style scoped>
.modal-container {
  position: relative;
  z-index: 9998;
  width: 100%;
  height: 100%;
}

.modal-body {
  position: relative;
  z-index: 9999;
  box-sizing: border-box;
  width: 100%;
  max-width: 640px;
  padding: 16px;
  margin: auto;
  background-color: #fff;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  overflow: auto;
  width: 100%;
  height: 100%;
  padding: 20px 60px;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>