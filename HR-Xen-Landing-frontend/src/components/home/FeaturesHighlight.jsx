import { motion } from "framer-motion";
import {
  BarChart3,
  Calculator,
  Calendar,
  Clock,
  FileText,
  Globe,
  Settings,
  Shield,
  Smartphone,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const FeaturesHighlight = () => {
  const features = [
    {
      icon: Calculator,
      title: "Automated Payroll",
      description:
        "Streamline payroll processing with automated calculations, tax compliance, and direct deposit. Reduce errors and save hours every pay period.",
    },
    {
      icon: Users,
      title: "Employee Management",
      description:
        "Complete employee lifecycle management from onboarding to offboarding. Centralized employee data and self-service portal.",
    },
    {
      icon: Calendar,
      title: "Leave Management",
      description:
        "Intuitive leave request system with approval workflows, calendar integration, and comprehensive reporting for better workforce planning.",
    },
    {
      icon: Clock,
      title: "Time & Attendance",
      description:
        "Advanced time tracking with GPS verification, shift scheduling, and overtime calculations. Perfect for remote and hybrid teams.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Comprehensive dashboards and reports to track HR metrics, employee performance, and make data-driven decisions.",
    },
    {
      icon: Shield,
      title: "Asset Management",
      description:
        "Efficient tracking and management of assets with real-time updates and complete visibility across their lifecycle.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Everything you need to manage your workforce
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive HRM platform combines powerful features with
            intuitive design to streamline every aspect of human resource
            management.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
              And much more...
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Discover additional features that make HR-Xen the complete
              solution
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: UserCheck, name: "Performance Reviews" },
              { icon: Settings, name: "Custom Workflows" },
              { icon: Smartphone, name: "Mobile App" },
              { icon: Globe, name: "Multi-language" },
              { icon: TrendingUp, name: "Goal Tracking" },
              { icon: FileText, name: "Document Management" },
              { icon: Users, name: "Team Collaboration" },
              { icon: BarChart3, name: "Custom Reports" },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-3 sm:p-4 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="h-8 w-8 sm:h-10 sm:w-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="text-xs sm:text-sm font-medium text-foreground">
                  {item.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesHighlight;
