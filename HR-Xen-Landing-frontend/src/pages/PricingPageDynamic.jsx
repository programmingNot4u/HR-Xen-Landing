import { motion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import apiService from "../services/api";

const PricingPageDynamic = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [pricingData, setPricingData] = useState({
    plans: [],
    addons: [],
    faqs: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPricingData();
  }, []);

  const fetchPricingData = async () => {
    try {
      setLoading(true);
      const data = await apiService.pricing.getSummary();
      setPricingData(data);
    } catch (err) {
      console.error("Failed to fetch pricing data:", err);
      setError("Failed to load pricing information. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">
            Loading pricing information...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              Unable to Load Pricing
            </h3>
            <p className="text-red-600 mb-4">{error}</p>
            <Button
              onClick={fetchPricingData}
              className="bg-red-600 hover:bg-red-700">
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const { plans, addons, faqs } = pricingData;

  // Sort plans: low to high price, but Diamond Series (0.00) always last
  const sortedPlans = [...plans].sort((a, b) => {
    const priceA = parseFloat(a.monthly_price);
    const priceB = parseFloat(b.monthly_price);

    // If both are 0 (Diamond Series), keep original order
    if (priceA === 0 && priceB === 0) return 0;

    // If one is 0 (Diamond Series), put it at the end
    if (priceA === 0) return 1;
    if (priceB === 0) return -1;

    // Otherwise, sort low to high
    return priceA - priceB;
  });

  // Show message if no data is available
  if (plans.length === 0 && addons.length === 0 && faqs.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Pricing Information Coming Soon
            </h2>
            <p className="text-blue-600 mb-6">
              We're currently setting up our pricing plans. Please check back
              soon or contact our sales team for more information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={fetchPricingData}
                className="bg-blue-600 hover:bg-blue-700">
                Refresh
              </Button>
              <Button
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-50">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            {sortedPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative">
                {plan.is_popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Star className="h-4 w-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}
                <Card
                  className={`h-full ${
                    plan.is_popular ? "border-primary shadow-lg" : ""
                  }`}>
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mb-6">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-4">
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-foreground">
                          {plan.monthly_price === "0.00" ||
                          plan.monthly_price === 0
                            ? "On Discussion"
                            : `Tk. ${
                                isAnnual
                                  ? Math.round(
                                      parseFloat(plan.annual_price) / 12
                                    )
                                  : parseFloat(plan.monthly_price)
                              }`}
                        </span>
                        {plan.monthly_price !== "0.00" &&
                          plan.monthly_price !== 0 && (
                            <span className="text-muted-foreground ml-1">
                              /month
                            </span>
                          )}
                      </div>
                      {isAnnual &&
                        plan.monthly_price !== "0.00" &&
                        plan.monthly_price !== 0 && (
                          <p className="text-sm text-green-600 mt-2">
                            Save Tk.{" "}
                            {parseFloat(plan.monthly_price) * 12 -
                              parseFloat(plan.annual_price)}{" "}
                            annually (10% off)
                          </p>
                        )}
                      <div className="text-sm text-muted-foreground mt-2">
                        User Range: {plan.user_range}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Button
                      className={`w-full ${
                        plan.is_popular ? "bg-primary hover:bg-primary/90" : ""
                      }`}
                      variant={plan.is_popular ? "default" : "outline"}
                      size="lg">
                      {plan.cta_text}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">
                        What's included:
                      </h4>
                      <ul className="space-y-2">
                        {plan.features?.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start space-x-3">
                            <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {feature.title}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      {addons.length > 0 && (
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
                Customize your plan with additional features to meet your
                specific needs.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {addons.map((addon, index) => (
                <motion.div
                  key={addon.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <h3 className="font-semibold text-foreground mb-2">
                          {addon.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {addon.description}
                        </p>
                        <div className="text-2xl font-bold text-primary mb-4">
                          {addon.is_discussion ? (
                            <span className="text-muted-foreground">
                              {addon.price_unit}
                            </span>
                          ) : (
                            `Tk. ${addon.price}${
                              addon.price_unit
                                ? `/${addon.price_unit}`
                                : "/month"
                            }`
                          )}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          disabled={addon.is_discussion}>
                          {addon.is_discussion
                            ? "Contact Sales"
                            : "Add to Plan"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
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
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
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
      )}

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

export default PricingPageDynamic;
