
function App() {
  return (
    <>
      <div className="min-h-screen w-full max-w-[1800px] bg-gradient-to-br from-gray-900 to-black">
        <header className="w-full bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-md py-16">
          <div className="w-full max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">CueFlow</h1>
            <h2 className="text-2xl text-gray-300 mb-4">Realtime AI Assistant</h2>
            <p className="text-lg text-gray-300 mb-8">实时对话分析，让你在每个重要谈话中都胸有成竹</p>
            <div className="space-x-4">
              <a 
                href="https://github.com/VoxLink-org/webpage/releases" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                立即下载
              </a>
              <a href="#features" className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                了解更多
              </a>
            </div>
          </div>
        </header>

        <section className="w-full py-12 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md">
          <div className="w-[560px] max-w-6xl mx-auto px-4">
            <iframe 
              className="w-[560px] aspect-video rounded-xl shadow-lg ring-1 ring-white/10"
              src="https://www.youtube.com/embed/zuaUWxUuBdg" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen={true}
            ></iframe>
          </div>
        </section>

        <section id="features" className="w-full py-16 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md">
          <div className="w-full mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">核心功能</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* 第一个卡片保持不变 */}
              <div className="p-6 backdrop-blur-lg rounded-xl hover:shadow-lg transition-shadow border border-white/10 hover:border-white/20">
                <div className="text-4xl mb-4">🎙️</div>
                <h3 className="text-xl font-semibold mb-2 text-white">本地语音转写</h3>
                <p className="text-gray-300">完全离线的本地语音识别，数据绝不外传</p>
              </div>
              
              {/* 更新第二个卡片 */}
              <div className="p-6 backdrop-blur-lg rounded-xl hover:shadow-lg transition-shadow border border-white/10 hover:border-white/20">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-2 text-white">实时 AI 建议</h3>
                <p className="text-gray-300">智能助手实时分析对话，轻松应对各类高难度对话场景</p>
              </div>
              
              {/* 更新第三个卡片 */}
              <div className="p-6 backdrop-blur-lg rounded-xl hover:shadow-lg transition-shadow border border-white/10 hover:border-white/20">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-2 text-white">超高隐私</h3>
                <p className="text-gray-300">支持自定义大模型API，数据完全自主可控</p>
              </div>
              
              {/* 更新第四个卡片 */}
              <div className="p-6 backdrop-blur-lg rounded-xl hover:shadow-lg transition-shadow border border-white/10 hover:border-white/20">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold mb-2 text-white">智能总结</h3>
                <p className="text-gray-300">智能总结任务内容，高效整理</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md">
          <div className="w-full max-w-6xl mx-auto px-4">
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-white">Mac 用户安装指南</h2>
              <p className="mb-4 text-gray-300">如果遇到 "CueFlow is damaged and can't be opened" 的提示，请在终端中运行：</p>
              <div className="relative bg-black/50 rounded-lg p-4">
                <code className="text-white font-mono text-sm">sudo xattr -rd com.apple.quarantine /Applications/CueFlow.app</code>
                <button 
                  className="absolute right-2 top-2 bg-gray-700 text-white px-3 py-1 rounded text-sm hover:bg-gray-600"
                  onClick={() => navigator.clipboard.writeText('sudo xattr -rd com.apple.quarantine /Applications/CueFlow.app')}
                >
                  复制
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="w-full bg-black/90 backdrop-blur-md text-white py-8 border-t border-white/10">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <p>&copy; 2025 CueFlow</p>
            <div>
              <a 
                href="https://github.com/VoxLink-org/webpage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
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
