---
layout: default
title: Blog Posts
---

<div class="max-w-4xl mx-auto">
  <div class="mb-8">
    <p class="text-lg text-gray-600">Thoughts, tips, and insights from my development journey.</p>
  </div>

  <div class="space-y-6">
    <% collections.posts.resources.select { |post| post.data.categories == "blog" }.sort_by(&:date).reverse.each do |post| %>
      <article class="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
        <header class="mb-4">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">
            <a href="<%= relative_url post.relative_url %>" class="hover:text-blue-600 transition-colors">
              <%= post.data.title %>
            </a>
          </h2>
          <div class="flex items-center text-gray-500 text-sm">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <time datetime="<%= post.date.iso8601 %>"><%= post.date.strftime("%B %d, %Y") %></time>
          </div>
        </header>
        
        <div class="text-gray-700 mb-4">
          <%= truncate(strip_html(post.content), length: 200) %>
        </div>
        
        <a href="<%= relative_url post.relative_url %>" class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm">
          Read more
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </article>
    <% end %>
  </div>
</div>
