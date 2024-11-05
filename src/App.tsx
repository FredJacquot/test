import { ArrowRight, Code, Zap, Shield, Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold">DevStack</span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="https://github.com" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Build Faster, Deploy Smarter
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Experience the future of web development with our modern tech stack.
            Built with Vite, React, and Tailwind CSS.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg flex items-center space-x-2 transition-colors">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20" id="features">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors">
            <Code className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Modern Stack</h3>
            <p className="text-gray-400">
              Built with the latest technologies including Vite, React, and TypeScript
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors">
            <Zap className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">
              Optimized for performance with instant HMR and efficient builds
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors">
            <Shield className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Type Safe</h3>
            <p className="text-gray-400">
              Full TypeScript support with strict type checking enabled
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-20" id="about">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4">About the Project</h2>
            <p className="text-gray-300 mb-4">
              This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
              Currently, two official plugins are available:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>@vitejs/plugin-react uses Babel for Fast Refresh</li>
              <li>@vitejs/plugin-react-swc uses SWC for Fast Refresh</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Zap className="w-6 h-6 text-blue-400" />
              <span className="font-semibold">DevStack</span>
            </div>
            <p className="text-gray-500">© 2024 DevStack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;