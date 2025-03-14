import './App.css'

function App() {
  return (
    <>
      <div className='main'>
        <header className="hero-section">
          <div className="hero-content">
            <h1>CueFlow</h1>
            <h2 className="subtitle">Realtime AI Assistant</h2>
            <p className="hero-description">实时对话分析，让你在每个重要谈话中都胸有成竹</p>
            <div className="cta-buttons">
              <a 
                href="https://github.com/VoxLink-org/webpage/releases" 
                target="_blank" 
                rel="noopener noreferrer"
                className="primary-button"
              >
                立即下载
              </a>
              <a href="#features" className="secondary-button">
                了解更多
              </a>
            </div>
          </div>
        </header>

        <section className="youtube-video">
          <div className="container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/zuaUWxUuBdg" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen={true}
            ></iframe>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <h2>核心功能</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎙️</div>
                <h3>本地语音转写</h3>
                <p>完全离线的本地语音识别，数据绝不外传</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🤖</div>
                <h3>实时 AI 建议</h3>
                <p>智能助手实时分析对话，轻松应对各类高难度对话场景</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>超高隐私</h3>
                <p>支持自定义大模型API，数据完全自主可控</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📝</div>
                <h3>智能总结</h3>
                <p>智能总结任务内容，高效整理</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mac-help">
          <div className="container">
            <div className="help-card">
              <h2>Mac 用户安装指南</h2>
              <p>如果遇到 "CueFlow is damaged and can't be opened" 的提示，请在终端中运行：</p>
              <div className="code-block">
                <code>sudo xattr -rd com.apple.quarantine /Applications/CueFlow.app</code>
                <button className="copy-button" onClick={() => navigator.clipboard.writeText('sudo xattr -rd com.apple.quarantine /Applications/CueFlow.app')}>
                  复制
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 CueFlow</p>
            <div className="social-links">
              <a href="https://github.com/VoxLink-org/webpage" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
