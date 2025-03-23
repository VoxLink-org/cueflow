import { Github } from 'lucide-react'
import 'react'

export default function Footer() {
    return (
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
    )
}