import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/constants";
import { BlogPost } from "@/types";
import Link from "next/link";
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
  const elements: JSX.Element[] = [];

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

          <Badge className={categoryColor + " mb-4"}>
            {post.category}
          </Badge>

          <h1 className="font-vonca text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="font-medium">{post.author}</span>
            </div>
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
          <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-t from-primary/10 to-transparent" />
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

      {/* Author Bio */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 bg-muted/20">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                <span className="font-vonca text-xl font-bold text-primary">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="font-vonca text-xl font-semibold text-foreground mb-2">
                  {post.author}
                </h3>
                <p className="text-muted-foreground">
                  {post.author === 'Sarah Chen' && 'Founder & Lead Yoga Instructor at Tria. Sarah brings over 10 years of experience in mindful movement and wellness practices.'}
                  {post.author === 'Marcus Rivera' && 'Lead Lagree Instructor specializing in precision training and athletic performance.'}
                  {post.author === 'Luna Martinez' && 'Wellness Specialist focused on restorative practices and holistic healing approaches.'}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {previousPost && (
              <Link href={`/blog/${previousPost.slug}`} className="group">
                <Card className="p-6 h-full bg-gradient-to-br from-background to-muted/20 group-hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-medium">Previous Article</span>
                  </div>
                  <h3 className="font-vonca text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {previousPost.title}
                  </h3>
                </Card>
              </Link>
            )}

            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} className="group md:ml-auto">
                <Card className="p-6 h-full bg-gradient-to-br from-background to-muted/20 group-hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 text-primary mb-2 md:justify-end">
                    <span className="text-sm font-medium">Next Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <h3 className="font-vonca text-lg font-semibold text-foreground group-hover:text-primary transition-colors md:text-right">
                    {nextPost.title}
                  </h3>
                </Card>
              </Link>
            )}
          </div>
        </div>
      </section>

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