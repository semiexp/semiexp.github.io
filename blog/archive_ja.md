---
layout: default_ja
title: ブログ - アーカイブ
en_version: archive.html
---
{% assign dep = {{{{{{page.url | append:"a"}} | split:"/"}} | size }} %}{% assign dep = {{dep | minus:2 }} %}{% assign relative = '' %}{% for i in (1..dep) %}{% assign relative = {{relative | append:'../'}}%}{% endfor %}
## アーカイブ
<ul>
{% for post in site.posts %}
  <li>
    <a href="{{relative}}{{ post.url | replace_first:'/',''}}">{{ post.date | date:'%Y-%m-%d'}} : {{ post.title }}</a>
  </li>
{% endfor %}
</ul>
