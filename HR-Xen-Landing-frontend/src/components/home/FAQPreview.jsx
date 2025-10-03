import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQPreview = () => {
  const faqs = [
    {
      question: "How quickly can we get started with HR-Xen?",
      answer:
        "Most companies are up and running within 2-3 weeks. Our implementation team handles data migration, system configuration, and user training to ensure a smooth transition with minimal disruption to your operations.",
    },
    {
      question: "Is HR-Xen suitable for small businesses?",
      answer:
        "Absolutely! HR-Xen scales from startups with 10 employees to enterprises with 10,000+. Our flexible pricing and feature sets ensure you only pay for what you need, with the ability to scale as you grow.",
    },
    {
      question: "How secure is our employee data?",
      answer:
        "Security is our top priority. We're SOC 2 Type II compliant, use enterprise-grade encryption, and follow strict data protection protocols. Your data is stored in secure, geographically distributed data centers with 99.9% uptime.",
    },
    {
      question: "Can HR-Xen integrate with our existing systems?",
      answer:
        "Yes! HR-Xen offers 200+ pre-built integrations with popular business tools like Slack, Microsoft 365, Google Workspace, and major accounting software. We also provide a robust API for custom integrations.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2">
                <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                  Have Questions?
                </h2>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground">
                We've compiled answers to the most common questions about HRM
                Pro. Can't find what you're looking for? Our support team is
                here to help.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-primary/5 rounded-lg">
                <div className="h-8 w-8 sm:h-10 sm:w-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm sm:text-base">
                    1
                  </span>
                </div>
                <div>
                  <div className="text-sm sm:text-base font-semibold text-foreground">
                    Quick Setup
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    Get started in minutes, not months
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-primary/5 rounded-lg">
                <div className="h-8 w-8 sm:h-10 sm:w-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm sm:text-base">
                    2
                  </span>
                </div>
                <div>
                  <div className="text-sm sm:text-base font-semibold text-foreground">
                    Expert Support
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    24/7 support from HR experts
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-primary/5 rounded-lg">
                <div className="h-8 w-8 sm:h-10 sm:w-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm sm:text-base">
                    3
                  </span>
                </div>
                <div>
                  <div className="text-sm sm:text-base font-semibold text-foreground">
                    Easy Migration
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    Seamless data transfer from any system
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 sm:pt-4">
              <p className="text-xs sm:text-sm text-muted-foreground">
                Still have questions?{" "}
                <a
                  href="/contact"
                  className="text-primary hover:underline font-medium">
                  Contact our team
                </a>{" "}
                for personalized assistance.
              </p>
            </div>
          </motion.div>

          {/* Right Column - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-3 sm:px-4">
                  <AccordionTrigger className="text-left hover:no-underline py-3 sm:py-4">
                    <span className="text-sm sm:text-base font-medium text-foreground">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-3 sm:pb-4">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Additional Help */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 sm:mt-8 p-4 sm:p-6 bg-muted/50 rounded-lg border">
              <h3 className="text-sm sm:text-base font-semibold text-foreground mb-2">
                Need More Help?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                Check out our comprehensive documentation or schedule a call
                with our experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <a
                  href="/documentation"
                  className="text-xs sm:text-sm text-primary hover:underline font-medium">
                  View Documentation →
                </a>
                <a
                  href="/contact"
                  className="text-xs sm:text-sm text-primary hover:underline font-medium">
                  Schedule a Call →
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;
