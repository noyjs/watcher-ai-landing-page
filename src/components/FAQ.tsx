
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from '@/components/ui/card';

const FAQ = () => {
  const faqs = [
    {
      question: "Can I work offline?",
      answer: "Yes, Watcher AI includes offline functionality for core features. While real-time regulation updates require an internet connection, you can continue working on compliance checks and design suggestions offline. The system will sync your progress once you're back online."
    },
    {
      question: "How do regulation updates arrive?",
      answer: "Regulation updates are automatically delivered through our cloud service. We monitor municipal and state code changes continuously and push updates to your installation. You'll receive notifications when new regulations affect your projects, and the system will automatically apply the latest compliance rules."
    },
    {
      question: "What are the minimum system requirements?",
      answer: "Watcher AI requires Autodesk Revit 2020 or later, Windows 10 or 11, minimum 8GB RAM (16GB recommended), and 2GB free disk space. A stable internet connection is recommended for real-time features and updates."
    },
    {
      question: "Which Revit versions are supported?",
      answer: "We support Revit versions 2020, 2021, 2022, 2023, and 2024. Our team maintains compatibility with the latest Revit releases and typically supports new versions within 30 days of their official release."
    },
    {
      question: "How secure is my data?",
      answer: "Your data security is our top priority. We're SOC 2 compliant with enterprise-grade encryption both in transit and at rest. We support SSO/SAML authentication and never store your actual Revit models on our servers - only the compliance metadata necessary for analysis."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about Watcher AI
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-lg px-6 data-[state=open]:bg-gray-50 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Additional Support */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
