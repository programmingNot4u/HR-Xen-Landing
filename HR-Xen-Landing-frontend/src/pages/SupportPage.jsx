import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  FileText,
  HelpCircle,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Users,
  Video,
} from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      category: "Getting Started",
      faqs: [
        {
          question: "How do I set up my HR-Xen account?",
          answer:
            "Setting up your account is simple! After signing up, you'll receive a welcome email with step-by-step instructions. Our onboarding wizard will guide you through importing employee data, configuring payroll settings, and setting up your first workflows. The entire process typically takes 15-30 minutes.",
        },
        {
          question: "What data do I need to migrate from my current system?",
          answer:
            "We can help you migrate employee profiles, payroll history, time tracking data, and organizational charts. Our migration team will work with you to ensure a smooth transition with minimal downtime. We support imports from most major HR systems and can handle custom data formats.",
        },
        {
          question: "How long does implementation take?",
          answer:
            "Implementation typically takes 2-3 weeks for most companies. This includes data migration, system configuration, user training, and testing. For larger organizations with complex requirements, we may extend this timeline to ensure everything is set up perfectly for your needs.",
        },
      ],
    },
    {
      category: "Account & Billing",
      faqs: [
        {
          question: "How do I upgrade or downgrade my plan?",
          answer:
            "You can change your plan at any time from your account settings. Upgrades take effect immediately, while downgrades take effect at your next billing cycle. We'll prorate any billing differences and send you a detailed invoice.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, MasterCard, American Express), bank transfers, and ACH payments. Enterprise customers can also pay via purchase orders. All payments are processed securely through our PCI-compliant payment system.",
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer:
            "Yes, you can cancel your subscription at any time from your account settings. Your account will remain active until the end of your current billing period. We don't charge cancellation fees or require long-term contracts.",
        },
      ],
    },
    {
      category: "Technical Support",
      faqs: [
        {
          question: "What browsers are supported?",
          answer:
            "HR-Xen works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for the best experience. Our mobile app is available for iOS and Android devices.",
        },
        {
          question: "Is my data backed up?",
          answer:
            "Yes, we perform automated daily backups of all customer data. Your data is stored in multiple geographically distributed data centers with 99.9% uptime guarantee. We also offer point-in-time recovery for enterprise customers.",
        },
        {
          question: "How do I integrate HR-Xen with other systems?",
          answer:
            "We offer 200+ pre-built integrations with popular business tools. You can also use our REST API to build custom integrations. Our integration specialists can help you set up complex integrations and provide ongoing support.",
        },
      ],
    },
    {
      category: "Security & Compliance",
      faqs: [
        {
          question: "Is HR-Xen SOC 2 compliant?",
          answer:
            "Yes, HR-Xen is SOC 2 Type II compliant. We undergo annual third-party audits to ensure we maintain the highest security standards. Our compliance documentation is available upon request for enterprise customers.",
        },
        {
          question: "How is my data encrypted?",
          answer:
            "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We use industry-standard encryption protocols and regularly update our security measures to protect against emerging threats.",
        },
        {
          question: "Do you offer single sign-on (SSO)?",
          answer:
            "Yes, we support SAML 2.0 and OAuth 2.0 for single sign-on integration. This allows your employees to access HR-Xen using your existing identity provider, improving security and user experience.",
        },
      ],
    },
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      responseTime: "< 2 minutes",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with a support specialist",
      availability: "Mon-Fri 9AM-6PM EST",
      responseTime: "Immediate",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message anytime",
      availability: "24/7",
      responseTime: "< 4 hours",
    },
    {
      icon: Video,
      title: "Screen Share",
      description: "Get hands-on help with screen sharing",
      availability: "Mon-Fri 9AM-6PM EST",
      responseTime: "Scheduled",
    },
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and API references",
      link: "/docs",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides for all features",
      link: "/tutorials",
    },
    {
      icon: FileText,
      title: "Knowledge Base",
      description: "Searchable articles and troubleshooting guides",
      link: "/knowledge-base",
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other HR-Xen users",
      link: "/community",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              How can we help you?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers, get support, and connect with our team. We're here
              to help you succeed with HR-Xen.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for help articles, guides, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Get in touch with our support team
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the support channel that works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <channel.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {channel.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {channel.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {channel.availability}
                        </span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-muted-foreground">
                          {channel.responseTime}
                        </span>
                      </div>
                    </div>
                    <Button className="w-full mt-4">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Self-service resources
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers quickly with our comprehensive resource library
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <resource.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {resource.description}
                    </p>
                    <Button variant="outline" className="w-full">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about HR-Xen
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                  <HelpCircle className="h-6 w-6 text-primary mr-3" />
                  {category.category}
                </h3>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium text-foreground">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
            <p className="text-xl text-white/90 mb-8">
              Can't find what you're looking for? Our support team is ready to
              help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90">
                Contact Support
                <MessageCircle className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                Schedule a Call
                <Phone className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
