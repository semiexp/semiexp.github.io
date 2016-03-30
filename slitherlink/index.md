---
layout: default
title: Slitherlink Problems
group: idx
ja_version: index_ja.html
---
Here you can play some Slitherlink problems.

Problems are made by [Penciloid](https://github.com/semiexp/penciloid) Slitherlink Generator.
The generator has been highly improved, compared to the previous one (in 2011).
It produces a problem (10x10) of most (appropriate) placement of clues in approximately between 0.1 and 0.2 seconds.

## List of problems
{% assign dep = {{{{{{page.url | append:"a"}} | split:"/"}} | size }} %}{% assign dep = {{dep | minus:2 }} %}{% assign relative = '' %}{% for i in (1..dep) %}{% assign relative = {{relative | append:'../'}}%}{% endfor %}
{% assign problem_pages = (site.pages | where: "layout", "slitherlink") %}
{% assign sorted_problems = (problem_pages | sort: "id") %}
<ul>
<li>10 * 10<ul>
{% assign prob_of_size = (sorted_problems | where: "size", "10x10") %}
{% for page in prob_of_size %}
<li><a href="{{relative}}{{ page.url | replace_first:'/',''}}">{{page.title}}</a></li>
{% endfor %}
</ul>
<li>14 * 24<ul>
{% assign prob_of_size = (sorted_problems | where: "size", "14x24") %}
{% for page in prob_of_size %}
<li><a href="{{relative}}{{ page.url | replace_first:'/',''}}">{{page.title}}</a></li>
{% endfor %}
</ul>
</ul>
