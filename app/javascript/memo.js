// function memo() {
//   const submit = document.getElementById("submit");
//   submit.addEventListener("click", (e) => {
//     console.log(1234)
//     const formData = new FormData(document.getElementById("form"));
//     const XHR = new XMLHttpRequest();
//     // 初期化（HTTPメソッド、パス、？）
//     XHR.open("POST", "/posts", true);
//     // レスポンスの形式
//     XHR.responseType = "json";
//     // リクエスト送信！
//     XHR.send(formData);
//     // レスポンス！！
//     XHR.onload = () => {
  //       // HTTPステータスチェック
  //       if (XHR.status !== 200) {
    //         alert(`Error ${XHR.status}: ${XHR.statusText}`);
    //         return null;
    //       }
    //       // レスポンスのjsonデータを代入
    //       const item = XHR.response.post;
    //       const list = document.getElementById("list");
    //       const formText = document.getElementById("content");
    //       const HTML = `
    //         <div class="post" data-id=${item.id}>
    //           <div class="post-date">
    //             投稿日時：${item.created_at}
    //           </div>
    //           <div class="post-content">
    //             ${item.content}
    //           </div>
    //         </div>`;
    //       list.insertAdjacentHTML("afterbegin", HTML);
    //       formText.value = "";
    //     };
    //     e.preventDefault();
    //   });
    // }
    
function memo() {
  Vue.createApp({
    data: function() {
      return {
        post: '',
      }
    },
    methods: {
      fetchPost: function() {
        const formData = new FormData(document.getElementById("form"));
        axios
          .post('/posts', formData)
          .then(function(response) {
            console.log(response)
          })
          .catch(function(error) {
            console.log(error)
          })

      }
    },
  }).mount('#app')
}


document.addEventListener("DOMContentLoaded", memo);