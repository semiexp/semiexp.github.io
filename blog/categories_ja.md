---
layout: default_ja
title: ブログ - カテゴリ別
en_version: categories.html
---
{% assign dep = {{{{{{page.url | append:"a"}} | split:"/"}} | size }} %}{% assign dep = {{dep | minus:2 }} %}{% assign relative = '' %}{% for i in (1..dep) %}{% assign relative = {{relative | append:'../'}}%}{% endfor %}
<script type="text/javascript" src="{{relative}}js/jquery-3.2.1.min.js"></script>
## アーカイブ
<ul>
{% for ctg in site.categories %}
  <li>
    <a href="javascript:void(0)" onClick="$('#category-{{ctg[0]}}').slideToggle();"> {{ctg[0]}} </a>
<ul id="category-{{ctg[0]}}" style="display:none">
{% assign ctid = ctg[0] %}
{% for post in site.categories[ctid] %}
<li> <a href="{{relative}}{{ post.url | replace_first:'/',''}}">{{ post.date | date:'%Y-%m-%d'}} : {{ post.title }}</a> </li>
{% endfor %}
</ul>
  </li>
{% endfor %}
</ul>
