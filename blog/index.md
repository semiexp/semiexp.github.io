---
layout: default
title: Blog
group: idx
ja_version: index_ja.html
---
## Recent posts
{% assign dep = page.url | append:"a" | split:"/" | size %}{% assign dep = dep | minus:2 %}{% assign relative = '' %}{% for i in (1..dep) %}{% assign relative = relative | append:'../' %}{% endfor %}
<ul>
{% for post in site.posts limit:5 %}
  <li>
    <a href="{{relative}}{{ post.url | replace_first:'/',''}}">{{ post.date | date:'%Y-%m-%d'}} : {{ post.title }}</a>
  </li>
{% endfor %}
</ul>

## All posts

- [Archive](archive.html)
- [Categories](categories.html)
