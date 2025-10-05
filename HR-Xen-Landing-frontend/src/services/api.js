// API service for HR-Xen Landing Backend
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://13.215.98.185/api/v1";

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API request failed:", error);
      // Return empty data structure instead of throwing to prevent app crashes
      if (endpoint.includes("/pricing/")) {
        return { plans: [], addons: [], faqs: [] };
      } else if (endpoint.includes("/support/")) {
        return { results: [] };
      } else if (endpoint.includes("/blog/")) {
        return { results: [] };
      }
      return [];
    }
  }

  // Pricing API
  pricing = {
    // Get all pricing data (plans, addons, FAQs)
    getSummary: () => this.request("/pricing/plans/summary/"),

    // Get all pricing plans
    getPlans: (params = {}) => {
      const queryString = new URLSearchParams(params).toString();
      return this.request(
        `/pricing/plans/${queryString ? `?${queryString}` : ""}`
      );
    },

    // Get specific plan
    getPlan: (id) => this.request(`/pricing/plans/${id}/`),

    // Get popular plans
    getPopularPlans: () => this.request("/pricing/plans/popular/"),

    // Get add-ons
    getAddOns: (params = {}) => {
      const queryString = new URLSearchParams(params).toString();
      return this.request(
        `/pricing/addons/${queryString ? `?${queryString}` : ""}`
      );
    },

    // Get FAQs
    getFAQs: (params = {}) => {
      const queryString = new URLSearchParams(params).toString();
      return this.request(
        `/pricing/faqs/${queryString ? `?${queryString}` : ""}`
      );
    },
  };

  // Support API
  support = {
    // Get all tickets
    getTickets: (params = {}) => {
      const queryString = new URLSearchParams(params).toString();
      return this.request(
        `/support/tickets/${queryString ? `?${queryString}` : ""}`
      );
    },

    // Get specific ticket
    getTicket: (id) => this.request(`/support/tickets/${id}/`),

    // Create new ticket
    createTicket: (ticketData) =>
      this.request("/support/tickets/", {
        method: "POST",
        body: JSON.stringify(ticketData),
      }),

    // Add comment to ticket
    addComment: (ticketId, commentData) =>
      this.request(`/support/tickets/${ticketId}/add_comment/`, {
        method: "POST",
        body: JSON.stringify(commentData),
      }),

    // Update ticket status
    updateTicketStatus: (ticketId, status) =>
      this.request(`/support/tickets/${ticketId}/update_status/`, {
        method: "POST",
        body: JSON.stringify({ status }),
      }),

    // Get knowledge base articles
    getArticles: (params = {}) => {
      const queryString = new URLSearchParams(params).toString();
      return this.request(
        `/support/articles/${queryString ? `?${queryString}` : ""}`
      );
    },

    // Get specific article
    getArticle: (slug) => this.request(`/support/articles/${slug}/`),

    // Get featured articles
    getFeaturedArticles: () => this.request("/support/articles/featured/"),

    // Get categories
    getCategories: () => this.request("/support/articles/categories/"),

    // Submit contact form
    submitContactForm: (formData) =>
      this.request("/support/messages/", {
        method: "POST",
        body: JSON.stringify(formData),
      }),
  };

  // Blog API
  blog = {
    // Get all posts
    getPosts: (params = {}) => {
      const queryString = new URLSearchParams(params).toString();
      return this.request(
        `/blog/posts/${queryString ? `?${queryString}` : ""}`
      );
    },

    // Get specific post
    getPost: (slug) => this.request(`/blog/posts/${slug}/`),

    // Get featured posts
    getFeaturedPosts: () => this.request("/blog/posts/featured/"),

    // Get recent posts
    getRecentPosts: () => this.request("/blog/posts/recent/"),

    // Get popular posts
    getPopularPosts: () => this.request("/blog/posts/popular/"),

    // Search posts
    searchPosts: (query, params = {}) => {
      const searchParams = { q: query, ...params };
      const queryString = new URLSearchParams(searchParams).toString();
      return this.request(`/blog/posts/search/?${queryString}`);
    },

    // Get archive
    getArchive: () => this.request("/blog/posts/archive/"),

    // Like a post
    likePost: (slug) =>
      this.request(`/blog/posts/${slug}/like/`, {
        method: "POST",
      }),

    // Get categories
    getCategories: (params = {}) => {
      const queryString = new URLSearchParams(params).toString();
      return this.request(
        `/blog/categories/${queryString ? `?${queryString}` : ""}`
      );
    },

    // Get specific category
    getCategory: (slug) => this.request(`/blog/categories/${slug}/`),

    // Get tags
    getTags: (params = {}) => {
      const queryString = new URLSearchParams(params).toString();
      return this.request(`/blog/tags/${queryString ? `?${queryString}` : ""}`);
    },

    // Get specific tag
    getTag: (slug) => this.request(`/blog/tags/${slug}/`),

    // Get comments for a post
    getComments: (postSlug) => this.request(`/blog/comments/?post=${postSlug}`),

    // Add comment
    addComment: (commentData) =>
      this.request("/blog/comments/", {
        method: "POST",
        body: JSON.stringify(commentData),
      }),

    // Subscribe to newsletter
    subscribeNewsletter: (subscriptionData) =>
      this.request("/blog/subscriptions/", {
        method: "POST",
        body: JSON.stringify(subscriptionData),
      }),

    // Unsubscribe from newsletter
    unsubscribeNewsletter: (email) =>
      this.request("/blog/subscriptions/unsubscribe/", {
        method: "POST",
        body: JSON.stringify({ email }),
      }),
  };
}

// Create and export API service instance
const apiService = new ApiService();
export default apiService;
