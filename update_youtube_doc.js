const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// We are going to insert this 1.3M view documentary as a massive "Featured Work" block 
// at the very top of the video section to give it maximum impact.

const featuredVideoHtml = `
            <!-- Featured Documentary -->
            <div class="bg-slate-900 p-1 rounded-2xl mb-12 shadow-xl transform transition-transform hover:scale-[1.01]">
                <div class="bg-white p-6 md:p-8 rounded-xl h-full">
                    <div class="flex flex-col md:flex-row gap-8 items-center">
                        <div class="w-full md:w-2/3">
                            <div class="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-slate-100 shadow-inner">
                                <iframe class="w-full h-full min-h-[350px]" src="https://www.youtube.com/embed/5aT2u2h5i_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3">
                            <div class="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full tracking-wide mb-4">1.3+ MILLION VIEWS</div>
                            <h4 class="text-2xl font-bold text-slate-900 mb-3">Featured Documentary</h4>
                            <p class="text-slate-600 mb-6 leading-relaxed">Directed, produced, and wrote this full-length documentary feature. A masterclass in long-form storytelling, audience retention, and high-impact digital distribution.</p>
                            <ul class="space-y-2 text-sm text-slate-500 font-medium">
                                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Creative Direction</li>
                                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Scriptwriting</li>
                                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> End-to-End Production</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
`;

// Insert the featured video right before the 2-column grid
html = html.replace('<div class="grid md:grid-cols-2 gap-8">', featuredVideoHtml + '\n            <div class="grid md:grid-cols-2 gap-8">');

fs.writeFileSync('index.html', html);
console.log('Added featured 1.3M documentary to index.html');
