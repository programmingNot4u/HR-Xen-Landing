import { motion } from "framer-motion";
import { ArrowRight, Check, Star, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Sapphire Series",
      description: "Perfect for small teams getting started",
      monthlyPrice: 2000,
      annualPrice: 21600, // 2000 * 12 * 0.9 (10% discount)
      userRange: "1-50",
      features: [
        "Up to 50 employees",
        "Basic payroll processing",
        "Employee self-service portal",
        "Time & attendance tracking",
        "Basic reporting",
        "Email support",
        "Mobile app access",
      ],
      limitations: ["Limited integrations", "Basic analytics only"],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Ruby Series",
      description: "Ideal for growing companies",
      monthlyPrice: 2500,
      annualPrice: 27000, // 2500 * 12 * 0.9 (10% discount)
      userRange: "51-100",
      features: [
        "Up to 100 employees",
        "Advanced payroll & tax compliance",
        "Performance management",
        "Leave management",
        "Advanced reporting & analytics",
        "Priority support",
        "API access",
        "Custom workflows",
        "Integration marketplace",
      ],
      limitations: [],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Emerald Series",
      description: "For medium-sized organizations",
      monthlyPrice: 3500,
      annualPrice: 37800, // 3500 * 12 * 0.9 (10% discount)
      userRange: "101-300",
      features: [
        "Up to 300 employees",
        "Full payroll suite",
        "Advanced analytics & BI",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom training",
        "Advanced security features",
        "Multi-location support",
        "Custom reporting",
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales",
    },
    {
      name: "Amethyst Series",
      description: "For large organizations",
      monthlyPrice: 6000,
      annualPrice: 64800, // 6000 * 12 * 0.9 (10% discount)
      userRange: "301-600",
      features: [
        "Up to 600 employees",
        "Enterprise payroll suite",
        "Advanced analytics & BI",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom training",
        "Advanced security features",
        "Multi-location support",
        "Custom reporting",
        "White-label options",
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales",
    },
    {
      name: "Pearl Series",
      description: "For very large organizations",
      monthlyPrice: 10000,
      annualPrice: 108000, // 10000 * 12 * 0.9 (10% discount)
      userRange: "601-1000",
      features: [
        "Up to 1000 employees",
        "Enterprise payroll suite",
        "Advanced analytics & BI",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom training",
        "Advanced security features",
        "Multi-location support",
        "Custom reporting",
        "White-label options",
        "API customization",
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales",
    },
    {
      name: "Diamond Series",
      description: "For enterprise organizations",
      monthlyPrice: "On Discussion",
      annualPrice: "On Discussion",
      userRange: ">1000",
      features: [
        "Unlimited employees",
        "Enterprise payroll suite",
        "Advanced analytics & BI",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom training",
        "Advanced security features",
        "Multi-location support",
        "Custom reporting",
        "White-label options",
        "API customization",
        "Custom development",
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales",
    },
  ];

  const addOns = [
    {
      name: "Advanced Analytics",
      description: "Deep insights and custom dashboards",
      price: "On Discussion",
      isDiscussion: true,
    },
    {
      name: "Custom Integrations",
      description: "Connect with your existing tools",
      price: "On Discussion",
      isDiscussion: true,
    },
    {
      name: "Priority Support",
      description: "Onsite Support",
      price: 2000,
      priceUnit: "👤",
      isDiscussion: false,
    },
    {
      name: "Additional Storage",
      description: "Extra document storage space",
      price: 1200,
      priceUnit: "month",
      isDiscussion: false,
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
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the plan that fits your team size and needs. All plans
              include a 14-day free trial with no credit card required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="relative">
              <Tabs
                value={isAnnual ? "annual" : "monthly"}
                onValueChange={(value) => setIsAnnual(value === "annual")}>
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="annual">Annual</TabsTrigger>
                </TabsList>
              </Tabs>
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full shadow-lg pointer-events-none z-10">
                Save 10%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${plan.popular ? "md:-mt-8" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <Card
                  className={`h-full ${
                    plan.popular ? "border-primary shadow-lg" : ""
                  }`}>
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-4">
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-foreground">
                          {typeof plan.monthlyPrice === "string"
                            ? plan.monthlyPrice
                            : `Tk. ${
                                isAnnual
                                  ? Math.round(plan.annualPrice / 12)
                                  : plan.monthlyPrice
                              }`}
                        </span>
                        {typeof plan.monthlyPrice !== "string" && (
                          <span className="text-muted-foreground ml-1">
                            /month
                          </span>
                        )}
                      </div>
                      {isAnnual && typeof plan.monthlyPrice !== "string" && (
                        <p className="text-sm text-green-600 mt-2">
                          Save Tk. {plan.monthlyPrice * 12 - plan.annualPrice}{" "}
                          annually (10% off)
                        </p>
                      )}
                      <div className="text-sm text-muted-foreground mt-2">
                        User Range: {plan.userRange}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <Button
                      className={`w-full ${
                        plan.popular ? "bg-primary hover:bg-primary/90" : ""
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                      size="lg">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">
                        What's included:
                      </h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start space-x-3">
                            <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.limitations.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">
                          Limitations:
                        </h4>
                        <ul className="space-y-2">
                          {plan.limitations.map(
                            (limitation, limitationIndex) => (
                              <li
                                key={limitationIndex}
                                className="flex items-start space-x-3">
                                <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">
                                  {limitation}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Add-ons for enhanced functionality
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Customize your plan with additional features to meet your specific
              needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOns.map((addOn, index) => (
              <motion.div
                key={addOn.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="font-semibold text-foreground mb-2">
                        {addOn.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {addOn.description}
                      </p>
                      <div className="text-2xl font-bold text-primary mb-4">
                        {addOn.isDiscussion ? (
                          <span className="text-muted-foreground">
                            {addOn.price}
                          </span>
                        ) : (
                          `Tk. ${addOn.price}${
                            addOn.priceUnit ? `/${addOn.priceUnit}` : "/month"
                          }`
                        )}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        disabled={addOn.isDiscussion}>
                        {addOn.isDiscussion ? "Contact Sales" : "Add to Plan"}
                      </Button>
                    </div>
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
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Can I change plans at any time?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
              },
              {
                question: "What happens after my free trial?",
                answer:
                  "After your 14-day free trial, you can choose to continue with a paid plan or your account will be paused. No charges until you decide to upgrade.",
              },
              {
                question: "Do you offer discounts for annual billing?",
                answer:
                  "Yes! Annual billing saves you 10% compared to monthly billing. This discount is automatically applied when you choose annual billing.",
              },
              {
                question: "Is there a setup fee?",
                answer:
                  "No setup fees, no hidden costs. You only pay for your chosen plan. We also provide free data migration and onboarding support.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of companies already using HRM Pro to streamline
              their HR processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
