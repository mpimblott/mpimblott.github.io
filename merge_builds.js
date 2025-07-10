import fs from 'fs/promises';
import path from 'path';

async function mergeBuilds() {
    const finalDir = 'dist/final';
    const viteDir = 'dist/vite';
    const astroDir = 'dist/astro';

    try {
        // Create final directory
        await fs.rm(finalDir, {recursive: true, force: true});
        await fs.mkdir(finalDir, {recursive: true});

        // Copy Vite build to final directory
        await fs.cp(viteDir, finalDir, {recursive: true});

        // Create fallback directory and copy Astro build
        await fs.mkdir(path.join(finalDir, 'fallback'), {recursive: true});
        await fs.cp(astroDir, path.join(finalDir, 'fallback'), {recursive: true});

        // Create new index.html with JS detection
        const indexHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Matthew Pimblott</title>
    <script>
    // Check if JavaScript is working
    window.addEventListener('DOMContentLoaded', function() {
        // JavaScript is working, we can stay here
        // The Vite app will take over
    });
    </script>
    <noscript>
        <meta http-equiv="refresh" content="0;url=/fallback/">
    </noscript>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="/assets/index.js"></script>
    <noscript>
        <p>JavaScript is required to view this site.</p>
        <p>Redirecting to static version... If not redirected, <a href="/fallback/">click here</a>.</p>
    </noscript>
</body>
</html>`;

        await fs.writeFile(path.join(finalDir, 'index.html'), indexHtml);

        // Clean up temporary directories
        // await fs.rm(viteDir, {recursive: true});
        // await fs.rm(astroDir, {recursive: true});

        console.log('Successfully merged builds');
    } catch (error) {
        console.error('Error during build merge:', error);
        process.exit(1);
    }
}

mergeBuilds();