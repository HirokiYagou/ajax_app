# アプリの概要
* 基本的なJavaScriptによるAjax通信を実装
* その後LINE MESSAGING APIを導入し、LINE（スマホ）から投稿できる機能を実装
* Vue.jsを用いてUIをコンポーネント化(HTML,CSS,JavaScriptを単一ファイル化)
  * posts#indexアクションのレスポンスは単一コントローラーによる①HTML②jsonの二段階実装
  * 入力フォームをモーダル化（Twitterぽく）
  * CSRF対策実装
* 全てのAjax通信をVue.jsにより実装
