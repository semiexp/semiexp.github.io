---
layout: default_ja
title: ブログ - カテゴリ別
en_version: categories.html
---
{% assign dep = {{{{page.url | split:"/"}} | size }} %}{% assign dep = {{dep | minus:2 }} %}{% assign relative = '' %}{% for i in (1..dep) %}{% assign relative = {{relative | append:'../'}}%}{% endfor %}
## アーカイブ
<ul>
{% for ctg in site.categories %}
  <li>
    [ {{ctg[0]}} ]
<ul>
{% assign ctid = ctg[0] %}
{% for post in site.categories[ctid] %}
<li> <a href="{{relative}}{{ post.url | replace_first:'/',''}}">{{ post.date | date:'%Y-%m-%d'}} : {{ post.title }}</a> </li>
{% endfor %}
</ul>
  </li>
{% endfor %}
</ul>
