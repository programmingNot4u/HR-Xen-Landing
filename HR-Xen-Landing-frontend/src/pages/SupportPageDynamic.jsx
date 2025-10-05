import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Send,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import apiService from "../services/api";

const SupportPageDynamic = () => {
  const [activeTab, setActiveTab] = useState("tickets");
  const [tickets, setTickets] = useState([]);
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "general",
    message: "",
  });

  // Support ticket form state
  const [ticketForm, setTicketForm] = useState({
    title: "",
    description: "",
    category: "general",
    priority: "medium",
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  useEffect(() => {
    fetchSupportData();
  }, []);

  const fetchSupportData = async () => {
    try {
      setLoading(true);
      const [articlesData, categoriesData] = await Promise.all([
        apiService.support.getArticles(),
        apiService.support.getCategories(),
      ]);
      setArticles(articlesData.results || articlesData);
      setCategories(categoriesData);
    } catch (err) {
      console.error("Failed to fetch support data:", err);
      setError("Failed to load support information. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiService.support.submitContactForm(contactForm);
      alert("Thank you for your message! We'll get back to you soon.");
      setContactForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "general",
        message: "",
      });
    } catch (err) {
      console.error("Failed to submit contact form:", err);
      alert("Failed to send message. Please try again.");
    }
  };

  const handleTicketSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiService.support.createTicket(ticketForm);
      alert("Support ticket created successfully! We'll get back to you soon.");
      setTicketForm({
        title: "",
        description: "",
        category: "general",
        priority: "medium",
        name: "",
        email: "",
        company: "",
        phone: "",
      });
    } catch (err) {
      console.error("Failed to create support ticket:", err);
      alert("Failed to create support ticket. Please try again.");
    }
  };

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">
            Loading support information...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <Button onClick={fetchSupportData}>Try Again</Button>
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
              We're Here to{" "}
              <span className="gradient-text">Help You Succeed</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get the support you need with our comprehensive help center,
              knowledge base, and dedicated support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Search className="mr-2 h-5 w-5" />
                Search Help Center
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    Support Tickets
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Submit a support ticket and get help from our technical team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full"
                    onClick={() => setActiveTab("tickets")}>
                    Create Ticket
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}>
              <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    Knowledge Base
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Browse our comprehensive help articles and guides
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full"
                    onClick={() => setActiveTab("knowledge")}>
                    Browse Articles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}>
              <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    Contact Us
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Get in touch with our team for general inquiries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full"
                    onClick={() => setActiveTab("contact")}>
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === "tickets" && (
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                  Create Support Ticket
                </h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Submit a Support Request</CardTitle>
                    <CardDescription>
                      Fill out the form below and our support team will get back
                      to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleTicketSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Full Name *
                          </label>
                          <Input
                            value={ticketForm.name}
                            onChange={(e) =>
                              setTicketForm({
                                ...ticketForm,
                                name: e.target.value,
                              })
                            }
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            value={ticketForm.email}
                            onChange={(e) =>
                              setTicketForm({
                                ...ticketForm,
                                email: e.target.value,
                              })
                            }
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Company
                          </label>
                          <Input
                            value={ticketForm.company}
                            onChange={(e) =>
                              setTicketForm({
                                ...ticketForm,
                                company: e.target.value,
                              })
                            }
                            placeholder="Enter your company name"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Phone Number
                          </label>
                          <Input
                            value={ticketForm.phone}
                            onChange={(e) =>
                              setTicketForm({
                                ...ticketForm,
                                phone: e.target.value,
                              })
                            }
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Ticket Title *
                        </label>
                        <Input
                          value={ticketForm.title}
                          onChange={(e) =>
                            setTicketForm({
                              ...ticketForm,
                              title: e.target.value,
                            })
                          }
                          placeholder="Brief description of your issue"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Category
                          </label>
                          <Select
                            value={ticketForm.category}
                            onValueChange={(value) =>
                              setTicketForm({ ...ticketForm, category: value })
                            }>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="technical">
                                Technical Issue
                              </SelectItem>
                              <SelectItem value="billing">
                                Billing Question
                              </SelectItem>
                              <SelectItem value="feature_request">
                                Feature Request
                              </SelectItem>
                              <SelectItem value="general">
                                General Inquiry
                              </SelectItem>
                              <SelectItem value="bug_report">
                                Bug Report
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Priority
                          </label>
                          <Select
                            value={ticketForm.priority}
                            onValueChange={(value) =>
                              setTicketForm({ ...ticketForm, priority: value })
                            }>
                            <SelectTrigger>
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="urgent">Urgent</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Description *
                        </label>
                        <Textarea
                          value={ticketForm.description}
                          onChange={(e) =>
                            setTicketForm({
                              ...ticketForm,
                              description: e.target.value,
                            })
                          }
                          placeholder="Please provide detailed information about your issue..."
                          rows={6}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        <Send className="mr-2 h-4 w-4" />
                        Submit Ticket
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          )}

          {activeTab === "knowledge" && (
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                  Knowledge Base
                </h2>

                {/* Search and Filter */}
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          placeholder="Search articles..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="md:w-64">
                      <Select
                        value={selectedCategory}
                        onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}>
                      <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {article.category}
                            </span>
                            {article.is_featured && (
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            )}
                          </div>
                          <CardTitle className="text-lg font-semibold text-foreground line-clamp-2">
                            {article.title}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground line-clamp-3">
                            {article.excerpt}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>{article.author_name}</span>
                            <span>
                              {new Date(
                                article.created_at
                              ).toLocaleDateString()}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {filteredArticles.length === 0 && (
                  <div className="text-center py-12">
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      No articles found
                    </h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search terms or filters.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                  Contact Us
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Send us a Message</CardTitle>
                      <CardDescription>
                        Have a question or need assistance? We'd love to hear
                        from you.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form
                        onSubmit={handleContactSubmit}
                        className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-foreground mb-2 block">
                              Name *
                            </label>
                            <Input
                              value={contactForm.name}
                              onChange={(e) =>
                                setContactForm({
                                  ...contactForm,
                                  name: e.target.value,
                                })
                              }
                              placeholder="Your name"
                              required
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-foreground mb-2 block">
                              Email *
                            </label>
                            <Input
                              type="email"
                              value={contactForm.email}
                              onChange={(e) =>
                                setContactForm({
                                  ...contactForm,
                                  email: e.target.value,
                                })
                              }
                              placeholder="your@email.com"
                              required
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-foreground mb-2 block">
                              Company
                            </label>
                            <Input
                              value={contactForm.company}
                              onChange={(e) =>
                                setContactForm({
                                  ...contactForm,
                                  company: e.target.value,
                                })
                              }
                              placeholder="Your company"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-foreground mb-2 block">
                              Phone
                            </label>
                            <Input
                              value={contactForm.phone}
                              onChange={(e) =>
                                setContactForm({
                                  ...contactForm,
                                  phone: e.target.value,
                                })
                              }
                              placeholder="Your phone number"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Subject
                          </label>
                          <Select
                            value={contactForm.subject}
                            onValueChange={(value) =>
                              setContactForm({ ...contactForm, subject: value })
                            }>
                            <SelectTrigger>
                              <SelectValue placeholder="Select subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">
                                General Inquiry
                              </SelectItem>
                              <SelectItem value="sales">
                                Sales Question
                              </SelectItem>
                              <SelectItem value="support">
                                Technical Support
                              </SelectItem>
                              <SelectItem value="partnership">
                                Partnership
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Message *
                          </label>
                          <Textarea
                            value={contactForm.message}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                message: e.target.value,
                              })
                            }
                            placeholder="How can we help you?"
                            rows={6}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>

                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Phone className="h-5 w-5 text-primary" />
                          Phone Support
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-2">
                          Call us for immediate assistance
                        </p>
                        <p className="text-lg font-semibold text-foreground">
                          +1 (555) 123-4567
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Mon-Fri 9AM-6PM EST
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Mail className="h-5 w-5 text-primary" />
                          Email Support
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-2">
                          Send us an email anytime
                        </p>
                        <p className="text-lg font-semibold text-foreground">
                          support@hr-xen.com
                        </p>
                        <p className="text-sm text-muted-foreground">
                          We'll respond within 24 hours
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
                          Response Times
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">
                              General Inquiries
                            </span>
                            <span className="text-sm font-medium">
                              24 hours
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">
                              Technical Issues
                            </span>
                            <span className="text-sm font-medium">4 hours</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">
                              Urgent Issues
                            </span>
                            <span className="text-sm font-medium">1 hour</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SupportPageDynamic;
