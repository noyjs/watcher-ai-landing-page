import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Crown, Zap, Sparkles } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free Trial',
      price: '0',
      period: '30 days',
      description: 'Perfect for trying out core features',
      icon: Star,
      features: [
        'Basic compliance alerts',
        'Model indexing',
        'Standard reporting',
        'Email support',
        'Single project',
        'Community access'
      ],
      cta: 'Start Free Trial',
      popular: false,
      gradient: 'from-gray-400 to-gray-600',
      bgGradient: 'from-gray-50 to-gray-100'
    },
    {
      name: 'Professional',
      price: '49',
      period: 'per month',
      description: 'Complete solution for professional teams',
      icon: Zap,
      features: [
        'All Free Trial features',
        'Real-time regulation updates',
        'Advanced approval tracker',
        'AI design suggestions',
        'Kanban project board',
        'PDF/Excel reports',
        'Priority support',
        'Unlimited projects',
        'Team collaboration',
        'Custom integrations'
      ],
      cta: 'Get Started',
      popular: true,
      gradient: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large organizations',
      icon: Crown,
      features: [
        'All Professional features',
        'On-premises deployment',
        'Custom integrations',
        'Dedicated training',
        'SSO/SAML support',
        'Advanced analytics',
        '24/7 premium support',
        'Custom compliance rules',
        'White-label options',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: false,
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200/50 shadow-lg mb-6">
            <Sparkles className="w-4 h-4 text-blue-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Flexible Pricing</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Start with our free trial and upgrade as your needs grow. All plans include our core AI-powered features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in border-0 shadow-xl overflow-hidden ${
                plan.popular ? 'scale-105 z-10' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`bg-gradient-to-r ${plan.gradient} text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg`}>
                    <div className="flex items-center">
                      <Sparkles className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                </div>
              )}

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-50`}></div>
              
              {/* Content */}
              <div className="relative z-10 bg-white/90 backdrop-blur-sm h-full">
                <CardHeader className="text-center pb-4 pt-8">
                  <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <plan.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      {plan.price !== 'Custom' && (
                        <span className="text-5xl font-bold text-gray-900">$</span>
                      )}
                      <span className="text-6xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      {plan.price !== 'Custom' && (
                        <span className="text-gray-600 ml-2">/{plan.period}</span>
                      )}
                    </div>
                    {plan.price === 'Custom' && (
                      <span className="text-xl text-gray-600">{plan.period}</span>
                    )}
                  </div>
                  
                  <CardDescription className="text-gray-600 text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 px-8 pb-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-6 text-lg font-semibold transition-all duration-300 rounded-2xl ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.gradient} hover:shadow-xl hover:scale-105 text-white shadow-lg`
                        : 'border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 bg-white text-gray-700 hover:text-blue-700'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 max-w-4xl mx-auto border border-blue-200/50 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              All plans include our satisfaction guarantee
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              30-day money-back guarantee • No setup fees • Cancel anytime • SOC 2 compliant
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              {[
                { icon: Check, text: 'No setup fees' },
                { icon: Check, text: 'Cancel anytime' },
                { icon: Check, text: 'SOC 2 compliant' },
                { icon: Check, text: '24/7 support' }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mr-2">
                    <item.icon className="h-3 w-3 text-white" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;