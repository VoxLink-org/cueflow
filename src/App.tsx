import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  Mic,
  BrainCircuit,
  ShieldCheck,
  FileText,
  Github,
} from 'lucide-react';
import { cn } from "@/lib/utils"
import LanguageSwitcher from './components/LanguageSwitcher';

// Reusable animation variants
const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const slideInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const FeatureCard = ({ icon: Icon, title, description, className }: { icon: React.FC<React.SVGProps<SVGSVGElement>>, title: string, description: string, className?: string }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      variants={slideInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        "bg-gradient-to-br from-gray-900 via-gray-800 to-black/90 bg-opacity-60 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02]",
        className
      )}
    >
      <div className="text-4xl text-center text-blue-400 mb-4">
        <Icon className="w-8 h-8 mx-auto" />
      </div>
      <h3 className="text-xl font-semibold text-center mt-4 text-white">{t(title)}</h3>
      <p className="text-center text-gray-300 mt-2">{t(description)}</p>
    </motion.div>
  );
};

const UseCaseCard = ({ title, description, imageUrl, className }: { title: string, description: string, imageUrl: string, className?: string }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      variants={slideInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        "bg-gradient-to-br from-gray-900 via-gray-800 to-black/90 bg-opacity-60 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] flex flex-col items-center",
        className
      )}
    >
      <div className="w-full rounded-lg overflow-hidden mb-4">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-lg" />
      </div>
      <h3 className="text-xl font-semibold text-center mt-4 text-white">{t(title)}</h3>
      <p className="text-center text-gray-300 mt-2">{t(description)}</p>
    </motion.div>
  );
};

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-900 min-h-screen">
      <header className="bg-gradient-to-b from-black to-gray-900 py-16 md:py-12 ">
        <div className="w-full max-w-screen-xl mx-auto px-4 text-center">
          {/* Include the LanguageSwitcher component here */}
          <div className="absolute top-4 right-4 z-50">
            <LanguageSwitcher />
          </div>

          <motion.h1
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
          >
            {t('CueFlow')}
          </motion.h1>
          <motion.h2
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="text-2xl text-gray-300 mt-4"
          >
            {t('Realtime AI Conversation Assistant')}
          </motion.h2>
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="text-gray-400 mt-6 max-w-3xl mx-auto"
          >
            {t('Empowering your conversations with real-time AI insights. CueFlow analyzes dialogue, understands context, and provides timely assistance, helping you navigate various scenarios with confidence.')}
          </motion.p>
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
            className="mt-8  flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto"
            >
              <a
                href="https://github.com/VoxLink-org/cueflow/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('Download Now')}
              </a>
            </Button>
            <Button
              asChild
              className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-all duration-300 w-full sm:w-auto"
            >
              <a href="#use-cases">
                {t('Explore Use Cases')}
              </a>
            </Button>
          </motion.div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 py-16">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <video
              className="w-full h-72 md:h-96 rounded-xl shadow-2xl border border-gray-800"
              src="interview.mp4"
              controls
              preload="metadata"
              playsInline
              loop
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </section>

      <section id="features" className="bg-gray-900 py-16">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">{t('Key Features')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Mic}
              title="Local Voice Transcription"
              description="Completely offline, local voice recognition ensures your data remains private."
            />
            <FeatureCard
              icon={BrainCircuit}
              title="Real-time AI Suggestions"
              description="Intelligent assistance analyzes conversations in real-time, helping you navigate challenging situations."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Enhanced Privacy"
              description="Supports custom large model APIs, giving you full control over your data."
            />
            <FeatureCard
              icon={FileText}
              title="Smart Analyze"
              description="Intelligently analyzes conversation key points and tasks, improving efficiency."
            />
          </div>
        </div>
      </section>

      <section id="use-cases" className="bg-gray-900 py-16">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">{t('Use Cases')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <UseCaseCard
              title="Live Stream Interaction"
              description="Analyze audience sentiment and provide insights to help hosts deliver engaging content and maximize audience engagement."
              imageUrl="https://images.unsplash.com/photo-1607968565043-36af90dde238?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="lg:scale-105 lg:shadow-lg lg:border-2 lg:border-blue-500/50"
            />
            <UseCaseCard
              title="Technical Discussion"
              description="Assist in technical conversations and programming interviews by providing code suggestions and explanations."
              imageUrl="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <UseCaseCard
              title="Business Negotiation"
              description="Analyze counterparty intentions, understand their emotional state, and make informed decisions."
              imageUrl="https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <UseCaseCard
              title="Job Interview"
              description="Receive real-time suggestions for effective responses, understand interviewer questions, and improve your confidence."
              imageUrl="https://images.unsplash.com/photo-1565688527174-775059ac429c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="lg:scale-105 lg:shadow-lg lg:border-2 lg:border-blue-500/50"
            />
            <UseCaseCard
              title="Customer Communication"
              description="Understand customer needs and preferences to improve satisfaction and increase sales."
              imageUrl="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <UseCaseCard
              title="Meeting Assistance"
              description="Automatically record key points, summarize discussions, and enhance meeting productivity."
              imageUrl="https://images.unsplash.com/photo-1606770347238-77fcfd29906c?q=80&w=3175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="lg:scale-105 lg:shadow-lg lg:border-2 lg:border-blue-500/50"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 py-16">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-800">
            <h2 className="text-2xl font-bold text-center text-white mb-6">{t('Mac Installation Guide')}</h2>
            <p className="text-center text-gray-200 mb-4">
              {t('If you encounter the error "CueFlow is damaged and can\'t be opened," please run the following command in your terminal:')}
            </p>
            <div className="flex justify-center items-center gap-4">
              <code className="bg-gray-800 text-gray-200 py-2 px-4 rounded-md font-mono text-sm">
                sudo xattr -rd com.apple.quarantine /Applications/CueFlow.app
              </code>
              <Button
                variant="outline"
                size="sm"
                className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 hover:text-blue-200 transition-colors duration-200 border-blue-500/30"
                onClick={() => navigator.clipboard.writeText('sudo xattr -rd com.apple.quarantine /Applications/CueFlow.app')}
              >
                {t('Copy')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-8">
        <div className="w-full max-w-screen-xl mx-auto px-4 text-center text-gray-400">
          <div className="flex justify-center items-center space-x-4">
            <p>© {new Date().getFullYear()} CueFlow</p>
            <a
              href="https://github.com/VoxLink-org/cueflow"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <div className="flex items-center gap-1">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

