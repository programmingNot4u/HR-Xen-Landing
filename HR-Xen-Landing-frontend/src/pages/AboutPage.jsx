import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Facebook,
  Heart,
  Lightbulb,
  Linkedin,
  MessageCircle,
  Shield,
  Target,
  Users,
} from "lucide-react";
import ceoImage from "../assets/images/ceo.jpg";
import cooImage from "../assets/images/coo.jpg";
import executiveDirectorImage from "../assets/images/executive director.jpg";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const AboutPage = () => {
  const values = [
    {
      icon: Users,
      title: "People First",
      description:
        "We believe that technology should empower people, not replace them. Our platform is designed to make HR professionals' jobs easier and more meaningful.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously push the boundaries of what's possible in HR technology, always looking for new ways to solve old problems.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "Your data security is our top priority. We maintain the highest standards of security and compliance to protect your sensitive information.",
    },
    {
      icon: Heart,
      title: "Customer Success",
      description:
        "We measure our success by your success. Our team is dedicated to helping you achieve your HR goals and grow your business.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Companies Served" },
    { number: "2M+", label: "Employees Managed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
  ];

  const team = [
    {
      name: "Muttakin Hasan Wakil",
      role: "Chief Executive Officer",
      image: ceoImage,
      description:
        "Founder and CEO, driving HR-Xen's mission to transform workforce management.",
      social: {
        facebook: "https://www.facebook.com/muttakin.hasanwakil",
        linkedin: "https://www.linkedin.com/in/hassanwakil",
        whatsapp: "https://wa.me/8801730215863",
      },
    },
    {
      name: "Hossain Imam Rony",
      role: "Chief Operating Officer",
      image: cooImage,
      description:
        "Oversees day-to-day operations, ensuring seamless service delivery and customer success across all markets.",
      social: {
        facebook: "https://www.facebook.com/hossain.imam.rony.5.me/",
        linkedin: "https://www.linkedin.com/in/md-hossan-imam-441963243",
        whatsapp: "https://wa.me/8801747742519",
      },
    },
    {
      name: "Monir Hossain Monim",
      role: "Executive Director",
      image: executiveDirectorImage,
      description:
        "Strategic leader with extensive experience in business development and partnerships. Drives growth initiatives and strategic partnerships to expand HR-Xen's global presence.",
      social: {
        facebook: "https://www.facebook.com/share/1FE2xdB2EJ/",
        linkedin: "https://www.linkedin.com/in/monir-hossain-monim-90997915a",
        whatsapp: "https://wa.me/8801626949506",
      },
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
              About HR-Xen
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to revolutionize how companies manage their
              most valuable asset - their people. Founded in 2020, HR-Xen has
              grown from a startup idea to a trusted platform serving thousands
              of organizations worldwide.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Learn More About Our Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Target className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower HR professionals and business leaders with
                  intuitive, powerful tools that streamline workforce
                  management, enhance employee experience, and drive
                  organizational success.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that when HR processes are simplified and
                  automated, companies can focus on what matters most - building
                  great teams and creating amazing workplace experiences.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become the world's most trusted HR technology platform,
                  enabling every organization to create exceptional employee
                  experiences and achieve their business goals.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a future where HR technology is so intuitive and
                  powerful that it becomes invisible - allowing HR professionals
                  to focus on strategic initiatives and human connections.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do, from product development
              to customer support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Numbers that tell the story of our growth and the trust our
              customers place in us.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The passionate leaders driving HR-Xen's mission to transform HR
              technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="h-32 w-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <div className="text-primary font-medium mb-3">
                      {member.role}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {member.description}
                    </p>

                    {/* Social Media Links */}
                    <div className="flex justify-center space-x-4">
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="Facebook">
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={member.social.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="WhatsApp">
                        <MessageCircle className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold mb-4">
              Ready to join our mission?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Experience the difference that a people-first approach to HR
              technology can make for your organization.
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
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
