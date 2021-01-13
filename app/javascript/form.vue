<template>
<div>
  <p>{{ message }}</p>
  <form @submit="submit">
    <button type="submit" id="submit">投稿する</button>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      message: 'たまプラーザ',
    }
  },
}
</script>

<style scoped>
</style>