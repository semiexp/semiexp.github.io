---
layout: default
title: semiexp.net
group: home
ja_version: index_ja.html
---
## Recent posts
<ul>
{% for post in site.posts limit:5 %}
  <li>
    <a href="{{relative}}{{ post.url | replace_first:'/',''}}">{{ post.date | date:'%Y-%m-%d'}} : {{ post.title }}</a>
  </li>
{% endfor %}
</ul>

## Contents
- [Blog](blog/index.html)
- [Documents & Slides](docs/index.html)
- [Games & Puzzles](games/index.html)

## About
- Twitter: [@semiexp](https://twitter.com/semiexp)
- TopCoder: <span style="color:red">semiexp</span>
- Blog: [Algorithmer's note](http://d.hatena.ne.jp/semiexp/)
- github: [semiexp](https://github.com/semiexp/)
