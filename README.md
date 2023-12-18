# Wijmo FlexGridバグ報告用レポジトリ

## 発生環境

| Name | Version |
|---|---|
| Wijmo | 2023v1（2021v3, 2022v1, 2022v2では発生しない） |
| Browser | Edge 120（Chrome 120では発生しない） |
| Node.js | 18.18.2 |
| npm | 9.8.1 |


## 発生現象

FlexGridのItemsSourceに対してデータを後からバインドすると、縦横のスクロールバーが表示されない場合があります。
特に開発者ツールを開いた状態で画面をロードすると、表示されない可能性が高いです。

スクロールバーが表示されない場合は `div[wj-part="root"]` の `overflow` が `hidden` となっています（期待値は `auto` ）


## サンプルの実行

```
npm install
npm run dev
```
