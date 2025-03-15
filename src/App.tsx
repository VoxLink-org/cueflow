
function App() {
  return (
    <>
      <div className="">
        <header className="">
          <div className="">
            <h1 className="">CueFlow</h1>
            <h2 className="">Realtime AI Assistant</h2>
            <p className="">实时对话分析，让你在每个重要谈话中都胸有成竹</p>
            <div className="">
              <a 
                href="https://github.com/VoxLink-org/webpage/releases" 
                target="_blank" 
                rel="noopener noreferrer"
                className=""
              >
                立即下载
              </a>
              <a href="#features" className="">
                了解更多
              </a>
            </div>
          </div>
        </header>

        <section className="">
          <div className="">
            <iframe 
              className=""
              src="https://www.youtube.com/embed/zuaUWxUuBdg" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen={true}
            ></iframe>
          </div>
        </section>

        <section id="features" className="">
          <div className="">
            <h2 className="">核心功能</h2>
            <div className="">
              {/* 第一个卡片保持不变 */}
              <div className="">
                <div className="">🎙️</div>
                <h3 className="">本地语音转写</h3>
                <p className="">完全离线的本地语音识别，数据绝不外传</p>
              </div>
              
              {/* 更新第二个卡片 */}
              <div className="">
                <div className="">🤖</div>
                <h3 className="">实时 AI 建议</h3>
                <p className="">智能助手实时分析对话，轻松应对各类高难度对话场景</p>
              </div>
              
              {/* 更新第三个卡片 */}
              <div className="">
                <div className="">🔒</div>
                <h3 className="">超高隐私</h3>
                <p className="">支持自定义大模型API，数据完全自主可控</p>
              </div>
              
              {/* 更新第四个卡片 */}
              <div className="">
                <div className="">📝</div>
                <h3 className="">智能总结</h3>
                <p className="">智能总结任务内容，高效整理</p>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="">
            <div className="">
              <h2 className="">Mac 用户安装指南</h2>
              <p className="">如果遇到 "CueFlow is damaged and can't be opened" 的提示，请在终端中运行：</p>
              <div className="">
                <code className="">sudo xattr -rd com.apple.quarantine /Applications/CueFlow.app</code>
                <button 
                  className=""
                  onClick={() => navigator.clipboard.writeText('sudo xattr -rd com.apple.quarantine /Applications/CueFlow.app')}
                >
                  复制
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="">
        <div className="">
          <div className="">
            <p>&copy; 2025 CueFlow</p>
            <div>
              <a 
                href="https://github.com/VoxLink-org/webpage" 
                target="_blank" 
                rel="noopener noreferrer"
                className=""
              >
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
