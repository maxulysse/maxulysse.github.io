---
layout: page
title: Archive
description: All post entries ordered by date.
---

<div class="card">
  <div class="card-header"><h1>Archive</h1></div>
  <div class="card-block">
{% for post in site.posts %}
  {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
  {% capture this_month %}{{ post.date | date: "%B" }}{% endcapture %}
  {% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}
  {% capture next_month %}{{ post.previous.date | date: "%B" }}{% endcapture %}
  {% if forloop.first %}
  <div class="card">
    <div class="card-header"><h4>Year {{ this_year }}</h4></div>
    <div class="card-block">
      <h5>{{ this_month }}</h5>
      <ul>
  {% endif %}
      <li>
        <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>  •  <span>{{ post.date | date: "%d/%m/%Y" }}</span>
      </li>
  {% if forloop.last %}
      </ul>
    </div>
  </div>
  {% else %}
    {% if this_year != next_year %}
      </ul>
    </div>
  </div>
  <div class="card">
    <div class="card-header"><h4>Year {{ next_year }}</h4></div>
    <div class="card-block">
      <h5>{{ next_month }}</h5>
      <ul>
    {% else %}
      {% if this_month != next_month %}
      </ul>
      <h5>{{ next_month }}</h5>
      <ul>
      {% endif %}
    {% endif %}
  {% endif %}
{% endfor %}
  </div>
</div>
