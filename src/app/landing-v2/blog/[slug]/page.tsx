import { NavigationV2 } from '@/components/sections/navigation-v2'
import { FooterV2 } from '@/components/sections/footer-v2'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/data/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function MarkdownContent({ content }: { content: string }) {
  const lines = content.split('\n')
  const elements: React.JSX.Element[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={i} className="font-vonca text-4xl font-bold text-foreground mt-8 mb-4">
          {line.slice(2)}
        </h1>
      )
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="font-vonca text-3xl font-semibold text-foreground mt-8 mb-4">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="font-vonca text-2xl font-semibold text-foreground mt-6 mb-3">
          {line.slice(4)}
        </h3>
      )
    } else if (line.startsWith('- ')) {
      const listItems = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].slice(2))
        i++
      }
      i--

      elements.push(
        <ul key={i} className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )
    } else if (line.trim() === '') {
      continue
    } else {
      if (line.trim()) {
        elements.push(
          <p key={i} className="text-muted-foreground leading-relaxed mb-4">
            {line}
          </p>
        )
      }
    }
  }

  return <div className="prose prose-lg max-w-none">{elements}</div>
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug
  }))
}

export default async function BlogPostLandingV2({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen landing-v2-bg">
      <NavigationV2 />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/landing-v2/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
          >
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

      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-[30px] overflow-hidden">
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

      <article className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <MarkdownContent content={post.content} />
          </div>
        </div>
      </article>

      <FooterV2 />
    </div>
  )
}
