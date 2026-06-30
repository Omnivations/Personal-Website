const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace the first dummy video with the actual one
html = html.replace(
    'src="https://www.youtube.com/embed/dQw4w9WgXcQ"',
    'src="https://www.youtube.com/embed/UbKs1XFlYzE"'
);

// Update the title and description for the first video
html = html.replace(
    '<h4 class="font-bold text-slate-900">Project Title 1</h4>',
    '<h4 class="font-bold text-slate-900">Startup Launch Campaign (Singapore)</h4>'
);
html = html.replace(
    '<p class="text-sm text-slate-600 mt-2">Brief description of your role (Director, Producer, etc.) and the business impact of this piece.</p>',
    '<p class="text-sm text-slate-600 mt-2">Directed and produced promotional content for a Singapore-based startup, driving initial brand awareness and market entry.</p>'
);

fs.writeFileSync('index.html', html);
console.log('Added Singapore startup video to index.html');
