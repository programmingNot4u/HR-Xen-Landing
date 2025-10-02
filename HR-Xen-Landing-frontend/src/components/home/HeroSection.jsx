import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Play } from "lucide-react";
import { Link } from "react-router-dom";
import adminDashboard from "../../assets/images/admin_dahboard.png";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/20 py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-10">
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Modernize Your HR.{" "}
                <span className="gradient-text">Simplify Your Payroll.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                Our all-in-one platform automates everything from onboarding to
                payroll, giving you back the time to focus on your people. Join
                thousands of companies already transforming their HR processes.
              </motion.p>
            </div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 relative z-10">
              <Button
                size="lg"
                className="text-lg px-8 py-6 cursor-pointer relative z-20"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Get a Demo button clicked");
                  window.open("https://hr-payroll-two.vercel.app/", "_blank");
                }}>
                Get a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 cursor-pointer relative z-20"
                asChild>
                <Link
                  to="/pricing"
                  onClick={() => console.log("View Pricing button clicked")}>
                  View Pricing
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by 10,000+ companies worldwide
              </p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="h-8 w-24 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs font-semibold">Company A</span>
                </div>
                <div className="h-8 w-24 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs font-semibold">Company B</span>
                </div>
                <div className="h-8 w-24 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs font-semibold">Company C</span>
                </div>
                <div className="h-8 w-24 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs font-semibold">Company D</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative">
            {/* Actual HR Admin Dashboard */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border">
              <img
                src={adminDashboard}
                alt="HR Admin Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg">
              <CheckCircle className="h-6 w-6" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
              <Play className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
