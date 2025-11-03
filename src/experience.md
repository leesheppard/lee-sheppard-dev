---
layout: default
title: Professional Experience
---

<div class="max-w-6xl mx-auto">
  <div class="mb-12 text-center">
    <p class="text-lg text-gray-600 max-w-3xl mx-auto">
      A chronological overview of my professional journey, showcasing the diverse roles and technologies I've worked with throughout my career.
    </p>
  </div>

  <div class="space-y-8">
    <% collections.posts.resources.select { |post| post.data.categories == "experience" }.sort_by(&:date).reverse.each_with_index do |post, index| %>
      <div class="relative">
        <!-- Timeline line -->
        <% unless index == collections.posts.resources.select { |p| p.data.categories == "experience" }.length - 1 %>
          <div class="absolute left-8 top-16 w-0.5 h-full bg-gray-200 -z-10"></div>
        <% end %>
        
        <!-- Timeline dot -->
        <div class="absolute left-6 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm"></div>
        
        <!-- Content -->
        <div class="ml-16">
          <article class="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-8">
            <header class="mb-6">
              <div class="flex items-start justify-between mb-4">
                <h2 class="text-2xl font-bold text-gray-900">
                  <a href="<%= relative_url post.relative_url %>" class="hover:text-blue-600 transition-colors">
                    <%= post.data.title %>
                  </a>
                </h2>
                <div class="text-right">
                  <div class="text-sm text-gray-500 mb-1">
                    <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <%= post.date.strftime("%B %Y") %>
                  </div>
                </div>
              </div>
            </header>
            
            <div class="prose prose-gray max-w-none mb-6">
              <%= truncate(strip_html(post.content), length: 300) %>
            </div>
            
            <div class="flex items-center justify-between">
              <a href="<%= relative_url post.relative_url %>" class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                View Details
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
              
              <div class="text-sm text-gray-500">
                Role #<%= index + 1 %>
              </div>
            </div>
          </article>
        </div>
      </div>
    <% end %>
  </div>
</div>
