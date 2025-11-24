import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-serif font-light tracking-tight">Begin Your Transformation</h2>
        <p className="text-xl font-sans text-muted-foreground">
          Step into a sanctuary for balance, clarity, and connection
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="px-8 py-3">
            <a href="#classes">
              Book Your First Class
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8 py-3">
            <a href="#studio">
              Schedule Tour
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}