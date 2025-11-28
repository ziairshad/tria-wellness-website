import { TestimonialsCarousel } from "@/components/testimonials-carousel";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-4 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto p-8 sm:p-10 lg:p-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl font-serif font-light tracking-tight mb-4">What Our Members Say</h2>
          <p className="text-lg font-sans text-muted-foreground max-w-2xl mx-auto">
            Real stories of transformation and growth from our Tria community
          </p>
        </div>
        <TestimonialsCarousel />
      </div>
    </section>
  );
}
