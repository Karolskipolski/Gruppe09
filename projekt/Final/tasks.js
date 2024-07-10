const rimraf = require('rimraf');
const cssMinify = require('css-minify');
const { minify } = require('html-minifier');
const fs = require('fs');
const copyfiles = require('copyfiles');
const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();
const ftpConfig = require('./ftp-config');

// Step 1: Delete the dist directory
rimraf('./dist', () => {
    console.log('dist directory removed.');

    // Step 2: Create dist directory
    fs.mkdirSync('./dist');
    fs.mkdirSync('./dist/images');

    // Step 3: Minify CSS
    cssMinify.minify({
        dir: './src',
        output: './dist'
    }).then(() => {
        fs.renameSync('./dist/styles.min.css', './dist/styles.css');
        console.log('CSS minified.');

        // Step 4: Minify HTML
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

                // Step 5: Copy images
                copyfiles(['./src/images/*', './dist/images'], { up: true }, () => {
                    console.log('Images copied.');

                    // Step 6: Deploy to FTP
                    ftpDeploy.deploy(ftpConfig)
                        .then(res => console.log('FTP deployment finished:', res))
                        .catch(err => console.error('FTP deployment error:', err));
                });
            });
        });
    });
});
