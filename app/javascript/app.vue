<template>
  <p>
    {{ message }}
  </p>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue!"
    }
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