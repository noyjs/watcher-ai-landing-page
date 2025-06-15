
import { Search, Shield, CheckCircle, Lightbulb } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Model Indexing',
      description: 'Automatically scan and index your Revit elements',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Regulation Monitoring',
      description: 'Continuous "watch" against zoning, fire-safety, accessibility rules',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: CheckCircle,
      title: 'Approval Tracking',
      description: 'Real-time status board for municipal review stages and custom checkpoints',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Lightbulb,
      title: 'Design Suggestions',
      description: 'AI-powered recommendations based on past projects and best practices',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to transform your Revit workflow with intelligent automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center text-sm font-bold text-gray-700">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2 -z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-secondary rounded-2xl p-8 shadow-inner">
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-6">
              Continuous Workflow Integration
            </h3>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <span className="px-3 py-1 bg-white rounded-full shadow">Your Design</span>
              <div className="flex-1 h-0.5 bg-gray-300 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary w-3 h-3 rounded-full animate-pulse"></div>
              </div>
              <span className="px-3 py-1 bg-white rounded-full shadow">AI Analysis</span>
              <div className="flex-1 h-0.5 bg-gray-300 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary w-3 h-3 rounded-full animate-pulse delay-500"></div>
              </div>
              <span className="px-3 py-1 bg-white rounded-full shadow">Compliance Report</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
