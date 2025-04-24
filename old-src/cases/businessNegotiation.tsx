import 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  Mic,       // 麦克风
  MessageCircle, // 聊天气泡
  Users,     // 用户
  BrainCircuit,    // 大脑 (智能分析)
} from 'lucide-react';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const BusinessNegotiationAssistantUserCasePage = () => {
  const NAME = <div className="text-gray-400 inline mx-2">谈判大师</div>;
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Section 1: Title and Introduction */}
      <header className="bg-gradient-to-b from-gray-900 to-black py-16 md:py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-4"
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
          商务谈判开挂神器：AI 实时辅助， сделка 稳了！
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mt-6"
        >
          {/* [大幅醒目配图：商务人士使用 CueFlow 自信谈判的场景，背景虚化，突出谈判者和 CueFlow 界面] */}
          <div className="mt-8">
            <img
              src="https://images.unsplash.com/photo-1592609931041-e167998eec88?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={`${NAME} 使用 CueFlow 谈判场景`}
              className="rounded-xl shadow-2xl border border-gray-800 w-full"
            />
          </div>
        </motion.div>
      </header>

      {/* Section 2: 商务谈判痛点 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-100 mb-8 text-center">商务谈判痛点</h2>
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-800">
            <ul className="list-disc list-inside space-y-4 text-gray-300">
              <li>信息不对称：不了解对手底牌，容易吃亏</li>
              <li>情绪波动：谈判陷入僵局，心态崩盘</li>
              <li>决策失误：一时冲动，签下不利条款</li>
              <li>效率低下：准备工作繁琐，谈判过程漫长</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: CueFlow 解决方案 */}
      <section className="bg-gray-800 py-16 rounded-lg shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-100 mb-8 text-center">CueFlow 解决方案：谈判开挂，稳操胜券！</h2>
          <p className="text-gray-300 mb-8">
            CueFlow 是一款专为商务谈判打造的 AI 实时辅助工具。它就像一位经验丰富的谈判专家，在 {NAME} 的谈判过程中，提供全方位的智能支持。
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="text-yellow-400 text-xl mt-1">
                <Mic className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">实时语音转录 + 关键信息提取：</h3>
                <p className="text-gray-300">CueFlow 实时捕捉谈判双方的对话，并迅速将其转化为清晰的文本，同时自动提取关键信息，确保 {NAME} 不遗漏任何重要细节。</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="text-yellow-400 text-xl mt-1">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">AI 意图分析与情绪识别：</h3>
                <p className="text-gray-300">
                  CueFlow 不仅能理解谈判内容，还能分析对手的意图和情绪状态，帮助 {NAME} 更好地把握谈判节奏：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li className="text-gray-300">分析对手的谈判策略（例如：虚张声势、步步紧逼）</li>
                  <li className="text-gray-300">识别对手的情绪变化（例如：愤怒、焦虑、兴奋）</li>
                  <li className="text-gray-300">预测对手的底线和让步空间</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="text-yellow-400 text-xl mt-1">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">应对策略建议 + 话术支持：</h3>
                <p className="text-gray-300">
                  面对复杂的谈判局面，CueFlow 快速 为 {NAME} 提供 行之有效 的应对策略和 谈判 话术：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li className="text-gray-300">针对不同谈判策略，提供相应的反制措施</li>
                  <li className="text-gray-300">根据对手的情绪变化，建议 {NAME} 调整谈判策略和语气</li>
                  <li className="text-gray-300">提供各种谈判场景下的开场白、转折语、结束语等话术模板</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="text-yellow-400 text-xl mt-1">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">风险预警与决策辅助：</h3>
                <p className="text-gray-300">
                  CueFlow 更是 {NAME} 的风险预警工具，帮助 {NAME} 识别潜在风险，做出明智决策：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li className="text-gray-300">提醒 {NAME} 注意合同中的潜在陷阱和漏洞</li>
                  <li className="text-gray-300">分析不同决策方案的利弊，并给出建议</li>
                  <li className="text-gray-300">提供历史案例和数据分析，帮助 {NAME} 更好地评估谈判结果</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4: {NAME} 的谈判蜕变 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-100 mb-8 text-center">{NAME} 的谈判蜕变：</h2>
          {/* [插入信息图或对比图：展示使用 CueFlow 前后，谈判成功率、成交金额、谈判效率等方面的对比] */}
          <div className="mt-8">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // 替换为实际图片URL
              alt={`${NAME} 使用 CueFlow 前后对比`}
              className="rounded-xl shadow-xl border border-gray-700 w-full"
            />
          </div>
          <ul className="space-y-6 mt-8">
            <li className="text-gray-300">
              <span className="font-semibold text-yellow-400">谈判策略升级：</span>
              CueFlow 实时辅助 {NAME} 洞察对手意图，拆解谈判策略， हर चाल 都在掌控之中
            </li>
            <li className="text-gray-300">
              <span className="font-semibold text-yellow-400">成交金额 up：</span>
              {NAME} 现在 हर сделка 都能为公司争取到更多利益，老板乐开花
            </li>
            <li className="text-gray-300">
              <span className="font-semibold text-yellow-400">谈判效率翻倍：</span>
              {NAME} 告别低效 переговоры，用更短的时间达成更好的结果
            </li>
            <li className="text-gray-300">
              <span className="font-semibold text-yellow-400">职场口碑爆棚：</span>
              {NAME} 成为团队里最靠谱的谈判专家，升职加薪指日可待
            </li>
          </ul>

          {/* [插入 {NAME} 成功谈判的案例或客户评价，增强说服力] */}
          {/* <div className="mt-8">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-800">
              <p className="text-gray-300">
                "自从用了 CueFlow，我在谈判中更加自信，能够更好地把握节奏，最终为公司争取到了超出预期的收益！"
                <span className="block text-gray-400 mt-2 text-sm font-italic"> - 客户评价</span>
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="bg-gradient-to-br from-yellow-900 via-orange-900 to-yellow-900 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-white mb-8">选择 CueFlow，谈判开挂，签下满意 сделка！</h2>
          <p className="text-gray-200 mb-8">
            别再为谈判烦恼，CueFlow 助你一臂之力，让你在商场上游刃有余，战无不胜！
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-full hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/30"
          >
            立即下载 CueFlow，成为谈判桌上的王者！
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessNegotiationAssistantUserCasePage;
