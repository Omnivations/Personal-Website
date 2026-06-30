const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Update the title and description for the first video
html = html.replace(
    '<h4 class="font-bold text-slate-900">Startup Launch Campaign (Singapore)</h4>',
    '<h4 class="font-bold text-slate-900">International Brand Launch (Singapore)</h4>'
);
html = html.replace(
    '<p class="text-sm text-slate-600 mt-2">Directed and produced promotional content for a Singapore-based startup, driving initial brand awareness and market entry.</p>',
    '<p class="text-sm text-slate-600 mt-2">Directed and produced high-end promotional campaigns for an international brand launch in the Singapore market.</p>'
);

// Update the title and description for the second video
html = html.replace(
    '<h4 class="font-bold text-slate-900">Brand & Operations Documentation</h4>',
    '<h4 class="font-bold text-slate-900">Corporate Identity & Vision</h4>'
);
html = html.replace(
    '<p class="text-sm text-slate-600 mt-2">Directed comprehensive brand and operational video content, demonstrating ability to translate complex business processes into engaging media.</p>',
    '<p class="text-sm text-slate-600 mt-2">Developed and directed corporate identity video content, establishing brand voice and operational vision for international audiences.</p>'
);

fs.writeFileSync('index.html', html);
console.log('Updated video titles and descriptions');
