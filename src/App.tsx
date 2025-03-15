
function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-black h-screen flex items-center">
          <div className="w-full max-w-screen-xl mx-auto py-6 px-4">
            <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">CueFlow</h1>
            <h2 className="text-xl text-center text-gray-50 mt-2">Realtime AI Assistant</h2>
            <p className="text-center text-gray-50 mt-4">实时对话分析，让你在每个重要谈话中都胸有成竹</p>
            <div className="flex justify-center mt-6 space-x-4">
              <a 
                href="https://github.com/VoxLink-org/webpage/releases" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-6 rounded-full hover:from-blue-500 hover:to-purple-500 transition hover:text-black"
              >
                立即下载
              </a>
              <a href="#features" className="bg-gradient-to-r from-gray-500 to-gray-700 text-white py-2 px-6 rounded-full hover:from-gray-700 hover:to-gray-500 transition hover:text-blue">
                了解更多
              </a>
            </div>
          </div>
        </header>

        <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 h-screen flex items-center">
          <div className="w-full max-w-screen-xl mx-auto px-4">
            <iframe 
              className="w-full h-64 md:h-96 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/zuaUWxUuBdg" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen={true}
            ></iframe>
          </div>
        </section>

        <section id="features" className="bg-gradient-to-r from-gray-800 via-gray-900 to-black h-screen flex items-center">
          <div className="w-full max-w-screen-xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-100">核心功能</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {/* 第一个卡片保持不变 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl text-center">🎙️</div>
                <h3 className="text-xl font-semibold text-center mt-4">本地语音转写</h3>
                <p className="text-center text-gray-600 mt-2">完全离线的本地语音识别，数据绝不外传</p>
              </div>
              
              {/* 更新第二个卡片 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl text-center">🤖</div>
                <h3 className="text-xl font-semibold text-center mt-4">实时 AI 建议</h3>
                <p className="text-center text-gray-600 mt-2">智能助手实时分析对话，轻松应对各类高难度对话场景</p>
              </div>
              
              {/* 更新第三个卡片 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl text-center">🔒</div>
                <h3 className="text-xl font-semibold text-center mt-4">超高隐私</h3>
                <p className="text-center text-gray-600 mt-2">支持自定义大模型API，数据完全自主可控</p>
              </div>
              
              {/* 更新第四个卡片 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl text-center">📝</div>
                <h3 className="text-xl font-semibold text-center mt-4">智能总结</h3>
                <p className="text-center text-gray-600 mt-2">智能总结任务内容，高效整理</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 h-screen flex items-center">
          <div className="w-full max-w-screen-xl mx-auto px-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-center text-gray-800">Mac 用户安装指南</h2>
              <p className="text-center text-gray-600 mt-4">如果遇到 "CueFlow is damaged and can't be opened" 的提示，请在终端中运行：</p>
              <div className="flex justify-center mt-6">
                <code className="bg-gray-200 text-gray-800 py-2 px-4 rounded">sudo xattr -rd com.apple.quarantine /Applications/CueFlow.app</code>
                <button 
                  className="bg-blue-500 text-white py-2 px-4 rounded ml-4 hover:bg-blue-600 transition"
                  onClick={() => navigator.clipboard.writeText('sudo xattr -rd com.apple.quarantine /Applications/CueFlow.app')}
                >
                  复制
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-gray-800 py-6">
        <div className="w-full max-w-screen-xl mx-auto px-4 text-center text-white">
          <div className="flex justify-center items-center space-x-4">
            <p>&copy; 2025 CueFlow</p>
            <div>
              <a 
                href="https://github.com/VoxLink-org/webpage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
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
