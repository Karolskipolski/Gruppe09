const rimraf = require('rimraf');
const { minify } = require('html-minifier');
const fs = require('fs');

// Step 1: Delete the dist directory
rimraf('./dist', () => {
    console.log('dist directory removed.');

    // Step 2: Create dist directory
    fs.mkdirSync('./dist');
    fs.mkdirSync('./dist/images');

    // Step 3: Minify HTML
    fs.readFile('./src/index.html', 'utf8', (err, data) => {
        if (err) throw err;
        const result = minify(data, {
            collapseWhitespace: true,
            removeComments: true,
            minifyJS: true,
            minifyCSS: true
        });
        fs.writeFile('./dist/index.html', result, 'utf8', (err) => {
            if (err) throw err;
            console.log('HTML minified.');
        });
    });
});
