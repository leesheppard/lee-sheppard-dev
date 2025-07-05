---
layout: page
title: Experience
---

<h2>Experience</h2>
<ul>
  <% collections.posts.resources.select { |post| post.data.categories.include?("experience") }.each do |post| %>
    <li>
      <a href="<%= post.relative_url %>"><%= post.data.title %></a>
    </li>
  <% end %>
</ul>
