import { useParams } from "react-router-dom";
import { Calendar, User, Tag, Clock, ArrowLeft, Heart, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const BlogDetail = () => {
  const { slug } = useParams();
  
  // Mock blog post data - in real app, fetch based on slug
  const post = {
    id: 1,
    title: "5 Tips for First-Time Home Buyers in 2024",
    slug: "first-time-home-buyers-2024",
    excerpt: "Navigate the current real estate market with confidence using these essential tips for first-time buyers.",
    content: `
      <p>Buying your first home is one of the most significant financial decisions you'll make in your lifetime. With the current state of the real estate market, it's more important than ever to be well-prepared and informed. Here are five essential tips to help you navigate the home buying process successfully.</p>
      
      <h2>1. Get Pre-Approved for a Mortgage</h2>
      <p>Before you start looking at homes, get pre-approved for a mortgage. This process involves a lender reviewing your financial situation and determining how much they're willing to lend you. Pre-approval gives you several advantages:</p>
      <ul>
        <li>You'll know your budget and can focus on homes within your price range</li>
        <li>Sellers will take your offers more seriously</li>
        <li>You'll be able to move quickly when you find the right home</li>
        <li>You'll understand your monthly payment obligations</li>
      </ul>
      
      <h2>2. Save for More Than Just the Down Payment</h2>
      <p>While the down payment is often the largest upfront cost, there are many other expenses to consider:</p>
      <ul>
        <li>Closing costs (typically 2-5% of the home's purchase price)</li>
        <li>Moving expenses</li>
        <li>Home inspection fees</li>
        <li>Property taxes and homeowner's insurance</li>
        <li>Immediate repairs or improvements</li>
        <li>Emergency fund for unexpected expenses</li>
      </ul>
      
      <h2>3. Research Neighborhoods Thoroughly</h2>
      <p>The location of your home is just as important as the home itself. Consider factors such as:</p>
      <ul>
        <li>Commute times to work and important locations</li>
        <li>School districts (even if you don't have children, good schools affect property values)</li>
        <li>Local amenities like parks, shopping, and restaurants</li>
        <li>Crime rates and neighborhood safety</li>
        <li>Future development plans that might affect the area</li>
      </ul>
      
      <h2>4. Don't Skip the Home Inspection</h2>
      <p>A professional home inspection can reveal potential problems that aren't visible during a casual walkthrough. This small investment can save you thousands of dollars in unexpected repairs. The inspection should cover:</p>
      <ul>
        <li>Structural integrity</li>
        <li>Electrical systems</li>
        <li>Plumbing</li>
        <li>HVAC systems</li>
        <li>Roof and foundation</li>
        <li>Pest issues</li>
      </ul>
      
      <h2>5. Work with Experienced Professionals</h2>
      <p>Having the right team can make all the difference in your home buying experience. Consider working with:</p>
      <ul>
        <li>An experienced real estate agent who knows the local market</li>
        <li>A mortgage lender with competitive rates and good service</li>
        <li>A qualified home inspector</li>
        <li>A real estate attorney (in some states)</li>
        <li>A reliable insurance agent</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Buying your first home doesn't have to be overwhelming. By following these tips and working with experienced professionals, you can navigate the process with confidence. Remember to take your time, do your research, and don't be afraid to ask questions along the way.</p>
      
      <p>If you're ready to start your home buying journey, our team of experienced agents is here to help. Contact us today to schedule a consultation and take the first step toward homeownership.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      bio: "Senior Real Estate Agent with over 10 years of experience helping families find their perfect homes."
    },
    publishedAt: "2024-01-15T10:00:00Z",
    readTime: "5 min read",
    category: "Home Buying",
    tags: ["First-Time Buyers", "Home Buying Tips", "Real Estate", "Mortgage"]
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Understanding Current Market Trends",
      slug: "market-trends-2024",
      excerpt: "Stay informed about the latest developments in the real estate market.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Best Neighborhoods for Young Families",
      slug: "best-neighborhoods-families",
      excerpt: "Discover family-friendly communities with great schools and amenities.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      readTime: "6 min read"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Back Navigation */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-accent hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge variant="outline" className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">{post.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-foreground">{post.author.name}</div>
                    <div className="text-sm text-muted-foreground">Senior Real Estate Agent</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Heart className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
            
            {/* Featured Image */}
            <div className="mb-8">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Tags */}
                <div className="mt-8 pt-8 border-t">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Author Card */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-foreground">{post.author.name}</h3>
                        <p className="text-sm text-muted-foreground">Senior Real Estate Agent</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{post.author.bio}</p>
                    <Button variant="outline" className="w-full">
                      <User className="w-4 h-4 mr-2" />
                      View Profile
                    </Button>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest real estate insights and market updates delivered to your inbox.
                    </p>
                    <Button variant="cta" className="w-full">
                      Subscribe to Newsletter
                    </Button>
                  </CardContent>
                </Card>

                {/* Contact CTA */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Ready to Buy or Sell?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Let our experienced team help you navigate the real estate market.
                    </p>
                    <Button variant="cta" className="w-full mb-2">
                      Contact Us Today
                    </Button>
                    <Button variant="outline" className="w-full">
                      Schedule Consultation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Card key={related.id} className="overflow-hidden hover:shadow-lg transition-smooth">
                  <div className="relative">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{related.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{related.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{related.readTime}</span>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/blog/${related.slug}`}>Read More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetail;