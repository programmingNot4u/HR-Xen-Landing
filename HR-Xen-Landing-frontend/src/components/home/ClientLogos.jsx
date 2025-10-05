import { motion } from "framer-motion";

const ClientLogos = () => {
  const logos = [
    { name: "RP Textile & Fashion", width: 140 },
    { name: "InnovateLab", width: 140 },
    { name: "RP Creations & Apparels Ltd", width: 140 },
    { name: "CloudSync", width: 130 },
    { name: "C&M Fashion", width: 125 },
    { name: "NextGen", width: 100 },
  ];

  return (
    <section className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
            Trusted by innovative companies worldwide
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Join thousands of forward-thinking organizations that have
            transformed their HR processes with HR-Xen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-2 sm:p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105">
              <div
                className="bg-muted rounded-lg flex items-center justify-center h-8 sm:h-10 lg:h-12 w-full"
                style={{ width: `${Math.min(logo.width, 120)}px` }}>
                <span className="text-xs sm:text-sm font-semibold text-muted-foreground">
                  {logo.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">
              10,000+
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Companies
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">
              2M+
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Employees
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">
              99.9%
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Uptime
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
