import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/constants";
import { BlogPost } from "@/types";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function FeaturedBlogCard({ post }: { post: BlogPost }) {
  const categoryColor = BLOG_CATEGORIES.find(cat => cat.name === post.category)?.color || 'bg-primary/10 text-primary';

  return (
    <Card className="group overflow-hidden bg-gradient-to-br from-background to-muted/30 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative">
          <div className="aspect-[16/9] bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
            <div className="absolute bottom-8 left-8 w-16 h-16 bg-accent/20 rounded-full blur-lg" />

            <div className="absolute bottom-6 left-6 right-6">
              <Badge className={`mb-4 ${categoryColor} border-0`}>
                {post.category}
              </Badge>
              <h2 className="font-vonca text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
                {post.title}
              </h2>
              <p className="text-white/90 text-lg leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.publishDate)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
}

function RegularBlogCard({ post }: { post: BlogPost }) {
  const categoryColor = BLOG_CATEGORIES.find(cat => cat.name === post.category)?.color || 'bg-primary/10 text-primary';

  return (
    <Card className="group overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative">
          <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Subtle decorative elements */}
            <div className="absolute top-3 right-3 w-12 h-12 bg-white/10 rounded-full blur-lg" />
            <div className="absolute bottom-3 left-3 w-8 h-8 bg-accent/20 rounded-full blur-md" />

            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="font-vonca text-xl font-bold text-white leading-tight line-clamp-2">
                {post.title}
              </h3>
            </div>
          </div>

          <div className="p-6">
            <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>

              <ArrowRight className="w-4 h-4 text-primary/60 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-4">
                {post.tags.slice(0, 2).map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs px-2 py-1 border-muted/50 text-muted-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </Card>
  );
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Latest Insights */}
      <section className="pt-32 px-4 pb-20 bg-gradient-to-br from-muted/20 via-transparent to-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-vonca text-4xl md:text-6xl font-bold text-foreground mb-4">
              Tria Blog
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Fresh perspectives on mindful living, movement, and wellness
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <RegularBlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}