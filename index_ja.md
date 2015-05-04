---
layout: default_ja
title: semiexp's labo
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
- [ブログ](blog/index.html)
- [文書およびスライド](docs/index.html)
- [ダウンロード](downloads/index.html)

## About
- Twitter: [@semiexp](https://twitter.com/semiexp)
- TopCoder: <span style="color:red">semiexp</span>
- Blog: [Algorithmer's note](http://d.hatena.ne.jp/semiexp/)
- github: [semiexp](https://github.com/semiexp/)
