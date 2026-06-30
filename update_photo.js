const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The HTML for the photo section in the About grid
const photoHtml = `
                <div class="relative group">
                    <div class="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                    <div class="relative bg-white p-2 rounded-2xl border border-slate-200 shadow-sm overflow-hidden aspect-[4/5] md:aspect-square flex items-center justify-center bg-slate-50">
                        <img src="headshot.jpg" onerror="this.onerror=null; this.src='headshot.png';" alt="Daniel Edward Wilson" class="w-full h-full object-cover rounded-xl shadow-inner grayscale hover:grayscale-0 transition duration-500">
                    </div>
                </div>
`;

// Find the About section grid and replace the right column (which was the Core Philosophy)
// We will move the Core Philosophy to sit under the text, and put the photo on the right.

// First, extract the core philosophy block
const philosophyMatch = html.match(/<div class="bg-slate-100 p-8 rounded-2xl border border-slate-200">[\s\S]*?<\/ul>\s*<\/div>/);
const philosophyBlock = philosophyMatch ? philosophyMatch[0] : '';

// Remove it from its current position
if (philosophyBlock) {
    html = html.replace(philosophyBlock, photoHtml);
    
    // Insert the philosophy block below the text in the left column
    html = html.replace(
        /<\/p>\s*<\/div>\s*<div class="relative group">/,
        '</p>\n' + philosophyBlock + '\n                </div>\n                <div class="relative group">'
    );
}

fs.writeFileSync('index.html', html);
console.log('Added photo layout to About section');
