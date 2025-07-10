import { copyFileSync, mkdirSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';

const DIST_DIR = resolve('./dist');
const VITE_BUILD = join(DIST_DIR, 'vite');
const ASTRO_BUILD = join(DIST_DIR, 'fallback');
const FINAL_BUILD = join(DIST_DIR, 'final');

// Create final build directory
mkdirSync(FINAL_BUILD, { recursive: true });

// Create a JS detection script
const jsDetectionHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <script>
        // If JS is enabled, redirect to React version
        window.location.href = '/app/';
    </script>
    <meta http-equiv="refresh" content="0;url=/profile/fallback/">
    <noscript>
        <meta http-equiv="refresh" content="0;url=/profile/fallback/">
    </noscript>
</head>
<body>
    <p>Redirecting to the appropriate version...</p>
    <p>Click <a href="/fallback/">here</a> if you are not redirected.</p>
</body>
</html>
`;

// Create app directory for React build
mkdirSync(join(FINAL_BUILD, 'app'), { recursive: true });
copyDirectory(VITE_BUILD, join(FINAL_BUILD, 'app'));

// Create fallback directory for Astro
mkdirSync(join(FINAL_BUILD, 'fallback'), { recursive: true });
copyDirectory(ASTRO_BUILD, join(FINAL_BUILD, 'fallback'));

// Write the JS detection page as index.html
writeFileSync(join(FINAL_BUILD, 'index.html'), jsDetectionHTML);
writeFileSync(join(FINAL_BUILD, '404.html'), jsDetectionHTML);

function copyDirectory(source, destination) {
    const files = readdirSync(source);

    files.forEach(file => {
        const sourcePath = join(source, file);
        const destPath = join(destination, file);

        if (statSync(sourcePath).isDirectory()) {
            mkdirSync(destPath, { recursive: true });
            copyDirectory(sourcePath, destPath);
        } else {
            copyFileSync(sourcePath, destPath);
        }
    });
}