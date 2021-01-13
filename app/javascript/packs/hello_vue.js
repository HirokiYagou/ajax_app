import { createApp } from "vue";
import Form from "../form.vue";
import Posts from "../posts.vue";

import '../axios_config';

document.addEventListener("DOMContentLoaded", () => {
  const form = createApp(Form);
  const posts = createApp(Posts);
  form.mount('#formNew')
  posts.mount('#posts');
});
