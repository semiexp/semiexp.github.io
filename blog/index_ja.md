---
layout: default_ja
title: ブログ
title_en: Blog
group: idx_ja
en_version: index.html
---
## 最近の投稿
{% assign dep = {{{{{{page.url | append:"a"}} | split:"/"}} | size }} %}{% assign dep = {{dep | minus:2 }} %}{% assign relative = '' %}{% for i in (1..dep) %}{% assign relative = {{relative | append:'../'}}%}{% endfor %}
<ul>
{% for post in site.posts limit:5 %}
  <li>
    <a href="{{relative}}{{ post.url | replace_first:'/',''}}">{{ post.date | date:'%Y-%m-%d'}} : {{ post.title }}</a>
  </li>
{% endfor %}
</ul>

## すべての投稿

- [アーカイブ](archive_ja.html)
- [カテゴリ別](categories_ja.html)
