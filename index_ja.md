---
layout: default_ja
title: semiexp.net
group: home
en_version: index.html
---
## 最近の投稿
<ul>
{% for post in site.posts limit:5 %}
  <li>
    <a href="{{relative}}{{ post.url | replace_first:'/',''}}">{{ post.date | date:'%Y-%m-%d'}} : {{ post.title }}</a>
  </li>
{% endfor %}
</ul>

## Contents
- [アプリ・ツール](games/index_ja.html)
- [ブログ](blog/index_ja.html)
- [文書およびスライド](docs/index_ja.html)

## About

<div style="display: flex">
  <img src="{{relative}}img/icon.png" style="height:150px; border-radius: 50%" />

  <div>
    <ul>
      <li>Twitter: <a href="https://twitter.com/semiexp">@semiexp</a></li>
      <li>AtCoder: <a href="https://atcoder.jp/users/semiexp" style="color:#92D050">semiexp</a></li>
      <li><a href="https://github.com/semiexp/">GitHub</a></li>
      <li><a href="https://zenn.dev/semiexp">Zenn</a></li>
    </ul>
  </div>
</div>
