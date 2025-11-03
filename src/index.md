---
layout: default
title: An artist that is technical
---

<div class="hero-section mb-12">
  <div class="text-center mb-8">
    <img class="mx-auto mb-6 rounded-full shadow-lg" src="https://res.cloudinary.com/leesheppard/image/upload/v1496495524/Lee-Sheppard-White_ujh8cm.png" alt="Lee Sheppard" width="200" height="200" />
    <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Lee Sheppard</h1>
    <p class="text-xl md:text-2xl text-gray-600 mb-6">Ruby on Rails Developer & Creative Technologist</p>
    <p class="text-lg text-gray-700 max-w-3xl mx-auto">Uniquely skilled in both design and development, bridging the gap between creative vision and technical execution.</p>
  </div>
</div>

<div class="about-section mb-16">
  <div class="grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h2 class="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
      <p class="text-gray-700 mb-4">My current business card says I'm a developer. But that doesn't begin to describe all that I am about. I have experience in many roles that make me a lynchpin for business.</p>
      <p class="text-gray-700 mb-4">Whilst I traditionally have been trained as an artist, I grew up on technology from an early age. I began programming on a Commodore 64 in the early 1980's.</p>
      <p class="text-gray-700">Iron Man is my favourite movie and I realise why now. Tony Stark is an innovator, designer, engineer and inventive. An all-rounder that allows you to dream big and create.</p>
    </div>
    <div class="bg-gray-50 p-8 rounded-lg">
      <h3 class="text-xl font-bold text-gray-900 mb-4">Core Skills</h3>
      <ul class="space-y-2 text-gray-700">
        <li>• Ruby on Rails Development</li>
        <li>• Technical Direction</li>
        <li>• Project Management</li>
        <li>• Agile Coaching & Scrum Master</li>
        <li>• Illustration & Design</li>
        <li>• Business Development</li>
      </ul>
    </div>
  </div>
</div>

<div class="experience-section">
  <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Experience</h2>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <% collections.posts.resources.select { |post| post.data.categories == "experience" }.sort_by(&:date).reverse.each do |post| %>
      <div class="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-2">
            <a href="<%= relative_url post.relative_url %>" class="hover:text-blue-600 transition-colors">
              <%= post.data.title %>
            </a>
          </h3>
          <p class="text-gray-600 text-sm mb-3"><%= post.date.strftime("%B %Y") %></p>
          <div class="text-gray-700 text-sm">
            <%= truncate(strip_html(post.content), length: 120) %>
          </div>
          <a href="<%= relative_url post.relative_url %>" class="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">
            Read more →
          </a>
        </div>
      </div>
    <% end %>
  </div>
</div>

<div class="cta-section mt-16 text-center bg-gray-50 p-12 rounded-lg">
  <h2 class="text-3xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
  <p class="text-lg text-gray-700 mb-6">Get in touch if you would like to talk more about what possibilities may come.</p>
  <a href="mailto:hello@leesheppard.com" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
    Get In Touch
  </a>
</div>
