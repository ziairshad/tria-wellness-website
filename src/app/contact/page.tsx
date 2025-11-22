'use client';

import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

const CONTACT_INFO = {
  address: {
    street: "123 Sacred Balance Way",
    city: "Wellness District",
    state: "CA",
    zip: "90210"
  },
  phone: "(555) 123-TRIA",
  email: "hello@triastudio.com",
  hours: [
    { day: "Monday - Friday", time: "6:00 AM - 9:00 PM" },
    { day: "Saturday", time: "7:00 AM - 8:00 PM" },
    { day: "Sunday", time: "8:00 AM - 7:00 PM" }
  ]
};

const CONTACT_METHODS = [
  {
    icon: MapPin,
    title: "Visit Our Studio",
    content: `${CONTACT_INFO.address.street}\n${CONTACT_INFO.address.city}, ${CONTACT_INFO.address.state} ${CONTACT_INFO.address.zip}`,
    action: "Get Directions"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: CONTACT_INFO.phone,
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email Us",
    content: CONTACT_INFO.email,
    action: "Send Email"
  }
];

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 px-4 min-h-screen flex items-center justify-center">
          <Card className="p-8 text-center max-w-md mx-auto bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="font-vonca text-2xl font-bold text-foreground mb-4">
              Message Sent!
            </h2>
            <p className="text-muted-foreground">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="outline" className="mb-6">
            Get In Touch
          </Badge>
          <h1 className="font-vonca text-4xl md:text-6xl font-bold text-foreground mb-6">
            Contact Tria
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Whether you have questions about our classes,
            want to book a session, or simply want to connect, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {CONTACT_METHODS.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="p-6 text-center bg-gradient-to-br from-background to-muted/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-vonca text-xl font-semibold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 whitespace-pre-line">
                    {method.content}
                  </p>
                  <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                    {method.action}
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="font-vonca text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a topic</option>
                      <option value="class-inquiry">Class Information</option>
                      <option value="membership">Membership Options</option>
                      <option value="private-sessions">Private Sessions</option>
                      <option value="events">Special Events</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Studio Info & Hours */}
            <div className="space-y-8">
              {/* Studio Hours */}
              <Card className="p-6">
                <h3 className="font-vonca text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-primary" />
                  Studio Hours
                </h3>
                <div className="space-y-3">
                  {CONTACT_INFO.hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-medium text-foreground">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Map Placeholder */}
              <Card className="p-6">
                <h3 className="font-vonca text-2xl font-semibold text-foreground mb-4">
                  Find Us
                </h3>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">
                      Interactive map coming soon
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-muted/20 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Address:</strong><br />
                    {CONTACT_INFO.address.street}<br />
                    {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip}
                  </p>
                </div>
              </Card>

              {/* FAQ Shortcuts */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <h3 className="font-vonca text-2xl font-semibold text-foreground mb-4">
                  Quick Answers
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground">New to Tria?</h4>
                    <p className="text-sm text-muted-foreground">
                      Check out our beginner-friendly classes and intro packages.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Class Schedules?</h4>
                    <p className="text-sm text-muted-foreground">
                      View our full schedule and book classes online or through our app.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Pricing Questions?</h4>
                    <p className="text-sm text-muted-foreground">
                      We offer flexible membership options and class packages.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}