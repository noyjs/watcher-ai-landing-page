
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free Trial',
      price: '0',
      period: '30 days',
      description: 'Core compliance checking only',
      icon: Star,
      features: [
        'Basic compliance alerts',
        'Model indexing',
        'Standard reporting',
        'Email support',
        'Single project'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '49',
      period: 'per month',
      description: 'Full feature set + regulation updates',
      icon: Check,
      features: [
        'All Free Trial features',
        'Real-time regulation updates',
        'Approval stage tracker',
        'Design suggestions',
        'Kanban project board',
        'PDF/Excel reports',
        'Priority support',
        'Unlimited projects'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'On-site deployment, dedicated training, custom integrations',
      icon: Crown,
      features: [
        'All Professional features',
        'On-premises deployment',
        'Custom integrations',
        'Dedicated training',
        'SSO/SAML support',
        'Advanced analytics',
        '24/7 support',
        'Custom compliance rules'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with our free trial and upgrade as your needs grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in ${
                plan.popular ? 'border-primary border-2 shadow-xl' : 'border shadow-lg'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl ${
                  plan.popular ? 'bg-gradient-primary' : 'bg-gray-100'
                } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <plan.icon className={`h-8 w-8 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                </div>
                
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </CardTitle>
                
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price === 'Custom' ? '' : '$'}{plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className="text-gray-600 ml-1">/{plan.period}</span>
                  )}
                  {plan.price === 'Custom' && (
                    <span className="text-xl text-gray-600">{plan.period}</span>
                  )}
                </div>
                
                <CardDescription className="mt-2 text-gray-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-primary hover:opacity-90 shadow-lg hover:shadow-xl'
                      : 'border-2 border-gray-300 hover:border-primary hover:bg-primary hover:text-white'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All plans include 30-day money-back guarantee
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              No setup fees
            </span>
            <span className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              Cancel anytime
            </span>
            <span className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              SOC 2 compliant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
