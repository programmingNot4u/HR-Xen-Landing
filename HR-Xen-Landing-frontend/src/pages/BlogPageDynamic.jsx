import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  Eye,
  Heart,
  MessageCircle,
  Search,
  Tag,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import apiService from "../services/api";

const BlogPageDynamic = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginationLoading, setPaginationLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTag, setSelectedTag] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Newsletter subscription
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterName, setNewsletterName] = useState("");
  const [newsletterLoading, setNewsletterLoading] = useState(false);

  useEffect(() => {
    fetchBlogData();
  }, [currentPage, selectedCategory, selectedTag, searchQuery]);

  const fetchBlogData = async (isPagination = false) => {
    try {
      if (isPagination) {
        setPaginationLoading(true);
      } else {
        setLoading(true);
      }
      const params = {
        page: currentPage,
        ...(selectedCategory &&
          selectedCategory !== "all" && { category: selectedCategory }),
        ...(selectedTag && selectedTag !== "all" && { tags: selectedTag }),
        ...(searchQuery && { search: searchQuery }),
      };

      const [postsData, featuredData, categoriesData, tagsData] =
        await Promise.all([
          apiService.blog.getPosts(params),
          apiService.blog.getFeaturedPosts(),
          apiService.blog.getCategories(),
          apiService.blog.getTags(),
        ]);

      setPosts(postsData.results || postsData || []);
      setFeaturedPosts(featuredData || []);
      setCategories(categoriesData.results || categoriesData || []);
      setTags(tagsData.results || tagsData || []);

      if (postsData && postsData.count) {
        setTotalPages(Math.ceil(postsData.count / 12)); // Backend returns 12 posts per page
      }
    } catch (err) {
      console.error("Failed to fetch blog data:", err);
      setError("Failed to load blog posts. Please try again later.");
      // Set empty arrays as fallback
      setPosts([]);
      setFeaturedPosts([]);
      setCategories([]);
      setTags([]);
    } finally {
      setLoading(false);
      setPaginationLoading(false);
    }
  };

  const handleNewsletterSubscribe = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    try {
      setNewsletterLoading(true);
      await apiService.blog.subscribeNewsletter({
        email: newsletterEmail,
        name: newsletterName,
      });
      alert("Thank you for subscribing to our newsletter!");
      setNewsletterEmail("");
      setNewsletterName("");
    } catch (err) {
      console.error("Failed to subscribe to newsletter:", err);
      alert("Failed to subscribe. Please try again.");
    } finally {
      setNewsletterLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchBlogData();
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedTag("all");
    setCurrentPage(1);
  };

  const handleReadMore = (post) => {
    navigate(`/blog/${post.slug}`);
  };

  if (loading && currentPage === 1) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <Button onClick={fetchBlogData}>Try Again</Button>
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
              HR Insights & <span className="gradient-text">Industry News</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with the latest trends, best practices, and insights
              in human resources and workforce management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="mb-6">
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
                <Button type="submit" className="md:w-auto">
                  Search
                </Button>
              </div>
            </form>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <Select
                  value={selectedCategory}
                  onValueChange={(value) => {
                    setSelectedCategory(value);
                    setCurrentPage(1);
                  }}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.slug}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={selectedTag}
                  onValueChange={(value) => {
                    setSelectedTag(value);
                    setCurrentPage(1);
                  }}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="All Tags" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Tags</SelectItem>
                    {tags.map((tag) => (
                      <SelectItem key={tag.id} value={tag.slug}>
                        {tag.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {(selectedCategory !== "all" ||
                  selectedTag !== "all" ||
                  searchQuery) && (
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="text-sm">
                    Clear Filters
                  </Button>
                )}
              </div>

              <div className="text-sm text-muted-foreground">
                {posts.length} article{posts.length !== 1 ? "s" : ""} found
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 &&
        currentPage === 1 &&
        !searchQuery &&
        selectedCategory === "all" &&
        selectedTag === "all" && (
          <section className="py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Featured Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredPosts.slice(0, 3).map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}>
                      <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 shadow-md hover:border-primary/20">
                        {post.featured_image && (
                          <div className="aspect-video overflow-hidden rounded-t-lg relative">
                            <img
                              src={post.featured_image}
                              alt={post.featured_image_alt || post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        )}
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {post.category_name}
                            </span>
                            <div className="flex items-center gap-1 text-yellow-500">
                              <Heart className="h-3 w-3 fill-current" />
                              <span className="text-xs">Featured</span>
                            </div>
                          </div>
                          <CardTitle className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground line-clamp-3">
                            {post.excerpt}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                <span>{post.author_name}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                <span>
                                  {new Date(
                                    post.published_at
                                  ).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                <span>{post.view_count}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageCircle className="h-3 w-3" />
                                <span>{post.comment_count}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>{post.reading_time} min read</span>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="group-hover:text-primary"
                              onClick={() => handleReadMore(post)}>
                              Read More
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    {post.featured_image && (
                      <div className="aspect-video overflow-hidden rounded-t-lg relative">
                        <img
                          src={post.featured_image}
                          alt={post.featured_image_alt || post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {post.category_name}
                        </span>
                        {post.is_featured && (
                          <div className="flex items-center gap-1 text-yellow-500">
                            <Heart className="h-3 w-3 fill-current" />
                            <span className="text-xs">Featured</span>
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{post.author_name}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {new Date(post.published_at).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            <span>{post.view_count}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-3 w-3" />
                            <span>{post.comment_count}</span>
                          </div>
                        </div>
                      </div>

                      {post.tag_names && post.tag_names.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tag_names.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full flex items-center gap-1">
                              <Tag className="h-2 w-2" />
                              {tag}
                            </span>
                          ))}
                          {post.tag_names.length > 3 && (
                            <span className="text-xs text-muted-foreground">
                              +{post.tag_names.length - 3} more
                            </span>
                          )}
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{post.reading_time} min read</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="group-hover:text-primary"
                          onClick={() => handleReadMore(post)}>
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {posts.length === 0 && !loading && (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {error ? "Unable to load blog posts" : "No articles found"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {error
                    ? "Please check if the backend server is running and try again."
                    : "Try adjusting your search terms or filters."}
                </p>
                {error ? (
                  <Button onClick={fetchBlogData}>Retry</Button>
                ) : (
                  <Button onClick={clearFilters}>Clear Filters</Button>
                )}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                {paginationLoading && (
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="px-4 py-2">
                    Previous
                  </Button>

                  <div className="flex items-center gap-1">
                    {/* Show first page */}
                    {currentPage > 3 && (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setCurrentPage(1)}
                          className="px-3 py-2">
                          1
                        </Button>
                        {currentPage > 4 && <span className="px-2">...</span>}
                      </>
                    )}

                    {/* Show pages around current page */}
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let page;
                      if (totalPages <= 5) {
                        page = i + 1;
                      } else if (currentPage <= 3) {
                        page = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        page = totalPages - 4 + i;
                      } else {
                        page = currentPage - 2 + i;
                      }

                      if (page < 1 || page > totalPages) return null;

                      return (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(page)}
                          className="px-3 py-2">
                          {page}
                        </Button>
                      );
                    })}

                    {/* Show last page */}
                    {currentPage < totalPages - 2 && (
                      <>
                        {currentPage < totalPages - 3 && (
                          <span className="px-2">...</span>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setCurrentPage(totalPages)}
                          className="px-3 py-2">
                          {totalPages}
                        </Button>
                      </>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2">
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter and never miss the latest HR insights,
              industry trends, and product updates.
            </p>
            <form
              onSubmit={handleNewsletterSubscribe}
              className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
              </div>
              <div className="sm:w-48">
                <Input
                  placeholder="Your name (optional)"
                  value={newsletterName}
                  onChange={(e) => setNewsletterName(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                disabled={newsletterLoading}
                className="sm:w-auto">
                {newsletterLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPageDynamic;
