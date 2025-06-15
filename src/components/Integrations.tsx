
import { Card, CardContent } from '@/components/ui/card';

const Integrations = () => {
  const integrations = [
    { name: 'Revit', logo: '🏗️', color: 'bg-orange-100 text-orange-600' },
    { name: 'Asana', logo: '📋', color: 'bg-purple-100 text-purple-600' },
    { name: 'Jira', logo: '🔧', color: 'bg-blue-100 text-blue-600' },
    { name: 'Municipal API', logo: '🏛️', color: 'bg-green-100 text-green-600' },
    { name: 'State Code Library', logo: '📚', color: 'bg-red-100 text-red-600' },
    { name: 'Slack', logo: '💬', color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Microsoft Teams', logo: '👥', color: 'bg-blue-100 text-blue-600' },
    { name: 'Autodesk Cloud', logo: '☁️', color: 'bg-gray-100 text-gray-600' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
            Seamlessly connects to the tools you already use
          </p>
          <p className="text-gray-500">
            No disruption to your existing workflow
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-12">
            {integrations.map((integration, index) => (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in border-0 shadow-md"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${integration.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {integration.logo}
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {integration.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Integration Flow */}
          <Card className="bg-gradient-secondary border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Connect Your Entire Workflow
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-4 text-center">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow flex items-center justify-center text-xl">
                    🏗️
                  </div>
                  <div className="text-gray-400">→</div>
                  <div className="w-12 h-12 bg-primary rounded-lg shadow flex items-center justify-center text-white font-bold">
                    AI
                  </div>
                  <div className="text-gray-400">→</div>
                  <div className="w-12 h-12 bg-white rounded-lg shadow flex items-center justify-center text-xl">
                    📋
                  </div>
                  <div className="text-gray-400">→</div>
                  <div className="w-12 h-12 bg-white rounded-lg shadow flex items-center justify-center text-xl">
                    🏛️
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-6">
                From design to approval, everything stays in sync automatically
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
