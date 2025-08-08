const fs = require('fs');

function generateMarkdown(functions = []) {
  let md = '# API Documentation\n\n';

  functions.forEach(fn => {
    md += `## Function: ${fn.name}\n\n`;
    if (fn.params.length > 0) {
      md += '**Parameters:**\n';
      fn.params.forEach(p => {
        md += `- \`${p}\`\n`;
      });
    } else {
      md += '_No parameters_\n';
    }

    md += `\n**Returns:** ${fn.returns}\n`;
    md += `\n**Description:** ${fn.description}\n\n---\n\n`;
  });

  return md;
}

function saveMarkdownFile(outputPath, content) {
  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`✅ Markdown saved to: ${outputPath}`);
}

module.exports = { generateMarkdown, saveMarkdownFile };
