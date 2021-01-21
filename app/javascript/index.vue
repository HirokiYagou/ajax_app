<template>
<div>
  <button @click="openForm" type="button" id="submit" class="button">投稿する</button>

  <div class="modal-container" v-show="isVisible">
    <div class="modal-overlay" @click.self="closeForm">
      <div class="modal-body">
        <form @submit.prevent="submit" class="modal-form-container">
          <input type="textarea" placeholder="いまどうしてる？" v-model="message" class="textarea" required>
          <input type="file" name="post[image]" @change="selectImage" id="post-image">
          <button type="submit" :class="[empty, 'button']">投稿する</button>
        </form>
        <p>
          <button class="button button--close" @click="closeForm">CLOSE</button>
        </p>
      </div>
    </div>
  </div>

  <posts :new_post="post"></posts>
</div>
</template>

<script>
import axios from 'axios'
import Posts from './posts.vue'
import { csrfToken } from "@rails/ujs"

export default {
  components: { 'posts':Posts },
  data() {
    return {
      message: '',
      uploadImage: null,
      isVisible: false,
      post: {},
    }
  },
  computed: {
    empty: function() {
      if (this.message) {
        return 'filled'
      }
      return 'empty'
    }
  },
  methods: {
    selectImage: function(e) {
      const files = e.target.files
      this.uploadImage = files[0]
    },
    submit: function() {
      const formData = new FormData()
      formData.append('post[content]', this.message)
      formData.append('post[image]', this.uploadImage)
      fetch('/posts', {
          method: 'POST',
          headers: {
            'X-CSRF-Token': csrfToken(),
          },
          body: formData,
        })
        .then(response => {
          // console.log(response.json())
          return response.json()
        })
        .then(data => {
          // console.log(data)
          this.post = data
          this.closeForm()
        })
        .catch(error => console.log(error))
    },
    openForm: function() {
      this.isVisible = true
    },
    closeForm: function() {
      this.isVisible = false
      this.message = ''
      this.uploadImage = null
    },
  },
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
  height: 300px;
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

.modal-form-container {
  width: 100%;
}

.textarea {
  display: block;
  width: 100%;
  height: 50px;
  line-height: 10px;
  border: none;
  padding: 3px;
  font-size: 18px;
}

.button {
  padding: 8px 16px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  border: none;
  background-color: lightgray;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
}

form> button {
  display: block;
  margin-top: 10px;
}

/* input[type=text] {
  heige
} */

.empty {
  opacity: 0.5;
}
</style>