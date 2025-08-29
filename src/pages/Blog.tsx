
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Charlotte Real Estate Market Trends for 2024",
      excerpt: "Discover the latest trends shaping Charlotte's real estate market and what they mean for buyers and sellers in the new year.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Sarah Mitchell",
      date: "March 15, 2024",
      category: "Market Analysis",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "First-Time Home Buyer's Guide to Fort Mill",
      excerpt: "Everything first-time buyers need to know about purchasing a home in Fort Mill, from neighborhoods to financing options.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Michael Johnson",
      date: "March 10, 2024",
      category: "Buying Tips",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Staging Your Home for Maximum Appeal",
      excerpt: "Professional staging tips that can help your home sell faster and for top dollar in today's competitive market.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Jennifer Lee",
      date: "March 5, 2024",
      category: "Selling Tips",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Investment Properties: Rock Hill vs Matthews",
      excerpt: "A comprehensive comparison of investment opportunities in Rock Hill and Matthews, including rental yields and growth potential.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Sarah Mitchell",
      date: "February 28, 2024",
      category: "Investment",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "The Complete Guide to Marvin's Luxury Communities",
      excerpt: "Explore Marvin's most prestigious neighborhoods and discover what makes this area a top choice for luxury homebuyers.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Michael Johnson",
      date: "February 20, 2024",
      category: "Communities",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Home Maintenance Tips for New Homeowners",
      excerpt: "Essential maintenance tasks every new homeowner should know to protect their investment and avoid costly repairs.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "David Rodriguez",
      date: "February 15, 2024",
      category: "Home Care",
      readTime: "4 min read"
    }
  ];

  const categories = ["All", "Market Analysis", "Buying Tips", "Selling Tips", "Investment", "Communities", "Home Care"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Real Estate Blog</h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Stay informed with the latest insights, tips, and trends in Charlotte area real estate
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <Input 
                  placeholder="Search articles..." 
                  className="bg-background text-foreground"
                />
                <Button variant="hero">Search</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <span className="text-accent font-semibold">Featured Article</span>
            </div>
            
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {blogPosts[0].author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </span>
                    <span className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {blogPosts[0].title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <Button variant="cta">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Latest Articles</h2>
              <p className="text-xl text-muted-foreground">Expert insights to help with your real estate journey</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-smooth overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      <Button variant="ghost" size="sm">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">Load More Articles</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Subscribe to our newsletter for the latest real estate insights and market updates
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-background text-foreground flex-1"
              />
              <Button variant="hero">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-primary-foreground/70 mt-4">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
