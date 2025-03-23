import 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  Mic,  // 麦克风
  Bot, // 机器人
  MessageCircle, // 聊天气泡
  Users,   // 用户
} from 'lucide-react';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const LiveBroadcastAssistantUserCasePage = () => {
  const NAME = <div className='text-gray-400 inline mx-2'>YC-打工版</div>
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
          直播新人的开挂神器：AI智能体全程带飞，轻松hold住全场！
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mt-6"
        >
          {/* [大幅醒目配图：CC 使用 CueFlow 自信控场的直播场景，背景虚化，突出主播和 CueFlow 界面] */}
          <div className="mt-8">
            <img
              src="https://images.unsplash.com/photo-1522327646852-4e28586a40dd?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={`${NAME} 使用 CueFlow 直播场景`}
              className="rounded-xl shadow-2xl border border-gray-800 w-full"
            />
          </div>
        </motion.div>
      </header>

      {/* Section 2: 主播痛点 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-100 mb-8 text-center">新人主播痛点</h2>
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-800">
            <ul className="list-disc list-inside space-y-4 text-gray-300">
              <li>OMG！害怕冷场，气氛尬到脚趾抠地</li>
              <li>心态崩了！面对黑粉和质疑，瞬间懵逼</li>
              <li>经验不足，直播节奏乱成麻</li>
              <li>害怕翻车！直播事故毁所有</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Section 3: CueFlow 解决方案 */}
      <section className="bg-gray-800 py-16 rounded-lg shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-100 mb-8 text-center">CueFlow 解决方案：直播开挂，就靠它！</h2>
          <p className="text-gray-300 mb-8">
            CueFlow 是一款专为直播主播打造的 AI 实时辅助工具。它就像一位经验丰富的直播导师，在 {NAME} 的直播过程中，提供全方位的智能支持。
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="text-blue-400 text-xl mt-1">
                <Mic className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">实时语音监听 + 屏幕信息捕捉：</h3>
                <p className="text-gray-300">CueFlow 实时捕捉直播间内的所有对话和屏幕信息，并迅速将其转化为清晰的文本，任何风吹草动都逃不过你的法眼！</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="text-blue-400 text-xl mt-1">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">AI 场面分析与风险预警：</h3>
                <p className="text-gray-300">
                  CueFlow 不仅能理解观众的发言，还能分析屏幕上的互动信息， 快速 识别以下潜在风险：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li className="text-gray-300">观众的负面评价或质疑</li>
                  <li className="text-gray-300">不友好的言论或争吵</li>
                  <li className="text-gray-300">直播节奏混乱，观众感到无聊</li>
                  <li className="text-gray-300">弹幕中的刷屏、广告等不良信息</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="text-blue-400 text-xl mt-1">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">高情商回复建议：</h3>
                <p className="text-gray-300">
                  面对复杂多变的直播场景，CueFlow 快速 为 {NAME} 提供 高情商 的回复建议：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li className="text-gray-300">对于负面评价，给出委婉又不失 专业的 解释话术</li>
                  <li className="text-gray-300">对于不友好的言论，指导 {NAME} 如何巧妙化解，维护直播间氛围</li>
                  <li className="text-gray-300">对于直播节奏问题，建议 {NAME} 调整语速，增加互动环节，牢牢抓住观众的注意力</li>
                  <li className="text-gray-300">对于异常弹幕，提醒 {NAME} 开启弹幕管理，或引导观众文明互动</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="text-blue-400 text-xl mt-1">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">控场辅助与话术提示：</h3>
                <p className="text-gray-300">
                  CueFlow 更是 {NAME} 的控场 辅助工具，提供丰富的互动技巧和 精彩 话术，帮助 {NAME} 轻松掌控直播间：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-6">
                  <li className="text-gray-300">如何引导观众参与话题讨论， 提高 参与度</li>
                  <li className="text-gray-300">如何巧妙转移敏感话题，避免 尴尬 情况</li>
                  <li className="text-gray-300">如何在直播间营造积极向上的氛围，吸引更多粉丝</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4: {NAME} 的直播蜕变 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-100 mb-8 text-center">{NAME} 的直播蜕变：</h2>
          {/* [插入信息图或对比图：展示使用 CueFlow 前后，直播间互动氛围、主播自信心、粉丝增长等方面的对比] */}
          <div className="mt-8">
            <img
              src="https://images.unsplash.com/photo-1607968565043-36af90dde238" // 替换为实际图片URL
              alt={`${NAME} 使用 CueFlow 前后对比`}
              className="rounded-xl shadow-xl border border-gray-700 w-full"
            />
          </div>
          <ul className="space-y-6 mt-8">
            <li className="text-gray-300">
              <span className="font-semibold text-blue-400">开挂的直播状态：</span>
              CueFlow实时提词像随身弹幕指挥，{NAME}秒切营业模式，突发状况都能丝滑接住
            </li>
            <li className="text-gray-300">
              <span className="font-semibold text-blue-400">控场节奏大师：</span>
              {NAME}现在带节奏6到飞起，观众互动越来越频繁，新人进来就舍不得划走
            </li>
            <li className="text-gray-300">
              <span className="font-semibold text-blue-400">人设buff叠满：</span>
              CueFlow的智能话术外挂，让{NAME}每次回应都精准拿捏，专业感不知不觉就立住了
            </li>
            <li className="text-gray-300">
              <span className="font-semibold text-blue-400">直播像开滤镜：</span>
              现在{NAME}自带直播间气场，才艺展示信手拈来，粉丝量每天都在解锁新成就
            </li>
          </ul>

          {/* [插入 {NAME} 的直播间精彩片段视频，或与观众互动的录屏，增强说服力] */}
          {/* <div className="mt-8">
            <video
              className="w-full h-64 md:h-96 rounded-xl shadow-2xl border border-gray-800"
              src="https://interactive-examples.mdn.mozilla.net/media/{name}0-videos/flower.mp4" // 替换为实际视频URL
              controls
              preload="metadata"
              playsInline
              loop
            >
              Your browser does not support the video tag.
            </video>
          </div> */}
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-white mb-8">选择 CueFlow，直播开挂，一路超神！</h2>
          <p className="text-gray-200 mb-8">
            别再焦虑直播没梗，CueFlow 助你一臂之力，让你在直播间火力全开，人气爆棚！
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
          >
            立即下载 CueFlow，开启你的精彩直播之旅！
          </Button>
        </div>
      </section>

      {/* Section 6: 着陆页设计建议 (Optional -  For documentation) */}
      <Footer />
    </div>
  );
};

export default LiveBroadcastAssistantUserCasePage;

