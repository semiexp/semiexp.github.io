---
layout: post
title: Jekyll で相対パスを使う
group: blog
date: 2014-04-29
categories: [Programming]
---
普通の使い方では Jekyll で相対パスが必要になることはあまりないのかもしれないが，
リンクが全部 /hoge/... みたいな形になっていると「ローカルではブラウザでそのままだと見られない」「/ 直下にページを置けないレンタルサーバーで使えない」みたいな問題が起きる．

相対パスを使えるようにするプラグインは [存在する](https://jclement.ca/2013/12/06/relative_jekyll_paths.html) が，GitHub pages では好き勝手にプラグインを追加できないので，liquid だけで相対パスを使えるようにした．

## コード
{% raw %}
	{% assign dep = {{{{page.url | split:"/"}} | size }} %}
	{% assign dep = {{dep | minus:2 }} %}
	{% assign relative = '' %}
	{% for i in (1..dep) %}
	{% assign relative = {{relative | append:'../'}}%}
	{% endfor %}
{% endraw %}
## 使用法
\{\{ relative \}\} をパスの前に付けるだけ．
ページの位置に応じて，適切な個数の ../ が挿入される．

## 注意
url が /hoge/piyo のようにフォルダ名になっていて，index.html が補われたような場合には上のコードは正しく機能しない．

また，layout に上のコードを入れた場合でも，content 部分では \{\{ relative \}\} が未定義になるらしく，使うページごとにこのコードを挿入する必要があるらしい．
