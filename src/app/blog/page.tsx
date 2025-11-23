import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/constants";
import { BlogPost } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function FeaturedBlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-none p-0 bg-background">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative">
          <div className="aspect-[16/9] relative overflow-hidden rounded-t-lg">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#A85C42] to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
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
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>

              <ArrowRight className="w-4 h-4 text-primary/60 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
}

function RegularBlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-none p-0 bg-background">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative">
          <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#A85C42] to-transparent" />

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