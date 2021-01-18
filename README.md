# アプリの概要
* 単一テーブルのRails基本アプリに下記追加実装
  * LINE MESSAGING API
  * Vue.jsによるコンポーネント化(NPMでインストール)
  
# デプロイ
https://vue-lineapp.herokuapp.com/
Ajaxはaxiosによる
  
* 同じ挙動のアプリでVueをCDN経由で実装しているものがこちら
  * Github https://github.com/HirokiYagou/vue_lineapp
  * デプロイ　https://vue-lineapp2.herokuapp.com/
  * こちらはAjaxはfetchAPIによる

# 特徴
* LINE MESSAGING APIを導入し、LINE（スマホ）から投稿できる機能を実装
* Vue.jsを用いてUIをコンポーネント化(HTML,CSS,JavaScriptを単一ファイル化)
  * posts#indexアクションのレスポンスは単一コントローラーによる①HTML②jsonの二段階実装
  * 入力フォームをモーダル化（Twitterぽく）
* 全てのAjax通信をVue.jsにより実装(axios)
  * CSRF対策実装
* Vue.jsの学習
  * 今後の応用の試金石として
