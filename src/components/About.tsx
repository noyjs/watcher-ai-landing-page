
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Active Users', value: '10,000+', color: 'text-blue-500' },
    { icon: Award, label: 'Projects Completed', value: '50,000+', color: 'text-green-500' },
    { icon: Globe, label: 'Countries', value: '25+', color: 'text-purple-500' },
    { icon: Shield, label: 'Uptime', value: '99.9%', color: 'text-orange-500' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Anysphere Inc.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneers in AI-powered design tools trusted by professionals worldwide
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Company Description */}
          <Card className="mb-12 border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="md:flex items-center">
                <div className="md:w-2/3 md:pr-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Building the Future of Design
                  </h3>
                  <div className="prose prose-lg text-gray-600 space-y-4">
                    <p>
                      Developed by Anysphere Inc., Watcher AI represents years of research and development in artificial intelligence and building information modeling. Our team combines deep expertise in architecture, engineering, and machine learning to create tools that truly understand the complexities of modern design.
                    </p>
                    <p>
                      We're committed to empowering architects and engineers with intelligent solutions that enhance creativity while ensuring compliance and efficiency. Our SOC 2-compliant platform includes SSO/SAML support and serves a growing global community of design professionals.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 mt-8 md:mt-0">
                  <img 
                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Team collaboration"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 mx-auto mb-4 ${stat.color.replace('text-', 'bg-').replace('500', '100')} rounded-xl flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Security First</h3>
                <p className="text-gray-600">
                  SOC 2 compliant with enterprise-grade security. Your data is protected with industry-leading encryption and access controls.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Success</h3>
                <p className="text-gray-600">
                  Dedicated support team and comprehensive training programs ensure you get the most out of Watcher AI.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  Continuous improvement and cutting-edge AI research keep our tools at the forefront of design technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
