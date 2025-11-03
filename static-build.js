import fs from 'fs';
import path from 'path';

// Create a simple static version for Vercel deployment
const outputDir = 'output';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Check if we have a pre-built Bridgetown site
if (fs.existsSync(path.join(outputDir, 'index.html')) && fs.existsSync(path.join(outputDir, 'role'))) {
  console.log('Using existing Bridgetown build');
} else {
  console.log('Creating fallback static site');
  // Create a simple index.html if the built version doesn't exist
  const indexHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lee Sheppard - Ruby on Rails Developer</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Poppins', sans-serif; }
    </style>
</head>
<body class="bg-white text-gray-900">
    <div class="min-h-screen flex flex-col">
        <nav class="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center">
                        <a href="/" class="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                            Lee Sheppard
                        </a>
                    </div>
                    <div class="flex items-center space-x-8">
                        <nav class="hidden md:flex space-x-6">
                            <a href="#experience" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Experience</a>
                            <a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
                            <a href="mailto:lee@leesheppard.com" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
                        </nav>
                    </div>
                </div>
            </div>
        </nav>

        <main class="flex-grow">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <!-- Hero Section -->
                <div class="text-center mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
                    <img class="mx-auto mb-6 rounded-full shadow-lg" src="https://res.cloudinary.com/leesheppard/image/upload/v1496495524/Lee-Sheppard-White_ujh8cm.png" alt="Lee Sheppard" width="200" height="200" />
                    <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Lee Sheppard</h1>
                    <p class="text-xl md:text-2xl text-gray-600 mb-6">Ruby on Rails Developer & Creative Technologist</p>
                    <p class="text-lg text-gray-700 max-w-3xl mx-auto">Uniquely skilled in both design and development, bridging the gap between creative vision and technical execution.</p>
                </div>

                <!-- About Section -->
                <div id="about" class="mb-16">
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

                <!-- Experience Section -->
                <div id="experience">
                    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Experience</h2>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Delish Deliveries</h3>
                                <p class="text-gray-600 text-sm mb-3">May 2022</p>
                                <div class="text-gray-700 text-sm">Software Developer and Scrum Master for online grocery delivery service...</div>
                            </div>
                        </div>
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Practice Ignition</h3>
                                <p class="text-gray-600 text-sm mb-3">November 2021</p>
                                <div class="text-gray-700 text-sm">Frontend Developer working on user retention and onboarding...</div>
                            </div>
                        </div>
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Covidence</h3>
                                <p class="text-gray-600 text-sm mb-3">July 2021</p>
                                <div class="text-gray-700 text-sm">Frontend Developer working on legacy app improvements...</div>
                            </div>
                        </div>
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Bilue</h3>
                                <p class="text-gray-600 text-sm mb-3">April 2021</p>
                                <div class="text-gray-700 text-sm">Mobile app development and consulting...</div>
                            </div>
                        </div>
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Freelance Consultant</h3>
                                <p class="text-gray-600 text-sm mb-3">April 2020</p>
                                <div class="text-gray-700 text-sm">Independent consulting and development work...</div>
                            </div>
                        </div>
                        <div class="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Fat Zebra</h3>
                                <p class="text-gray-600 text-sm mb-3">September 2017</p>
                                <div class="text-gray-700 text-sm">Payment processing platform development...</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CTA Section -->
                <div class="mt-16 text-center bg-gray-50 p-12 rounded-lg">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
                    <p class="text-lg text-gray-700 mb-6">Get in touch if you would like to talk more about what possibilities may come.</p>
                    <a href="mailto:lee@leesheppard.com" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        Get In Touch
                    </a>
                </div>
            </div>
        </main>

        <!-- Footer -->
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
  console.log('Created static index.html');
}

console.log('Static build complete!');