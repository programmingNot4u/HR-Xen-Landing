import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Check,
  FileText,
  Search,
  TrendingUp,
  UserCheck,
  UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom";
import recruitment from "../../assets/images/recruitment.png";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

const RecruitmentPage = () => {
  const features = [
    {
      icon: UserPlus,
      title: "Job Posting & Management",
      description:
        "Create, publish, and manage job postings across multiple platforms with automated distribution.",
    },
    {
      icon: Search,
      title: "Applicant Tracking System",
      description:
        "Track candidates through the entire recruitment pipeline from application to hiring decision.",
    },
    {
      icon: Calendar,
      title: "Interview Scheduling",
      description:
        "Automated interview scheduling with calendar integration and automated reminders for all parties.",
    },
    {
      icon: FileText,
      title: "Resume Management",
      description:
        "Centralized resume storage, parsing, and candidate profile creation with advanced search capabilities.",
    },
    {
      icon: UserCheck,
      title: "Candidate Assessment",
      description:
        "Built-in assessment tools, skill testing, and evaluation forms to streamline candidate evaluation.",
    },
    {
      icon: TrendingUp,
      title: "Recruitment Analytics",
      description:
        "Comprehensive analytics on hiring metrics, time-to-fill, source effectiveness, and recruitment ROI.",
    },
  ];

  const benefits = [
    "Reduce time-to-hire by 50%",
    "Improve candidate experience",
    "Streamline interview process",
    "Better candidate matching",
    "Reduce recruitment costs",
    "Enhanced collaboration",
  ];

  const stats = [
    { number: "50%", label: "Faster Time-to-Hire" },
    { number: "85%", label: "Candidate Satisfaction" },
    { number: "40%", label: "Cost Reduction" },
    { number: "95%", label: "Process Efficiency" },
  ];

  const recruitmentSteps = [
    {
      step: "01",
      title: "Job Creation",
      description:
        "Create detailed job postings with requirements and responsibilities.",
    },
    {
      step: "02",
      title: "Candidate Sourcing",
      description:
        "Attract candidates through multiple channels and platforms.",
    },
    {
      step: "03",
      title: "Application Review",
      description: "Review and filter applications using AI-powered screening.",
    },
    {
      step: "04",
      title: "Interview Process",
      description:
        "Schedule and conduct interviews with automated coordination.",
    },
    {
      step: "05",
      title: "Assessment & Evaluation",
      description: "Evaluate candidates using built-in assessment tools.",
    },
    {
      step: "06",
      title: "Hiring Decision",
      description:
        "Make informed hiring decisions with comprehensive candidate data.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                  Streamline Your{" "}
                  <span className="gradient-text">Recruitment Process</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Transform your hiring process with our comprehensive
                  recruitment platform. Find, attract, and hire the best talent
                  efficiently.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                  asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border">
                <img
                  src={recruitment}
                  alt="Recruitment Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Complete Recruitment Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to attract, evaluate, and hire the best
              candidates for your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Streamlined Recruitment Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our platform guides you through every step of the recruitment
              process for maximum efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recruitmentSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center">
                <div className="relative mb-6">
                  <div className="h-16 w-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < recruitmentSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/20 transform translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Why Choose Our Recruitment Platform?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Transform your hiring process with our comprehensive solution
                  designed for modern HR teams.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <Button size="lg" className="text-lg px-8 py-6">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-6 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-primary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Recruitment Process?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of companies already using our recruitment platform
              to find and hire the best talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RecruitmentPage;

