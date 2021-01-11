// function posts() {
//   Vue.createApp({
//     data: function() {
//       return {
//         posts: [],
//       }
//     },
//     methods: {
//       fetchPost: function() {
//         const self = this
//         axios
//           .get("https://jsonplaceholder.typicode.com/posts")
//           .then(function(response) {
//             self.posts = response.data
//           })
//       },
//     },
//     mounted: function() {
//       this.fetchPost()
//     },
//   }).mount('#app')
// }

// document.addEventListener('DOMContentLoaded', posts)