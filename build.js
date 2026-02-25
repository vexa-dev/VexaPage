const fs = require("fs-extra");
const path = require("path");
const JavaScriptObfuscator = require("javascript-obfuscator");
const minifyHtml = require("html-minifier-terser").minify;
const CleanCSS = require("clean-css");

const DIST_DIR = path.join(__dirname, "dist");
const SRC_DIR = path.join(__dirname, "src");

async function build() {
  console.log("Iniciando proceso de ofuscación y construcción...");

  // 1. Limpiar/crear carpeta dist
  await fs.emptyDir(DIST_DIR);
  console.log("✅ Carpeta dist/ preparada.");

  // 2. Procesar index.html
  const htmlPath = path.join(__dirname, "index.html");
  let htmlContent = await fs.readFile(htmlPath, "utf8");

  // Minificar HTML
  const minifiedHtml = await minifyHtml(htmlContent, {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true,
  });
  await fs.outputFile(path.join(DIST_DIR, "index.html"), minifiedHtml);
  console.log("✅ index.html minificado.");

  // 3. Procesar JS (Ofuscación agresiva)
  const jsFiles = ["src/js/main.js", "src/js/tailwind.config.js"];
  for (const file of jsFiles) {
    if (await fs.pathExists(path.join(__dirname, file))) {
      const code = await fs.readFile(path.join(__dirname, file), "utf8");
      const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 1,
        debugProtection: true,
        debugProtectionInterval: 4000,
        disableConsoleOutput: true,
        identifierNamesGenerator: "hexadecimal",
        log: false,
        renameGlobals: false,
        rotateStringArray: true,
        selfDefending: true,
        stringArray: true,
        stringArrayEncoding: ["base64"],
        stringArrayThreshold: 1,
        unicodeEscapeSequence: false,
      }).getObfuscatedCode();

      await fs.outputFile(path.join(DIST_DIR, file), obfuscatedCode);
      console.log(`✅ ${file} ofuscado intensamente.`);
    }
  }

  // 4. Copiar y minificar CSS
  const cssPath = path.join(__dirname, "src/css/styles.css");
  if (await fs.pathExists(cssPath)) {
    const cssContent = await fs.readFile(cssPath, "utf8");
    const minifiedCss = new CleanCSS().minify(cssContent).styles;
    await fs.outputFile(path.join(DIST_DIR, "src/css/styles.css"), minifiedCss);
    console.log("✅ src/css/styles.css minificado.");
  }

  // 5. Copiar resto de recursos (las imágenes)
  const imgDir = path.join(SRC_DIR, "img");
  if (await fs.pathExists(imgDir)) {
    await fs.copy(imgDir, path.join(DIST_DIR, "src/img"));
    console.log("✅ Imágenes copiadas.");
  }

  console.log("🎉 ¡Construcción completada exitosamente en dist/!");
}

build().catch(console.error);
