---
layout: default
title: Blog - Categories
ja_version: categories_ja.html
---
{% assign dep = page.url | append:"a" | split:"/" | size %}{% assign dep = dep | minus:2 %}{% assign relative = '' %}{% for i in (1..dep) %}{% assign relative = relative | append:'../' %}{% endfor %}
<script type="text/javascript" src="{{relative}}js/jquery-3.2.1.min.js"></script>
## Archive
{% assign tag_counter = 1 %}
<ul>
{% for ctg in site.categories %}
  <li>
    <a href="javascript:void(0)" onClick="$('#category-{{tag_counter}}').slideToggle();"> {{ctg[0]}} </a>
<ul id="category-{{ tag_counter }}" style="display:none">
{% assign tag_counter = tag_counter | plus: 1 %}
{% assign ctid = ctg[0] %}
{% for post in site.categories[ctid] %}
<li> <a href="{{relative}}{{ post.url | replace_first:'/',''}}">{{ post.date | date:'%Y-%m-%d'}} : {{ post.title }}</a> </li>
{% endfor %}
</ul>
  </li>
{% endfor %}
</ul>
