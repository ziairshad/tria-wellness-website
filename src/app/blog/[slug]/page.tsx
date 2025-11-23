import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/constants";
import { BlogPost } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function MarkdownContent({ content }: { content: string }) {
  // Simple markdown-to-JSX conversion for demonstration
  // In a production app, you'd use a proper markdown parser like react-markdown
  const lines = content.split('\n');
  const elements: React.JSX.Element[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={i} className="font-vonca text-4xl font-bold text-foreground mt-8 mb-4">
          {line.slice(2)}
        </h1>
      );
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="font-vonca text-3xl font-semibold text-foreground mt-8 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="font-vonca text-2xl font-semibold text-foreground mt-6 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith('- ')) {
      // Handle bullet points - collect consecutive ones
      const listItems = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      i--; // Back up one since the loop will increment

      elements.push(
        <ul key={i} className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    } else if (line.trim() === '') {
      // Empty line - add spacing
      continue;
    } else {
      // Regular paragraph
      if (line.trim()) {
        elements.push(
          <p key={i} className="text-muted-foreground leading-relaxed mb-4">
            {line}
          </p>
        );
      }
    }
  }

  return <div className="prose prose-lg max-w-none">{elements}</div>;
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const currentIndex = BLOG_POSTS.findIndex(p => p.slug === slug);
  const previousPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

  const categoryColor = BLOG_CATEGORIES.find(cat => cat.name === post.category)?.color || 'bg-primary/10 text-primary';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>


          <h1 className="font-vonca text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{formatDate(post.publishDate)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-xl overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <MarkdownContent content={post.content} />
          </div>
        </div>
      </article>



      {/* CTA Section */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10">
            <h3 className="font-vonca text-3xl font-bold text-foreground mb-4">
              Start Your Journey
            </h3>
            <p className="text-muted-foreground mb-6">
              Ready to experience the transformative power of mindful movement?
              Join us at Tria for yoga, Lagree, and wellness practices.
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/#classes">View Our Classes</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}