---
layout: search
title: Search
sitemap: false
---

<ul id="search-results"></ul>

<script>
  window.store = {
    {% for post in site.posts %}
      "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "description": "{{ post.description | xml_escape }}",
        "date": "{{ post.date | date: '%d/%m/%Y' }}",
        "author": "{{ post.author | xml_escape }}",
        "tags": "{{ post.categories | join: ', ' }}",
        "image": "{{ post.image.path | prepend: site.baseurl }}",
        "url": "{{ post.url | prepend: site.baseurl | xml_escape }}",
        "content": {{ post.content | strip_html | strip_newlines | jsonify }}
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
</script>

<script src="{{ "/js/lunr/lunr.min.js" | prepend: site.baseurl }}"></script>
<script src="{{ "/js/search/search.js" | prepend: site.baseurl }}"></script>
