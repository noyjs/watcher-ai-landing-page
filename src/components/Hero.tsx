
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Main Headlines */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                <span className="text-gradient">Watcher AI</span>
                <br />
                <span className="text-gray-900">Your Smart Revit Add-in</span>
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 font-medium animate-fade-in delay-200">
                Design freely, we'll watch the rules
              </p>
              
              {/* Intro Paragraph */}
              <div className="mb-8 animate-fade-in delay-400">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Watcher AI is an intelligent Autodesk Revit plug-in that continuously compares your BIM model against municipal and state code, tracks every approval stage, and even proposes design enhancements—so you never worry about compliance or lose sight of project milestones.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 mb-8 animate-fade-in delay-600">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-gray-50 transition-colors">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative animate-scale-in delay-800">
              <div className="aspect-video bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Watcher AI Interface Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating UI Elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-pulse">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-pulse delay-1000">
                <div className="text-sm font-semibold text-gray-800">99% Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
