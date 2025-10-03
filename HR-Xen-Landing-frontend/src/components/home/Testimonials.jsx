import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "HR-Xen has completely transformed how we manage our 500+ employees. The automated payroll alone saves us 20 hours every month, and the employee self-service portal has reduced HR inquiries by 60%.",
      author: "Sarah Johnson",
      role: "VP of Human Resources",
      company: "TechCorp Solutions",
      avatar: "SJ",
      rating: 5,
    },
    {
      quote:
        "The analytics and reporting features give us insights we never had before. We can now make data-driven decisions about our workforce, and the compliance features ensure we're always up to date with regulations.",
      author: "Michael Chen",
      role: "CEO",
      company: "InnovateLab",
      avatar: "MC",
      rating: 5,
    },
    {
      quote:
        "Implementation was seamless, and the support team was incredible. Within two weeks, we had everything migrated and our team was fully trained. The ROI was immediate and continues to grow.",
      author: "Emily Rodriguez",
      role: "HR Director",
      company: "DataFlow Inc",
      avatar: "ER",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            What our customers say
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real customers have to
            say about their experience with HR-Xen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}>
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  {/* Quote Icon */}
                  <div className="mb-3 sm:mb-4">
                    <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary/60" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-xs sm:text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-xs sm:text-sm text-primary font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">
              4.9/5
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Customer Rating
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">
              98%
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Customer Satisfaction
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">
              95%
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Would Recommend
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">
              24/7
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Support Available
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
