const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const videoSection = `
    <!-- Video Portfolio Section -->
    <section id="portfolio" class="py-20 px-6 bg-slate-50 border-t border-slate-200">
        <div class="max-w-5xl mx-auto">
            <div class="mb-12">
                <h2 class="text-sm font-bold tracking-widest uppercase accent mb-3">Video Production & Directing</h2>
                <h3 class="text-3xl font-bold text-slate-900">Selected Work</h3>
                <p class="text-slate-600 mt-4 max-w-2xl">A showcase of production management, directing, and content strategy execution across international teams.</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
                <!-- Video 1 -->
                <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div class="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-slate-100 mb-4">
                        <!-- Replace src with actual youtube embed link later -->
                        <iframe class="w-full h-full min-h-[250px]" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <h4 class="font-bold text-slate-900">Project Title 1</h4>
                    <p class="text-sm text-slate-600 mt-2">Brief description of your role (Director, Producer, etc.) and the business impact of this piece.</p>
                </div>

                <!-- Video 2 -->
                <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div class="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-slate-100 mb-4">
                        <!-- Replace src with actual youtube embed link later -->
                        <iframe class="w-full h-full min-h-[250px]" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <h4 class="font-bold text-slate-900">Project Title 2</h4>
                    <p class="text-sm text-slate-600 mt-2">Brief description of your role (Director, Producer, etc.) and the business impact of this piece.</p>
                </div>
            </div>
        </div>
    </section>
`;

// Insert the new section right before the Contact section
const updatedHtml = html.replace('<!-- Contact Section -->', videoSection + '\n    <!-- Contact Section -->');
fs.writeFileSync('index.html', updatedHtml);
console.log('Video section added to index.html');
