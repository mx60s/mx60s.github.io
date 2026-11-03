---
layout: default
title: Blog
permalink: /blog/
---

<h1>Blog</h1>

<ul class="post-list">
{%- for post in site.posts %}
  <li>
    <span class="date">{{ post.date | date: "%B %-d, %Y" }}</span>
    {%- if post.external_url %}
    <a class="title" href="{{ post.external_url }}" target="_blank" rel="noopener">{{ post.title }}</a>
    <span class="tag" title="Opens the project in a new tab">project ↗</span>
    {%- else %}
    <a class="title" href="{{ post.url }}">{{ post.title }}</a>
    {%- endif %}
    {%- assign blurb = post.description | default: post.excerpt | strip_html | strip | truncatewords: 40 -%}
    {%- if blurb != "" %}<p class="excerpt">{{ blurb }}</p>{% endif %}
  </li>
{%- endfor %}
</ul>
