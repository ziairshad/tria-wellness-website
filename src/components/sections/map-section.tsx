export function MapSection() {
  return (
    <section className="px-4 py-4">
      <div className="w-full">
        <div className="w-full h-[440px] rounded-[30px] overflow-hidden border border-border bg-muted/40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.3578425011137!2d55.15679700000001!3d25.079827299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d673a8379e9%3A0xa9075564b86f6a8!2sVida%20The%20Hills%20-%20Tower%20A1!5e0!3m2!1sen!2sae!4v1764331802798!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tria Location"
            />
        </div>
      </div>
    </section>
  )
}