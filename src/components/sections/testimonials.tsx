import { TestimonialsCarousel } from "@/components/testimonials-carousel"

export function Testimonials() {
  return (
    <section id="testimonials" className="pt-10 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto p-6 sm:p-10 lg:p-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-light tracking-tight leading-none mb-3 sm:mb-4">
            What Our Members Say
          </h2>
          <p className="text-lg font-sans text-muted-foreground max-w-2xl mx-auto">
            Real stories of transformation and growth from our TRIA community
          </p>
        </div>
        <TestimonialsCarousel />
      </div>
    </section>
  )
}
