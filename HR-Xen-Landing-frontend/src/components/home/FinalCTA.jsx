import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const FinalCTA = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary to-primary-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full blur-lg"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-300 fill-current" />
            <span className="text-xs sm:text-sm font-medium">
              Join 10,000+ companies already using HR-Xen
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Ready to transform your HR process?
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Start your free trial today and see why thousands of companies
            choose HR-Xen to streamline their human resource management.
          </p>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3">
              <CheckCircle className="h-4 w-4 sm:h-6 sm:w-6 text-green-300" />
              <span className="text-sm sm:text-base font-medium">
                Free 14-day trial
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 sm:space-x-3">
              <CheckCircle className="h-4 w-4 sm:h-6 sm:w-6 text-green-300" />
              <span className="text-sm sm:text-base font-medium">
                No credit card required
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 sm:space-x-3">
              <CheckCircle className="h-4 w-4 sm:h-6 sm:w-6 text-green-300" />
              <span className="text-sm sm:text-base font-medium">
                Setup in minutes
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-white text-primary hover:bg-white/90 font-semibold w-full sm:w-auto"
              asChild>
              <Link to="/demo">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold w-full sm:w-auto"
              asChild>
              <Link to="/contact">Talk to Sales</Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20">
            <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
              Trusted by companies of all sizes
            </p>

          </motion.div>

          {/* Security Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/70">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
              <span>GDPR Ready</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
              <span>Enterprise Security</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
