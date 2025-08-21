const fs = require("fs");
const path = require("path");

const folder = path.join(__dirname, "src");

function addReactImport(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  
  if (content.includes('import React from "react";')) {
    console.log(`✅ Já tem React: ${filePath}`);
    return;
  }

  
  content = `import React from "react";\n${content}`;
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`🔥 React importado em: ${filePath}`);
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith(".jsx")) {
      addReactImport(fullPath);
    }
  });
}

walkDir(folder);
