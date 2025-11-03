import fs from 'fs';
import path from 'path';

const outputDir = 'output';
const jobRoles = [
  {
    title: "Delish Deliveries",
    slug: "delish-deliveries",
    date: "May 2022 - June 2023",
    role: "Software Developer and Scrum Master",
    description: "Green field project to establish a replacement ecommerce site with additional CRM and Fulfilment application for online grocery delivery service."
  },
  {
    title: "Practice Ignition",
    slug: "practice-ignition", 
    date: "November 2021 - March 2022",
    role: "Frontend Developer",
    description: "Part of the Getting Started team that worked on retaining trial users and making them active paid subscribers."
  },
  {
    title: "Covidence",
    slug: "covidence",
    date: "July 2021 - October 2021", 
    role: "Frontend Developer",
    description: "Developed and refactored work on a legacy app to build and retain a solid user base."
  },
  {
    title: "Bilue",
    slug: "bilue",
    date: "April 2021 - June 2021",
    role: "Mobile Developer",
    description: "Mobile app development and consulting work focusing on iOS and Android applications."
  },
  {
    title: "Freelance Consultant", 
    slug: "freelance-consultant",
    date: "April 2020 - March 2021",
    role: "Independent Consultant",
    description: "Independent consulting and development work for various clients across different industries."
  },
  {
    title: "Fat Zebra",
    slug: "fat-zebra", 
    date: "September 2017 - March 2020",
    role: "Software Developer",
    description: "Payment processing platform development focusing on secure financial transactions and API development."
  }
];

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Create main page
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lee Sheppard - Ruby on Rails Developer</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;700&display=swap" rel="stylesheet">
    <style>body { font-family: 'Poppins', sans-serif; }</style>
</head>
<body class="bg-white text-gray-900">
    <div class="min-h-screen flex flex-col">
        <nav class="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <a href="/" class="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">Lee Sheppard</a>
                    <nav class="hidden md:flex space-x-6">
                        <a href="#experience" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Experience</a>
                        <a href="mailto:lee@leesheppard.com" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
                    </nav>
                </div>
            </div>
        </nav>
        <main class="flex-grow">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div class="text-center mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
                    <img class="mx-auto mb-6 rounded-full shadow-lg" src="https://res.cloudinary.com/leesheppard/image/upload/v1496495524/Lee-Sheppard-White_ujh8cm.png" alt="Lee Sheppard" width="200" height="200" />
                    <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Lee Sheppard</h1>
                    <p class="text-xl md:text-2xl text-gray-600 mb-6">Ruby on Rails Developer & Creative Technologist</p>
                    <p class="text-lg text-gray-700 max-w-3xl mx-auto">Uniquely skilled in both design and development, bridging the gap between creative vision and technical execution.</p>
                </div>
                <div id="experience">
                    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Experience</h2>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${jobRoles.map(job => `
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-gray-900 mb-2">
                                    <a href="/role/${job.slug}/" class="hover:text-blue-600 transition-colors">${job.title}</a>
                                </h3>
                                <p class="text-gray-600 text-sm mb-3">${job.date}</p>
                                <div class="text-gray-700 text-sm">${job.description}</div>
                                <a href="/role/${job.slug}/" class="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">Read more →</a>
                            </div>
                        </div>`).join('')}
                    </div>
                </div>
                <div class="mt-16 text-center bg-gray-50 p-12 rounded-lg">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
                    <p class="text-lg text-gray-700 mb-6">Get in touch if you would like to talk more about what possibilities may come.</p>
                    <a href="mailto:lee@leesheppard.com" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">Get In Touch</a>
                </div>
            </div>
        </main>
        <footer class="bg-gray-50 border-t border-gray-200 mt-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div class="text-center">
                    <p class="text-gray-500 text-sm">© 2025 Lee Sheppard. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(outputDir, 'index.html'), indexHtml);

// Create role pages
const roleDir = path.join(outputDir, 'role');
if (!fs.existsSync(roleDir)) {
  fs.mkdirSync(roleDir, { recursive: true });
}

jobRoles.forEach(job => {
  const jobDir = path.join(roleDir, job.slug);
  if (!fs.existsSync(jobDir)) {
    fs.mkdirSync(jobDir, { recursive: true });
  }

  const roleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${job.title} | Lee Sheppard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;700&display=swap" rel="stylesheet">
    <style>body { font-family: 'Poppins', sans-serif; }</style>
</head>
<body class="bg-white text-gray-900">
    <div class="min-h-screen flex flex-col">
        <nav class="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <a href="/" class="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">Lee Sheppard</a>
                </div>
            </div>
        </nav>
        <main class="flex-grow">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <nav class="mb-8">
                    <a href="/" class="text-blue-600 hover:text-blue-800">← Back to Experience</a>
                </nav>
                <header class="mb-12">
                    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">${job.title}</h1>
                        <p class="text-gray-600 mb-2">${job.role}</p>
                        <p class="text-gray-600">${job.date}</p>
                    </div>
                </header>
                <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                    <p class="text-gray-700 text-lg">${job.description}</p>
                </div>
            </div>
        </main>
        <footer class="bg-gray-50 border-t border-gray-200 mt-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div class="text-center">
                    <p class="text-gray-500 text-sm">© 2025 Lee Sheppard. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>`;

  fs.writeFileSync(path.join(jobDir, 'index.html'), roleHtml);
});

console.log('Static site built successfully!');