import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Search,
  Tag,
  TrendingUp,
  User,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";

const BlogPage = () => {
  const featuredPost = {
    title: "The Future of HR: How AI is Transforming Human Resources",
    excerpt:
      "Discover how artificial intelligence is revolutionizing HR processes, from recruitment to employee engagement, and what it means for the future of work.",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "HR Technology",
    image: "Featured Post Image",
    featured: true,
  };

  const blogPosts = [
    {
      title: "5 Essential HR Metrics Every Manager Should Track",
      excerpt:
        "Learn about the key performance indicators that can help you make data-driven decisions about your workforce.",
      author: "Michael Chen",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Analytics",
      image: "Blog Post 1",
    },
    {
      title: "Remote Work Best Practices: A Complete Guide",
      excerpt:
        "Everything you need to know about managing remote teams effectively, from communication tools to performance tracking.",
      author: "Emily Rodriguez",
      date: "December 10, 2024",
      readTime: "10 min read",
      category: "Remote Work",
      image: "Blog Post 2",
    },
    {
      title: "Building a Strong Company Culture in 2024",
      excerpt:
        "Explore strategies for creating an inclusive, engaging workplace culture that attracts and retains top talent.",
      author: "David Kim",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Culture",
      image: "Blog Post 3",
    },
    {
      title: "Payroll Compliance: What You Need to Know",
      excerpt:
        "Stay up-to-date with the latest payroll regulations and compliance requirements to avoid costly mistakes.",
      author: "Lisa Wang",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "Compliance",
      image: "Blog Post 4",
    },
    {
      title: "Employee Onboarding: Creating Memorable First Days",
      excerpt:
        "Design an onboarding process that sets new hires up for success and creates lasting positive impressions.",
      author: "James Wilson",
      date: "December 3, 2024",
      readTime: "5 min read",
      category: "Onboarding",
      image: "Blog Post 5",
    },
    {
      title: "The Psychology of Employee Recognition",
      excerpt:
        "Understanding what motivates employees and how recognition programs can boost engagement and productivity.",
      author: "Maria Garcia",
      date: "December 1, 2024",
      readTime: "6 min read",
      category: "Employee Engagement",
      image: "Blog Post 6",
    },
  ];

  const categories = [
    "All Posts",
    "HR Technology",
    "Analytics",
    "Remote Work",
    "Culture",
    "Compliance",
    "Onboarding",
    "Employee Engagement",
  ];

  const popularPosts = [
    {
      title: "10 HR Trends to Watch in 2024",
      views: "12.5K views",
    },
    {
      title: "How to Conduct Effective Performance Reviews",
      views: "8.9K views",
    },
    {
      title: "The Complete Guide to HR Software Selection",
      views: "7.2K views",
    },
    {
      title: "Building Diversity and Inclusion in the Workplace",
      views: "6.8K views",
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
              HR-Xen Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, tips, and best practices for modern HR professionals.
              Stay updated with the latest trends in human resource management.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles, guides, and insights..."
                  className="pl-12 pr-4 py-6 text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground font-medium">
                    {featuredPost.image}
                  </span>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-primary font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                  <CardTitle className="text-3xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Button
                    key={category}
                    variant={index === 0 ? "default" : "outline"}
                    size="sm"
                    className="mb-2">
                    {category}
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground font-medium">
                        {post.image}
                      </span>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Tag className="h-4 w-4 text-primary" />
                        <span className="text-primary font-medium text-sm">
                          {post.category}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12">
              <Button size="lg" variant="outline">
                Load More Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Stay Updated
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get the latest HR insights delivered to your inbox
                        weekly.
                      </p>
                      <div className="space-y-3">
                        <Input placeholder="Enter your email" />
                        <Button className="w-full">Subscribe</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Popular Posts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span>Popular Posts</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {popularPosts.map((post, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-primary font-semibold text-sm">
                              {index + 1}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground line-clamp-2 mb-1">
                              {post.title}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {post.views}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}>
                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.slice(1).map((category, index) => (
                        <div
                          key={category}
                          className="flex items-center justify-between">
                          <span className="text-sm text-foreground">
                            {category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {Math.floor(Math.random() * 20) + 5}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
