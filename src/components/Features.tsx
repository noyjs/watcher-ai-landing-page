import { AlertTriangle, BarChart3, Kanban, Sparkles, FileText, Zap, Shield, Brain, Target, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: 'Smart Compliance Alerts',
      description: 'In-Revit pop-ups pinpoint non-conforming elements and link directly to their sheets or families with intelligent context.',
      color: 'text-red-500',
      bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
      borderColor: 'border-red-200'
    },
    {
      icon: BarChart3,
      title: 'Visual Progress Tracker',
      description: 'Beautiful dockable panel showing completed and pending permit steps—click any step to open related documentation instantly.',
      color: 'text-blue-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      icon: Kanban,
      title: 'Integrated Project Board',
      description: 'Built-in Kanban board for tasks, deadlines, and assignees—syncs seamlessly with Asana, Jira, and more via webhooks.',
      color: 'text-purple-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
      borderColor: 'border-purple-200'
    },
    {
      icon: Brain,
      title: 'AI Design Intelligence',
      description: 'Advanced AI analyzes your previous models and similar projects to suggest optimal room layouts, curtain-wall placement, and family types.',
      color: 'text-green-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
      borderColor: 'border-green-200'
    },
    {
      icon: FileText,
      title: 'Dynamic Reports & Analytics',
      description: 'Export stunning compliance reports in PDF or Excel and view live dashboards with percentage compliance and time tracking.',
      color: 'text-orange-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100',
      borderColor: 'border-orange-200'
    },
    {
      icon: Zap,
      title: 'Real-time Sync',
      description: 'Lightning-fast synchronization across all your devices and team members with instant notifications and updates.',
      color: 'text-yellow-500',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
      borderColor: 'border-yellow-200'
    }
  ];

  const stats = [
    { icon: Target, label: 'Accuracy Rate', value: '99.8%', color: 'text-green-600' },
    { icon: Clock, label: 'Time Saved', value: '40hrs/week', color: 'text-blue-600' },
    { icon: Shield, label: 'Projects Protected', value: '50K+', color: 'text-purple-600' },
    { icon: Zap, label: 'Response Time', value: '<100ms', color: 'text-orange-600' }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-lg mb-6">
            <Sparkles className="w-4 h-4 text-blue-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Build with Confidence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Powerful tools designed to streamline your workflow and ensure compliance at every step of your design process
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${stat.color.replace('text-', 'from-').replace('-600', '-400')} to-${stat.color.replace('text-', '').replace('-600', '-600')} rounded-xl flex items-center justify-center`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-4 relative">
                <div className={`absolute top-0 left-0 w-full h-1 ${feature.bgColor.replace('bg-gradient-to-br from-', 'bg-').replace('-50 to-', '-').replace('-100', '500')}`}></div>
                <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} border ${feature.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl overflow-hidden rounded-3xl">
            <div className="md:flex">
              <div className="md:w-1/2 p-12">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
                  <Zap className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-blue-700">Real-time Integration</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Seamless Workflow Integration
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Watcher AI seamlessly integrates into your existing Revit workflow, providing instant feedback and suggestions without interrupting your creative process.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Non-intrusive background monitoring',
                    'Instant compliance notifications',
                    'One-click resolution suggestions',
                    'Smart learning from your patterns'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-purple-50 p-12 flex items-center justify-center relative">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Watcher AI Dashboard"
                    className="rounded-2xl shadow-2xl max-w-full h-auto"
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 animate-float">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Live</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 animate-float delay-1000">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">24/7</div>
                      <div className="text-xs text-gray-500">Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;