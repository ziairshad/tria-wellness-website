"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/sections/animated-section";
import { CLASSES_DATA } from "@/data/constants";

const heroStats = [
  { label: "Studios Worldwide", value: "03" },
  { label: "Weekly Classes", value: "65+" },
  { label: "Community Members", value: "1.8K" },
];

const programHighlights = CLASSES_DATA.slice(0, 3);

const schedulePreview = [
  {
    day: "Morning",
    sessions: [
      { time: "6:45 AM", name: "Lagree Method", coach: "Marcus Rivera" },
      { time: "8:00 AM", name: "Mindful Flow", coach: "Sarah Chen" },
      { time: "9:30 AM", name: "Prenatal Support", coach: "Maya Singh" },
    ],
  },
  {
    day: "Midday",
    sessions: [
      { time: "12:00 PM", name: "Power Flow", coach: "James Wilson" },
      { time: "1:30 PM", name: "Meditation Reset", coach: "Aria Patel" },
    ],
  },
  {
    day: "Evening",
    sessions: [
      { time: "5:00 PM", name: "Restorative Yoga", coach: "Luna Martinez" },
      { time: "6:30 PM", name: "Lagree Method", coach: "Jordan Kim" },
      { time: "8:00 PM", name: "Sound Bath", coach: "Guest Guides" },
    ],
  },
];

export function PostureHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-10">
          <p className="uppercase tracking-[0.4em] text-xs font-semibold text-muted-foreground">
            Tria Studio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light leading-tight text-foreground">
            Precision movement for sacred balance.
          </h1>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl leading-relaxed">
            Inspired by the fluid layout of Posture, this alternate landing experience distills our mindful
            classes, Lagree training, and restorative rituals into a clean, editorial journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#programs">Explore Programs</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Schedule a Studio Visit</Link>
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-serif">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl opacity-60" />
          <div className="relative rounded-[32px] overflow-hidden border border-border/60 bg-background/60 shadow-2xl">
            <Image
              src="/images/studio-main.jpg"
              alt="Tria Studio interior"
              width={900}
              height={1200}
              className="w-full h-[520px] object-cover"
            />
            <div className="grid grid-cols-2 border-t border-border/60">
              <CardStat title="Lagree" description="Megaformer studio for sculpt + strength" />
              <CardStat title="Rituals" description="Meditation, sound baths, and breathwork" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardStat({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6">
      <p className="font-serif text-lg">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export function PostureStrip() {
  const stripItems = ["Lagree", "Mindful Flow", "Restorative Rituals", "Private Coaching", "Community"];
  return (
    <AnimatedSection className="border-y border-border bg-background">
      <div className="max-w-7xl mx-auto py-6 flex flex-wrap items-center justify-between gap-4 text-xs tracking-[0.4em] uppercase text-muted-foreground">
        {stripItems.map((item) => (
          <span key={item} className="font-semibold">
            {item}
          </span>
        ))}
      </div>
    </AnimatedSection>
  );
}

export function PosturePrograms() {
  return (
    <AnimatedSection id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/40">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Programs</p>
            <h2 className="text-4xl font-serif font-light leading-tight">Modular practices for every nervous system.</h2>
            <p className="text-muted-foreground font-sans">
              Borrowing from the Posture cadence, we shaped three hero formats that anchor our schedule: mindful flow,
              Lagree strength, and restorative rituals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {programHighlights.map((program) => (
              <div key={program.title} className="rounded-3xl border border-border/60 bg-background/80 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">{program.level}</p>
                <h3 className="font-serif text-2xl mb-2">{program.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{program.description}</p>
                <div className="space-y-1">
                  {program.schedule.slice(0, 2).map((slot) => (
                    <p key={slot} className="text-sm font-sans text-foreground">
                      {slot}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function PostureExperience() {
  const pillars = [
    { title: "Spatial storytelling", copy: "Layered lighting, botanicals, curated scent, and artisanal soundscapes." },
    { title: "Intelligent programming", copy: "Daily sequencing that balances intensity, restoration, and integration." },
    { title: "Membership rituals", copy: "Monthly check-ins, recovery labs, and curated gatherings for members." },
  ];

  return (
    <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Experience</p>
          <h2 className="text-4xl font-serif font-light leading-tight">
            The Tria posture: minimalist architecture, maximal presence.
          </h2>
          <p className="text-muted-foreground">
            We mapped the Posture layout&rsquo;s editorial energy into our own voice: elongated typography, generous white space, and
            tactile gradients that mirror our sanctuary in Dubai.
          </p>
          <div className="space-y-5">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="border-t border-border pt-5">
                <p className="font-serif text-xl mb-1">{pillar.title}</p>
                <p className="text-sm text-muted-foreground">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6">
          <div className="rounded-[32px] overflow-hidden border border-border/60">
            <Image
              src="/images/studio-meditation.jpg"
              alt="Meditation space"
              width={900}
              height={700}
              className="w-full h-[320px] object-cover"
            />
          </div>
          <div className="rounded-[32px] overflow-hidden border border-border/60">
            <Image
              src="/images/studio-lagree.jpg"
              alt="Lagree studio"
              width={900}
              height={700}
              className="w-full h-[320px] object-cover"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function PostureMembership() {
  const benefits = [
    "Unlimited Lagree + yoga access",
    "Priority booking for workshops",
    "Monthly nervous system check-ins",
    "Guest passes + curated retail",
  ];
  return (
    <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-card/60">
      <div className="max-w-6xl mx-auto rounded-[40px] border border-border/60 bg-background/80 px-10 py-14">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Membership</p>
            <h2 className="text-4xl font-serif font-light leading-tight">Membership & Packages</h2>
            <p className="text-muted-foreground">
              Choose from unlimited memberships, thoughtful class packs, or bespoke private training. Every tier unlocks seasonal
              immersions and concierge-level scheduling inspired by Posture&rsquo;s member journey.
            </p>
            <Button asChild size="lg">
              <a href="#schedule">View Schedule</a>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-2xl border border-border/60 p-5 bg-muted/20">
                <p className="text-sm font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function PostureSchedule() {
  return (
    <AnimatedSection id="schedule" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Schedule</p>
            <h2 className="text-4xl font-serif font-light leading-tight">A rhythm of classes that breathe.</h2>
          </div>
          <Button asChild variant="secondary">
            <a href="#classes">Download Full Schedule</a>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {schedulePreview.map((block) => (
            <div key={block.day} className="rounded-3xl border border-border/60 bg-background/80 p-6 space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{block.day}</p>
              <div className="space-y-4">
                {block.sessions.map((session) => (
                  <div key={`${block.day}-${session.time}`} className="border-t border-border/40 pt-4">
                    <p className="text-sm text-muted-foreground">{session.time}</p>
                    <p className="font-serif text-xl">{session.name}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{session.coach}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export function PostureCTA() {
  return (
    <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Visit</p>
        <h2 className="text-4xl font-serif font-light">
          Ready to feel the Tria posture? Book your first Lagree or mindfulness ritual.
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Inspired by the minimalist cues of Posture&apos;s landing page, this alt flow is ideal for campaigns, special events,
          or A/B tests without touching the primary homepage.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Plan Your Visit</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#programs">See Programs</a>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
