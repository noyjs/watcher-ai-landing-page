
import { AlertTriangle, BarChart3, Kanban, Sparkles, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: 'Compliance Alerts',
      description: 'In-Revit pop-ups pinpoint non-conforming elements and link directly to their sheets or families.',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: BarChart3,
      title: 'Approval Stage Tracker',
      description: 'Dockable panel showing completed and pending permit steps—click any step to open related documentation.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Kanban,
      title: 'Project Management Board',
      description: 'Built-in Kanban board for tasks, deadlines, and assignees—syncs with Asana, Jira, and more via webhooks.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Sparkles,
      title: 'Smart Design Proposals',
      description: 'AI analyzes your own previous models (or similar projects) to suggest ideal room layouts, curtain-wall placement, family types, draft detail views, and more.',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: FileText,
      title: 'Visual Reports & Dashboards',
      description: 'Export compliance reports in PDF or Excel and view a live dashboard (percentage compliance, time per approval stage, recent suggestions).',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful tools designed to streamline your workflow and ensure compliance at every step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in border-0 shadow-lg"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
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
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-white border-0 shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Real-time Integration
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Watcher AI seamlessly integrates into your existing Revit workflow, providing instant feedback and suggestions without interrupting your creative process.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Non-intrusive background monitoring
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Instant compliance notifications
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    One-click resolution suggestions
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Watcher AI Dashboard"
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
