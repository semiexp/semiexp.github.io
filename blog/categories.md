---
layout: default
title: Blog - Categories
ja_version: categories_ja.html
---
{% assign dep = {{{{{{page.url | append:"a"}} | split:"/"}} | size }} %}{% assign dep = {{dep | minus:2 }} %}{% assign relative = '' %}{% for i in (1..dep) %}{% assign relative = {{relative | append:'../'}}%}{% endfor %}
## Archive
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
