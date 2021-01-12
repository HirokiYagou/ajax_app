import { createApp } from "vue";
import Posts from "../posts.vue";

document.addEventListener("DOMContentLoaded", () => {
  const app = createApp(Posts);
  app.mount('#app');
});
