import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css'

function App() {
  const [markdown, setMarkdown] = useState<string>('Loading...')

  useEffect(() => {
    fetch('/API_DOCS.md')
      .then((res) => res.text())
      .then(setMarkdown)
      .catch(() => setMarkdown('📄 Gagal memuat API_DOCS.md'))
  }, [])

  return (
    <div className="container">
      <h1>📘 AutoDocs Viewer</h1>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}

export default App
