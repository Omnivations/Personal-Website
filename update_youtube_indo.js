const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Update the title and description for the second video (Indonesian health startup)
html = html.replace(
    '<h4 class="font-bold text-slate-900">Corporate Identity & Vision</h4>',
    '<h4 class="font-bold text-slate-900">HealthTech Brand Campaign (Indonesia)</h4>'
);
html = html.replace(
    '<p class="text-sm text-slate-600 mt-2">Developed and directed corporate identity video content, establishing brand voice and operational vision for international audiences.</p>',
    '<p class="text-sm text-slate-600 mt-2">Directed content and brand strategy for an Indonesian health technology startup, focusing on market penetration and user trust.</p>'
);

fs.writeFileSync('index.html', html);
console.log('Updated second video for Indonesian health startup');
