import React, { useEffect, useState } from 'react';

function App() {
  const [markdown, setMarkdown] = useState('Loading documentation...');

  useEffect(() => {
    fetch('/API_DOCS.md')
      .then(res => res.text())
      .then(setMarkdown)
      .catch(() => setMarkdown('Failed to load documentation.'));
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📘 AutoDocs Viewer</h1>
      <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap overflow-x-auto">
        {markdown}
      </pre>
    </div>
  );
}

export default App;
