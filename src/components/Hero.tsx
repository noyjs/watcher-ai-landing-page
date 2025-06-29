import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles, Zap, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-blue-500" />
          </div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float delay-1000">
          <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-purple-500" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/5 animate-float delay-2000">
          <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-green-500" />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-lg mb-6 animate-fade-in">
                <Sparkles className="w-4 h-4 text-blue-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">AI-Powered Revit Intelligence</span>
              </div>

              {/* Main Headlines */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Watcher AI
                </span>
                <br />
                <span className="text-gray-900">Your Smart</span>
                <br />
                <span className="text-gray-900">Revit Add-in</span>
              </h1>
              
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 mb-8 font-light animate-fade-in delay-200">
                Design freely, we'll watch the rules
              </p>
              
              {/* Enhanced Intro Paragraph */}
              <div className="mb-10 animate-fade-in delay-400">
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                  Watcher AI is an intelligent Autodesk Revit plug-in that continuously compares your BIM model against 
                  <span className="font-semibold text-blue-600"> municipal and state code</span>, tracks every approval stage, 
                  and even proposes <span className="font-semibold text-purple-600">design enhancements</span>—so you never 
                  worry about compliance or lose sight of project milestones.
                </p>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 mb-8 animate-fade-in delay-600">
                <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 rounded-2xl">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="group text-lg px-8 py-6 border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 rounded-2xl backdrop-blur-sm bg-white/80">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 animate-fade-in delay-800">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  SOC 2 Compliant
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  10,000+ Users
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  99.9% Uptime
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced Hero Image */}
            <div className="relative animate-scale-in delay-800">
              {/* Main Image Container */}
              <div className="relative aspect-video bg-white rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Watcher AI Interface Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                
                {/* Overlay UI Elements */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Live Monitoring</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">99%</div>
                    <div className="text-sm text-gray-600">Compliant</div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">AI Suggestions</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Compliance Check</div>
                    <div className="text-sm text-gray-500">Real-time monitoring</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 animate-float delay-1000">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Smart Suggestions</div>
                    <div className="text-sm text-gray-500">AI-powered insights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;