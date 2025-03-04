import './App.css'

function App() {
  return (
    <>
    <div className='flex'>
      <header>
        <h1>VoxLink Realtime AI Assistant</h1>
        <p>Welcome to the future of AI-powered assistance!</p>
        <a href="https://github.com/VoxLink-org/webpage/releases" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <button>Download Now</button>
        </a>
      </header>
      <section className="youtube-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zuaUWxUuBdg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
      </section>

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Prepare everything before the task</li>
          <li>Realtime transcription</li>
          <li>Realtime AI analysis & feedback</li>
        </ul>
      </section>

      </div>
      <footer>
        <p>&copy; 2025 VoxLink</p>
        <a style={{ color: 'white' }} href="https://github.com/VoxLink-org/webpage" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </footer>
    </>
  )
}

export default App
