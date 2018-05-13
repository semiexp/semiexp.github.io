---
layout: default_ja
title: スリザーリンク問題集
title_en: Slitherlink Problems
group: idx_ja
en_version: index.html
---
ここでは，スリザーリンクの問題で遊ぶことができます．

問題は，[Penciloid](https://github.com/semiexp/penciloid) スリザーリンク自動生成器により生成されました．
以前 (2011 年) のバージョンに比べると，自動生成アルゴリズムはかなり改善しました．
現在では 10 × 10 の問題なら多くの (適切な)ヒント配置に対して 0.1～0.2 秒程度で生成できる性能があります．

## 問題一覧
{% assign dep = page.url | append:"a" | split:"/" | size %}{% assign dep = dep | minus:2 %}{% assign relative = '' %}{% for i in (1..dep) %}{% assign relative = relative | append:'../' %}{% endfor %}
{% assign problem_pages = site.pages | where: "layout", "slitherlink" %}
{% assign sorted_problems = problem_pages | sort: "id" %}
<ul>
<li>10 * 10<ul>
{% assign prob_of_size = sorted_problems | where: "size", "10x10" %}
{% for page in prob_of_size %}
<li><a href="{{relative}}{{ page.url | replace_first:'/',''}}">{{page.title}}</a></li>
{% endfor %}
</ul></li>
<li>14 * 24<ul>
{% assign prob_of_size = sorted_problems | where: "size", "14x24" %}
{% for page in prob_of_size %}
<li><a href="{{relative}}{{ page.url | replace_first:'/',''}}">{{page.title}}</a></li>
{% endfor %}
</ul></li>
</ul>
