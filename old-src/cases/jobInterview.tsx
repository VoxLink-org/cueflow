import 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  Mic,    // 麦克风
  MessageCircle, // 聊天气泡
  Users,   // 用户
  BrainCircuit, //脑回路
} from 'lucide-react';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const JobInterviewAssistantUserCasePage = () => {
  const NAME = <div className='text-gray-400 inline mx-2'>小Y一定有工作</div>
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Section 1: Title and Introduction */}
      <header className="bg-gradient-to-b from-gray-900 to-black py-16 md:py-24 text-center">
      <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4"
        >
          {/* CueFlow Logo */}
          <Link to="/">
            CueFlow
          </Link>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
        >
          求职面试开挂神器：AI 实时助力，斩获心仪 Offer！
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mt-6"
        >
          {/* [大幅醒目配图：求职者使用 CueFlow 自信应对面试场景，背景虚化，突出求职者和 CueFlow 界面] */}
          <div className="mt-8">
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={`${NAME} 使用 CueFlow 面试场景`}
              className="rounded-xl shadow-2xl border border-gray-800 w-full"
            />
          </div>
        </motion.div>
      </header>

      {/* Section 2: 求职者痛点 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-100 mb-8 text-center">求职者痛点</h2>
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-800">
            <ul className="list-disc list-inside space-y-4 text-gray-300">
              <li>紧张焦虑：面试时大脑一片空白，表达混乱</li>
              <li>信息不对称：不了解面试官真实意图，答非所问</li>
              <li>缺乏自信：害怕被问倒，气场不足</li>
              <li>准备不足：对公司和职位了解不够，错失机会</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: CueFlow 解决方案 */}
      <section className="bg-gray-800 py-16 rounded-lg shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-100 mb-8 text-center">CueFlow 解决方案：面试开挂，Offer 到手！</h2>
          <p className="text-gray-300 mb-8">
            CueFlow 是一款专为求职者打造的 AI 实时辅助工具。它就像一位经验丰富的面试导师，在 {NAME} 的求职过程中，提供全方位的智能支持。
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="text-green-400 text-xl mt-1">
                <Mic className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">实时语音转录 + 问题捕捉：</h3>
                <p className="text-gray-300">CueFlow 实时捕捉面试官的问题，并迅速将其转化为清晰的文本，确保 {NAME} 准确理解每一个问题。</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="text-green-400 text-xl mt-1">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">AI 意图分析与破题思路：</h3>
                <p className="text-gray-300">
                  CueFlow 不仅能理解面试官的问题，还能分析其背后的考察意图，并提供清晰的答题思路和框架，帮助 {NAME} 更有条理地组织回答：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li className="text-gray-300">分析问题类型（行为面试、技术面试、情景模拟等）</li>
                  <li className="text-gray-300">预测面试官关注的重点（项目经验、技能匹配度、团队合作能力等）</li>
                  <li className="text-gray-300">提供 STAR 法则、PREP 法则等答题结构建议</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="text-green-400 text-xl mt-1">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">高分回答范例 + 实时优化：</h3>
                <p className="text-gray-300">
                  面对各种刁钻问题，CueFlow 快速 为 {NAME} 提供 高分 回答范例，并支持 {NAME} 对回答进行 实时 优化：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li className="text-gray-300">提供针对不同问题的多个回答版本，供 {NAME} 参考</li>
                  <li className="text-gray-300">分析 {NAME} 回答中的不足，并给出改进建议（例如：补充细节、调整语气）</li>
                  <li className="text-gray-300">提供关键词提示，确保 {NAME} 的回答包含关键信息</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="text-green-400 text-xl mt-1">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">自信心提升与压力缓解：</h3>
                <p className="text-gray-300">
                  CueFlow 更是 {NAME} 的自信心提升工具，帮助 {NAME} 缓解面试压力，发挥最佳水平：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li className="text-gray-300">提供面试技巧和注意事项，帮助 {NAME} 做好充分准备</li>
                  <li className="text-gray-300">提供积极的鼓励和肯定，增强 {NAME} 的自信心</li>
                  <li className="text-gray-300">提供模拟面试功能，让 {NAME} 提前熟悉面试流程和氛围</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4: {NAME} 的求职蜕变 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-100 mb-8 text-center">{NAME} 的求职蜕变：</h2>
          {/* [插入信息图或对比图：展示使用 CueFlow 前后，面试成功率、求职自信心、Offer 数量等方面的对比] */}
          <div className="mt-8">
            <img
              src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // 替换为实际图片URL
              alt={`${NAME} 使用 CueFlow 前后对比`}
              className="rounded-xl shadow-xl border border-gray-700 w-full"
            />
          </div>
          <ul className="space-y-6 mt-8">
            <li className="text-gray-300">
              <span className="font-semibold text-green-400">面试通关攻略：</span>
              CueFlow实时辅助{NAME}预判考官隐藏题，应答时金句频出，硬核实力全量展现
            </li>
            <li className="text-gray-300">
              <span className="font-semibold text-green-400">人形offer机：</span>
              {NAME}用CueFlow拆解岗位隐藏加分项，面一场通关一场，成就体系直接拉满
            </li>
            <li className="text-gray-300">
              <span className="font-semibold text-green-400">求职狙击模式：</span>
              {NAME}告别盲投海选，CueFlow智能复盘让每次面试都精准锁定匹配岗位
            </li>
            <li className="text-gray-300">
              <span className="font-semibold text-green-400">识别谈薪陷阱：</span>
              {NAME}用CueFlow拆解HR话术套路，精准锚定薪资区间，谈判桌上主动权稳握在手
            </li>
          </ul>

          {/* [插入 {NAME} 的感谢信或 Offer 展示，增强说服力] */}
          {/* <div className="mt-8">
            <img
              src="https://via.placeholder.com/600x400?text=Offer+Letter" // 替换为实际图片URL
              alt={`${NAME} 收到的 Offer`}
              className="rounded-xl shadow-lg border border-gray-700 w-full"
            />
          </div> */}
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-green-900 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-white mb-8">选择 CueFlow，面试开挂，斩获理想 Offer！</h2>
          <p className="text-gray-200 mb-8">
            别再为面试焦虑，CueFlow 助你一臂之力，让你在求职路上披荆斩棘，Offer 不断！
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full hover:from-blue-500 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-green-500/30"
          >
            立即下载 CueFlow，开启你的 Offer 收割之旅！
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobInterviewAssistantUserCasePage;
