import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Calendar,
  CalendarDays,
  CheckCircle,
  Clock,
  FileText,
  UserCheck,
} from "lucide-react";
import leaveDashboard from "../../assets/images/leave_management.png";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

const LeaveManagementPage = () => {
  const features = [
    {
      icon: Calendar,
      title: "Leave Requests",
      description:
        "Streamlined leave request process with digital forms and automated approval workflows.",
    },
    {
      icon: UserCheck,
      title: "Approval Management",
      description:
        "Multi-level approval system with manager notifications and real-time status updates.",
    },
    {
      icon: Clock,
      title: "Leave Balances",
      description:
        "Automatic tracking of leave balances with real-time updates and carry-over management.",
    },
    {
      icon: FileText,
      title: "Policy Management",
      description:
        "Configure leave policies, accrual rules, and blackout dates for different employee groups.",
    },
    {
      icon: Bell,
      title: "Notifications",
      description:
        "Automated notifications for leave requests, approvals, and upcoming leave dates.",
    },
    {
      icon: CalendarDays,
      title: "Calendar Integration",
      description:
        "Sync with popular calendar applications and team scheduling tools.",
    },
  ];

  const benefits = [
    "Reduce leave processing time by 70%",
    "Eliminate manual leave tracking errors",
    "Improve employee satisfaction with self-service",
    "Ensure policy compliance automatically",
    "Reduce administrative overhead by 50%",
    "Improve workforce planning and coverage",
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
              Leave Management
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Streamline leave requests, approvals, and tracking with our
              comprehensive leave management system designed for modern
              workplaces.
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
              Complete Leave Management Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From request to approval, manage all types of leave with our
              intuitive and automated system.
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
                Why Choose Our Leave Management System?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our solution simplifies leave management while ensuring
                compliance and improving the employee experience with
                self-service capabilities.
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
                  src={leaveDashboard}
                  alt="Leave Management Dashboard"
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
              Ready to Simplify Leave Management?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join companies that have transformed their leave management with
              our automated and user-friendly solution.
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

export default LeaveManagementPage;
