---
layout: default
title: Slitherlink Problems
group: idx
ja_version: index_ja.html
---
Here you can play some Slitherlink problems.

Problems are made by [Penciloid](https://github.com/semiexp/penciloid) Slitherlink Generator.
The generator has been highly improved, compared to the previous one (in 2011).
Now it can produce a problem (10x10) of any (possible) given placement of hints in approximately 0.1[sec].

## List of problems
{% assign dep = {{{{page.url | split:"/"}} | size }} %}{% assign dep = {{dep | minus:2 }} %}{% assign relative = '' %}{% for i in (1..dep) %}{% assign relative = {{relative | append:'../'}}%}{% endfor %}
{% assign problem_pages = (site.pages | where: "layout", "slitherlink") %}
{% assign sorted_problems = (problem_pages | sort: "title") %}
<ul>
<li>10 * 10<ul>
{% assign prob_of_size = (sorted_problems | where: "size", "10x10") %}
{% for page in prob_of_size %}
<li><a href="{{relative}}{{ page.url | replace_first:'/',''}}">{{page.title}} {{page.id}}</a></li>
{% endfor %}
</ul>
</ul>

