const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace the placeholder with the real documentary link
html = html.replace(
    'src="https://www.youtube.com/embed/5aT2u2h5i_Q"',
    'src="https://www.youtube.com/embed/ykzNpi2yuGY"'
);

fs.writeFileSync('index.html', html);
console.log('Updated documentary link');
