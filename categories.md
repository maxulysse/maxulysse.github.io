---
layout: page
title: Post by category
description: All post entries ordered by categories.
---

<div class="card">
  <div class="card-header"><h1>Categories</h1></div>
  <div class="card-block">
{% assign tags = site.categories | sort %}
{% assign sorted_posts = site.posts | sort: 'title' %}
    <div>
{% for tag in tags %}
      <a href="#{{ tag | first | slugify }}">{{ tag | first | replace: '-', ' ' }} <span class="badge badge-default">{{ tag | last | size }}</span></a>{% if forloop.last == false %} • {% endif %}
{% endfor %}
    </div>
  </div>
  <hr>
  <div class="card-block">
{% for tag in tags %}
    <p><a name="{{ tag | first | slugify }}"></a>&nbsp;</p>
    <h3 class="archivetitle">
      <span><i class="fa fa-tag" aria-hidden="true"></i></span>
      <span>{{ tag | first | replace:'-', ' ' }}</span>
      <span class="badge badge-default">{{ tag | last | size }}</span>
    </h3>
    <ul>
  {% for post in sorted_posts %}
    {% if post.categories contains tag[0] %}
      <li><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a> {% if post.author %} • {{ post.author }}{% endif %}{% if post.date %} • {{ post.date | date: "%B %e, %Y" }}{% endif %}</li>
    {% endif %}
  {% endfor %}
    </ul>
{% endfor %}
  </div>
</div>
