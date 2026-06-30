const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The HTML for the third video card
const video3Html = `
                <!-- Video 3 -->
                <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div class="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-slate-100 mb-4">
                        <iframe class="w-full h-full min-h-[250px]" src="https://www.youtube.com/embed/B5W0GnHLscY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <h4 class="font-bold text-slate-900">Digital Media Production</h4>
                    <p class="text-sm text-slate-600 mt-2">Executive produced and directed high-engagement digital content, overseeing end-to-end production pipelines.</p>
                </div>
`;

// Insert it right after the second video div
// First we need to find the closing div of the second video.
// We know it ends with a </p> then </div>. Let's do a targeted replace.
const targetBlock = `<p class="text-sm text-slate-600 mt-2">Directed content and brand strategy for an Indonesian health technology startup, focusing on market penetration and user trust.</p>
                </div>`;

const newBlock = targetBlock + '\n' + video3Html;

html = html.replace(targetBlock, newBlock);

// Also change the grid layout from 2 columns to 3 columns to fit them beautifully
html = html.replace('<div class="grid md:grid-cols-2 gap-8">', '<div class="grid md:grid-cols-3 gap-8">');

fs.writeFileSync('index.html', html);
console.log('Added third video and updated grid to 3 columns');
