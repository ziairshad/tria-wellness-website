import { NavigationV2 } from '@/components/sections/navigation-v2'
import { FooterV2 } from '@/components/sections/footer-v2'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BLOG_POSTS } from '@/data/constants'
import { BlogPost } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, ArrowRight } from 'lucide-react'

function RegularBlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-none p-0 bg-card/50 rounded-[30px]">
      <Link href={`/landing-v2/blog/${post.slug}`}>
        <div className="relative">
          <div className="aspect-[4/3] relative overflow-hidden rounded-t-[30px]">
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
            <p className="text-card-foreground mb-4 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs text-card-foreground/70">
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>

              <ArrowRight className="w-4 h-4 text-card-foreground/60 group-hover:text-card-foreground group-hover:translate-x-1 transition-all" />
            </div>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-4">
                {post.tags.slice(0, 2).map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs px-2 py-1 border-card-foreground/20 text-card-foreground/70"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </Card>
  )
}

function MinimalBlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border border-primary/10 p-0 bg-background rounded-[30px]">
      <Link href={`/landing-v2/blog/${post.slug}`}>
        <div className="p-6">
          <div className="aspect-video relative overflow-hidden rounded-[15px] mb-6">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-102 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          <div className="space-y-4">
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 1).map((tag, index) => (
                  <Badge
                    key={index}
                    className="text-xs px-3 py-1 bg-primary/10 text-primary border-none rounded-full"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            <h3 className="font-serif text-lg font-semibold text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>

            <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>

              <div className="text-primary text-sm font-medium group-hover:underline">
                Read More
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  )
}

function VerticalBlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-none p-0 bg-white rounded-[25px]">
      <Link href={`/landing-v2/blog/${post.slug}`}>
        <div className="relative h-full flex flex-col">
          <div className="relative h-48 overflow-hidden rounded-t-[25px]">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          <div className="flex-1 p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              {post.tags.length > 0 && (
                <Badge className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded-md">
                  {post.tags[0]}
                </Badge>
              )}
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h3 className="font-serif text-xl font-semibold text-foreground leading-tight line-clamp-3 mb-3 group-hover:text-accent transition-colors">
              {post.title}
            </h3>

            <p className="text-muted-foreground text-sm line-clamp-4 leading-relaxed mb-4 flex-1">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-muted/20">
              <span className="text-xs text-muted-foreground">
                Continue Reading
              </span>
              <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </Card>
  )
}

export default function BlogLandingV2() {
  return (
    <div className="min-h-screen landing-v2-bg">
      <NavigationV2 />

      <section className="pt-32 px-4 pb-20 bg-gradient-to-br from-muted/20 via-transparent to-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif font-light tracking-tight mb-6">
              TRIA Blog
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => {
              const cardType = index % 3;

              if (cardType === 0) {
                return <RegularBlogCard key={post.id} post={post} />;
              } else if (cardType === 1) {
                return <MinimalBlogCard key={post.id} post={post} />;
              } else {
                return <VerticalBlogCard key={post.id} post={post} />;
              }
            })}
          </div>
        </div>
      </section>

      <FooterV2 />
    </div>
  )
}
