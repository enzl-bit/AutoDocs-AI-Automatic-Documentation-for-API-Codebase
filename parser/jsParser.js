const fs = require('fs');

function parseJS(code) {
  const functions = [];
  const regex = /(?:function\s+(\w+)|const\s+(\w+)\s*=\s*\()([\w\s,]*)\)?\s*=>|\([\w\s,]*\)\s*{/g;

  const matches = code.matchAll(regex);
  for (const match of matches) {
    const name = match[1] || match[2];
    const params = match[3]?.split(',').map(p => p.trim()).filter(Boolean) || [];
    functions.push({
      name,
      params,
      returns: 'unknown',
      description: 'Auto-generated from source code.'
    });
  }

  return functions;
}

module.exports = parseJS;
