import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle,
  Download,
  FileText,
  PieChart,
  TrendingUp,
} from "lucide-react";
import analyticsDashboard from "../../assets/images/report_dash.png";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

const AnalyticsPage = () => {
  const features = [
    {
      icon: BarChart3,
      title: "HR Dashboards",
      description:
        "Interactive dashboards with real-time HR metrics and key performance indicators.",
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      description:
        "Track trends over time with advanced analytics and predictive insights.",
    },
    {
      icon: PieChart,
      title: "Custom Reports",
      description:
        "Create custom reports with drag-and-drop report builder and scheduled delivery.",
    },
    {
      icon: FileText,
      title: "Compliance Reports",
      description:
        "Automated compliance reporting for labor laws, diversity, and regulatory requirements.",
    },
    {
      icon: Download,
      title: "Export Options",
      description:
        "Export data in multiple formats including PDF, Excel, and CSV for further analysis.",
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description:
        "Monitor HR activities in real-time with live updates and instant notifications.",
    },
  ];

  const benefits = [
    "Make data-driven HR decisions",
    "Identify trends and patterns quickly",
    "Improve workforce planning accuracy",
    "Ensure compliance with reporting requirements",
    "Reduce report generation time by 80%",
    "Gain insights into employee performance and engagement",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Reporting & Analytics
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your HR data into actionable insights with our
              comprehensive reporting and analytics platform designed for
              data-driven decision making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() =>
                  window.open("https://hr-payroll-two.vercel.app/", "_blank")
                }>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Powerful HR Analytics Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Turn your HR data into strategic insights with our advanced
              reporting and analytics tools.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Choose Our Analytics Solution?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our analytics platform helps you understand your workforce
                better, make informed decisions, and drive organizational
                success.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border">
                <img
                  src={analyticsDashboard}
                  alt="Analytics & Reporting Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Unlock Your HR Data?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join companies that have transformed their HR operations with our
              powerful analytics and reporting platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
                onClick={() =>
                  window.open("https://hr-payroll-two.vercel.app/", "_blank")
                }>
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsPage;
