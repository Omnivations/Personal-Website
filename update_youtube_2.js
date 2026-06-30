const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace the second dummy video with the actual one
html = html.replace(
    'src="https://www.youtube.com/embed/dQw4w9WgXcQ"',
    'src="https://www.youtube.com/embed/Tioieo25Rvw"'
);

// Update the title and description for the second video
html = html.replace(
    '<h4 class="font-bold text-slate-900">Project Title 2</h4>',
    '<h4 class="font-bold text-slate-900">Brand & Operations Documentation</h4>'
);
// Use a regex to replace the specific placeholder text for the second video
html = html.replace(
    /<p class="text-sm text-slate-600 mt-2">Brief description of your role \(Director, Producer, etc\.\) and the business impact of this piece\.<\/p>/,
    '<p class="text-sm text-slate-600 mt-2">Directed comprehensive brand and operational video content, demonstrating ability to translate complex business processes into engaging media.</p>'
);


fs.writeFileSync('index.html', html);
console.log('Added second video to index.html');
