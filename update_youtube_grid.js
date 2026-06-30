const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// We are going to rebuild the entire portfolio section to handle 10 videos total.
// 3 from before, plus these 7 new ones. 
// We will use a 2-column or 3-column grid depending on what looks best. 
// Let's do a 2-column grid for larger video players so they are easy to watch.

const newPortfolioSection = `
    <!-- Video Portfolio Section -->
    <section id="portfolio" class="py-20 px-6 bg-slate-50 border-t border-slate-200">
        <div class="max-w-5xl mx-auto">
            <div class="mb-12">
                <h2 class="text-sm font-bold tracking-widest uppercase accent mb-3">Video Production & Directing</h2>
                <h3 class="text-3xl font-bold text-slate-900">Selected Work</h3>
                <p class="text-slate-600 mt-4 max-w-2xl">I directed, wrote, and shot these campaigns. A showcase of production management, creative direction, and content strategy execution across international teams.</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
                <!-- Video 1 -->
                <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div class="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-slate-100 mb-4">
                        <iframe class="w-full h-full min-h-[250px]" src="https://www.youtube.com/embed/UbKs1XFlYzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <h4 class="font-bold text-slate-900">International Brand Launch (Singapore)</h4>
                </div>

                <!-- Video 2 -->
                <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div class="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-slate-100 mb-4">
                        <iframe class="w-full h-full min-h-[250px]" src="https://www.youtube.com/embed/Tioieo25Rvw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <h4 class="font-bold text-slate-900">HealthTech Brand Campaign (Indonesia)</h4>
                </div>

                <!-- Video 3 -->
                <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div class="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-slate-100 mb-4">
                        <iframe class="w-full h-full min-h-[250px]" src="https://www.youtube.com/embed/B5W0GnHLscY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <h4 class="font-bold text-slate-900">Digital Media Production</h4>
                </div>

                <!-- Video 4 -->
                <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div class="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-slate-100 mb-4">
                        <iframe class="w-full h-full min-h-[250px]" src="https://www.youtube.com/embed/NVNZ7jIh1bg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <h4 class="font-bold text-slate-900">Commercial Direction</h4>
                </div>

                <!-- Video 5 -->
                <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div class="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-slate-100 mb-4">
                        <iframe class="w-full h-full min-h-[250px]" src="https://www.youtube.com/embed/95nmlxID9wg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <h4 class="font-bold text-slate-900">Campaign Execution</h4>
                </div>

                <!-- Video 6 -->
                <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div class="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-slate-100 mb-4">
                        <iframe class="w-full h-full min-h-[250px]" src="https://www.youtube.com/embed/XNK8ZWuEsVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <h4 class="font-bold text-slate-900">Creative Production</h4>
                </div>

                <!-- Video 7 -->
                <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div class="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-slate-100 mb-4">
                        <iframe class="w-full h-full min-h-[250px]" src="https://www.youtube.com/embed/J9rywq4f0dc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <h4 class="font-bold text-slate-900">Brand Storytelling</h4>
                </div>

                <!-- Video 8 -->
                <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div class="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-slate-100 mb-4">
                        <iframe class="w-full h-full min-h-[250px]" src="https://www.youtube.com/embed/CpSDxp6KblQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <h4 class="font-bold text-slate-900">Content Marketing</h4>
                </div>

                <!-- Video 9 -->
                <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div class="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-slate-100 mb-4">
                        <iframe class="w-full h-full min-h-[250px]" src="https://www.youtube.com/embed/Aat10SXMtF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <h4 class="font-bold text-slate-900">Video Strategy</h4>
                </div>

                <!-- Video 10 -->
                <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div class="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-slate-100 mb-4">
                        <iframe class="w-full h-full min-h-[250px]" src="https://www.youtube.com/embed/DpFNCTCWch0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <h4 class="font-bold text-slate-900">Full-Cycle Production</h4>
                </div>
            </div>
        </div>
    </section>
`;

// Extract everything before the old portfolio section
const topPart = html.substring(0, html.indexOf('<!-- Video Portfolio Section -->'));

// Extract everything from Contact Section onwards
const bottomPart = html.substring(html.indexOf('<!-- Contact Section -->'));

const finalHtml = topPart + newPortfolioSection + '\n    ' + bottomPart;

fs.writeFileSync('index.html', finalHtml);
console.log('Rebuilt portfolio section with 10 videos');
