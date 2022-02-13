# 作るアプリ

## 家計簿アプリ

### 機能

- CRUD

1. 投稿機能
2. ログインで使用ユーザー全員が投稿可能にする
3. コメントをつけて、家計簿の使用用途などを管理しやすくする

### 使用技術

- React
- Redux(ReduxToolKit)
- MaterialUI
- Typescript
- Express(Node.js)
- mongoDB

# 途中で出た疑問

## Express の Typescript で書くときのサーバーの立ち上げ方

サーバーは Typescript は読めるのか？
Tsnode を使用してサーバーを立ち上げた
MongoDB を Typescript で書く際のやり方

## MaterialUI のデフォルトの外し方

v5 からデフォルトでスタイルが当たるようになった
カスタマイズ
Global.css などを作成し import
https://mui.com/guides/interoperability/#global-css

## ReduxToolkit の非同期関数の処理

createAsyncThunk を使う
この時 Slice 内は「addcase」を使うことで従来の Switch に当たる処理が可能
Reducer は ExtraReducer を使うこと！

## Redux toolkit の Slice、Action、Reducer の概念

### CreateAsyncThnk

ReduxToolKit 用の非同期用の関数

### CreateSlice

CreateAction
CreateReducer

## onSubmit での Post ができない

204 no data content が返ってきている
調べたところ Cors の問題らしい
記事で一旦対策を試した
200 が返ってきているが、依然としてデータの POST ができない
Content-Type: application/json; charset=utf-8
application/json になっていることが原因かも？

ちょっと違うかも?
ただ、CORS の勉強はできた
Preflight request になると問題

- https://zenn.dev/luvmini511/articles/d8b2322e95ff40
- https://qiita.com/nnishimura/items/1f156f05b26a5bce3672
- https://labor.ewigleere.net/2020/10/13/cors_preflight_request_verification/

**原因判明**
Body-parser が不足していた
調べたときにバージョンアップで必要なくなったと聞いていたが、加えたところ完結
もう一度調べてみよう

## deploy 時にエラー発生

Nodemon の仕様
おそらく Typescript から Javascript へのコンパイルが必要
