import { ClassData, ServiceData, InstructorData, StudioFeature, StudioSpace, ServiceFeature, BlogPost, BlogCategory } from "@/types";

export const CLASSES_DATA: ClassData[] = [
  {
    title: "Vinyasa Flow",
    instructor: "Sarah Chen",
    duration: "75 minutes",
    level: "All Levels",
    description: "Dynamic sequences linking breath with movement for strength, flexibility, and mindful awareness.",
    schedule: ["Mon • 9:00 AM", "Wed • 6:00 PM", "Fri • 9:00 AM", "Sun • 5:00 PM"],
    gradientFrom: "from-primary/15",
    gradientVia: "via-primary/10",
    gradientTo: "to-primary/5",
    image: "/images/classes/Vinyasa Flow.jpg"
  },
  {
    title: "Lagree Method",
    instructor: "Marcus Rivera",
    duration: "50 minutes",
    level: "Intermediate",
    description: "High-intensity, low-impact training that builds strength, endurance, and lean muscle mass.",
    schedule: ["Tue • 7:00 AM", "Thu • 6:30 PM", "Sat • 8:00 AM", "Sun • 10:00 AM"],
    gradientFrom: "from-accent/15",
    gradientVia: "via-accent/10",
    gradientTo: "to-accent/5",
    image: "/images/classes/lagree-method.webp"
  },
  {
    title: "Restorative Yoga",
    instructor: "Luna Kim",
    duration: "90 minutes",
    level: "All Levels",
    description: "Gentle, passive poses held for extended periods to promote deep relaxation and healing.",
    schedule: ["Wed • 7:30 PM", "Fri • 6:00 PM", "Sat • 4:00 PM", "Sun • 7:00 PM"],
    gradientFrom: "from-secondary/15",
    gradientVia: "via-secondary/10",
    gradientTo: "to-secondary/5",
    image: "/images/classes/restorative-yoga.webp"
  },
  {
    title: "Power Flow",
    instructor: "James Wilson",
    duration: "60 minutes",
    level: "Advanced",
    description: "Vigorous, athletic yoga practice building heat, strength, and stamina through challenging poses.",
    schedule: ["Mon • 6:00 PM", "Wed • 12:00 PM", "Fri • 6:00 PM", "Sat • 9:00 AM"],
    gradientFrom: "from-primary/20",
    gradientVia: "via-accent/10",
    gradientTo: "to-primary/5",
    image: "/images/classes/power-flow.webp"
  },
  {
    title: "Mindfulness Meditation",
    instructor: "Aria Patel",
    duration: "45 minutes",
    level: "All Levels",
    description: "Guided meditation sessions focusing on breath awareness, presence, and inner peace.",
    schedule: ["Tue • 8:00 AM", "Thu • 7:00 PM", "Sat • 5:30 PM", "Sun • 9:00 AM"],
    gradientFrom: "from-muted/20",
    gradientVia: "via-muted/15",
    gradientTo: "to-primary/5",
    image: "/images/classes/mindful-meditation.webp"
  },
  {
    title: "Prenatal Yoga",
    instructor: "Maya Singh",
    duration: "60 minutes",
    level: "Prenatal",
    description: "Safe, nurturing practice designed specifically for expecting mothers and growing families.",
    schedule: ["Mon • 10:30 AM", "Wed • 2:00 PM", "Fri • 10:30 AM", "Sat • 11:00 AM"],
    gradientFrom: "from-secondary/20",
    gradientVia: "via-accent/10",
    gradientTo: "to-secondary/5",
    image: "/images/classes/prenatal-yoga.jpg"
  }
];

export const INSTRUCTORS_DATA: InstructorData[] = [
  {
    name: "Sarah Chen",
    specialty: "Yoga & Mindfulness",
    initials: "SC",
    gradient: "from-primary/15 to-primary/5",
    bgColor: "bg-primary/10",
    description: "With over 10 years of experience, Sarah brings a grounding presence to every class, helping students find their center through mindful movement."
  },
  {
    name: "Marcus Rivera",
    specialty: "Lagree Method",
    initials: "MR",
    gradient: "from-accent/15 to-accent/5",
    bgColor: "bg-accent/10",
    description: "Marcus combines his background in athletic training with Lagree precision to create challenging yet accessible classes for all fitness levels."
  },
  {
    name: "Jordan Kim",
    specialty: "Lagree Method Expert",
    initials: "JK",
    gradient: "from-accent/10 to-accent/5",
    bgColor: "bg-accent/10",
    description: "Jordan's precision and attention to form ensures every Lagree session maximizes strength building while maintaining safety and proper alignment."
  },
  {
    name: "Luna Martinez",
    specialty: "Wellness & Recovery",
    initials: "LM",
    gradient: "from-secondary/15 to-secondary/5",
    bgColor: "bg-primary/10",
    description: "Luna specializes in restorative practices and helps clients overcome challenges and maintain balance through personalized wellness approaches."
  }
];

export const SERVICES_DATA: ServiceData[] = [
  {
    title: "Group Classes",
    description: "Expertly guided yoga and Lagree sessions in a supportive community environment.",
    includes: ["Vinyasa Flow", "Lagree Method", "Restorative Yoga", "Meditation"],
    gradientColors: "from-primary/60 to-accent/60",
    iconBg: "bg-primary/5",
    iconColor: "bg-primary/70",
    dotColor: "bg-accent/70"
  },
  {
    title: "Private Sessions",
    description: "One-on-one personalized guidance tailored to your unique wellness goals.",
    includes: ["Personal Training", "Injury Recovery", "Mindfulness Coaching", "Wellness Consultation"],
    gradientColors: "from-accent/60 to-secondary/60",
    iconBg: "bg-accent/5",
    iconColor: "bg-accent/70",
    dotColor: "bg-primary/70"
  },
  {
    title: "Wellness Programs",
    description: "Comprehensive programs for sustainable wellness and life transformation.",
    includes: ["Stress Management", "Nutrition Guidance", "Life Coaching", "Workshops"],
    gradientColors: "from-secondary/60 to-primary/40",
    iconBg: "bg-secondary/5",
    iconColor: "bg-secondary/70",
    dotColor: "bg-secondary/70"
  },
  {
    title: "Special Events",
    description: "Unique experiences and retreats for deeper connection and transformation.",
    includes: ["Weekend Retreats", "Teacher Training", "Community Events", "Seasonal Workshops"],
    gradientColors: "from-primary/40 to-accent/60",
    iconBg: "bg-primary/3",
    iconColor: "bg-primary/50",
    dotColor: "bg-primary/50"
  }
];

export const STUDIO_FEATURES: StudioFeature[] = [
  {
    title: "Premium Equipment",
    description: "State-of-the-art Lagree Megaformers and premium yoga props ensure optimal practice experience."
  },
  {
    title: "Wellness Amenities",
    description: "Luxurious changing rooms, filtered water stations, and curated retail for your wellness journey."
  },
  {
    title: "Natural Elements",
    description: "Living plants, natural materials, and abundant light create a connection to nature."
  },
  {
    title: "Sacred Atmosphere",
    description: "Thoughtful acoustics and curated scents create a truly immersive wellness experience."
  }
];

export const STUDIO_SPACES: StudioSpace[] = [
  {
    name: "Main Studio Space",
    gradient: "from-primary/10 to-primary/5"
  },
  {
    name: "Lagree\nStudio",
    gradient: "from-accent/10 to-accent/5"
  },
  {
    name: "Meditation\nRoom",
    gradient: "from-secondary/15 to-secondary/5"
  }
];

export const SERVICE_FEATURES: ServiceFeature[] = [
  {
    title: "Expert Guidance",
    description: "Certified instructors with years of experience in their specialized fields",
    iconBg: "bg-primary/5",
    iconColor: "bg-primary/70"
  },
  {
    title: "Personalized Approach",
    description: "Every service is tailored to meet your individual needs and wellness goals",
    iconBg: "bg-accent/5",
    iconColor: "bg-accent/70"
  },
  {
    title: "Holistic Focus",
    description: "Integrating mind, body, and spirit for complete wellness transformation",
    iconBg: "bg-secondary/5",
    iconColor: "bg-secondary/70"
  }
];

export const MARQUEE_TEXTS = [
  "Sacred Balance",
  "Mindful Movement",
  "Inner Peace",
  "Strength & Grace",
  "Conscious Living",
  "Mind Body Soul"
];

export const NAVIGATION_LINKS = [
  { href: "#classes", label: "Classes" },
  { href: "#studio", label: "Studio" },
  { href: "#instructors", label: "Instructors" },
  { href: "#services", label: "Membership" }
];

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    name: "Wellness",
    slug: "wellness",
    description: "Holistic wellness tips and insights",
    color: "bg-primary/5 text-primary/80"
  },
  {
    name: "Yoga",
    slug: "yoga",
    description: "Yoga practices and philosophy",
    color: "bg-accent/5 text-accent/80"
  },
  {
    name: "Lagree",
    slug: "lagree",
    description: "Lagree method and training insights",
    color: "bg-secondary/5 text-secondary/80"
  },
  {
    name: "Mindfulness",
    slug: "mindfulness",
    description: "Meditation and mindfulness practices",
    color: "bg-muted/15 text-foreground/80"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Finding Sacred Balance: The Journey to Mind-Body Harmony",
    slug: "finding-sacred-balance-mind-body-harmony",
    excerpt: "Discover how the ancient practice of balancing mind, body, and soul creates lasting transformation in our modern world.",
    content: `# Finding Sacred Balance: The Journey to Mind-Body Harmony

In our fast-paced modern world, the concept of sacred balance has never been more relevant. At Tria, we believe that true wellness emerges from the harmonious integration of mind, body, and soul.

## The Three Pillars of Sacred Balance

### Mind: Cultivating Awareness
The mind is our control center, where thoughts, emotions, and intentions converge. Through mindful practices like meditation and conscious breathing, we learn to observe our thoughts without judgment, creating space for clarity and peace.

### Body: Honoring Physical Presence
Our bodies are sacred vessels that carry us through life. Whether through the flowing movements of yoga or the precise strength-building of Lagree, we honor our physical form while building resilience and vitality.

### Soul: Connecting to Purpose
The soul represents our deeper essence, our connection to something greater than ourselves. It's nurtured through community, reflection, and practices that align us with our true purpose.

## Creating Your Personal Practice

Finding balance doesn't happen overnight. It's a journey of small, consistent choices that honor all aspects of your being:

- **Start with breath**: Simple breathing exercises can anchor you in the present moment
- **Move with intention**: Whether gentle yoga or intense Lagree, let movement be a form of meditation
- **Create sacred space**: Designate time and space for reflection and self-care
- **Build community**: Connect with others on similar journeys

## The Tria Approach

At Tria, we've created an environment where these three elements naturally converge. Our classes are designed not just as workouts, but as opportunities for transformation. Every breath, every movement, every moment of stillness contributes to your journey toward sacred balance.

Remember, balance isn't a destination—it's a dynamic, ever-evolving dance between strength and softness, effort and ease, movement and stillness.`,
    author: "Sarah Chen",
    publishDate: "2024-11-15",
    readTime: "5 min read",
    category: "Wellness",
    tags: ["balance", "mindfulness", "wellness", "transformation"],
    featuredImage: "/images/blog/e50eff_02574f0959ea40c29d022f8a56b35c0f~mv2.webp",
    featured: true
  },
  {
    id: "2",
    title: "The Science Behind Lagree: Why Slow and Controlled Wins",
    slug: "science-behind-lagree-slow-controlled-movement",
    excerpt: "Explore the biomechanics and physiology that make the Lagree method so effective for building lean muscle and functional strength.",
    content: `# The Science Behind Lagree: Why Slow and Controlled Wins

The Lagree method might look deceptively simple from the outside, but beneath its elegant movements lies a sophisticated understanding of exercise physiology that makes it one of the most effective forms of strength training available.

## Time Under Tension: The Secret Weapon

Unlike traditional strength training that focuses on explosive movements, Lagree emphasizes time under tension (TUT). This principle involves keeping muscles engaged for extended periods, leading to:

- Increased muscle fiber recruitment
- Enhanced metabolic stress
- Improved muscular endurance
- Greater caloric burn during and after exercise

## The Mega-Former Advantage

The Lagree Mega-Former's spring resistance system creates variable load throughout each movement:

### Constant Tension
Springs maintain resistance in both directions of movement, eliminating rest periods that allow muscles to recover mid-exercise.

### Progressive Overload
Adjustable spring tension allows for precise load management, ensuring continuous adaptation and growth.

### Functional Movement Patterns
Multi-planar movements mirror real-life activities, improving overall functional strength.

## Muscle Fiber Transformation

Research shows that the Lagree method's combination of:
- Low impact (joint-friendly)
- High intensity (muscle challenging)
- Slow tempo (time under tension)

Creates optimal conditions for developing Type I (slow-twitch) muscle fibers while also engaging Type II (fast-twitch) fibers, resulting in lean, functional muscle development.

## The Mind-Muscle Connection

The deliberate pace of Lagree movements requires intense focus and body awareness, strengthening the mind-muscle connection that translates to:
- Better movement quality in daily life
- Reduced injury risk
- Enhanced proprioception
- Improved coordination

## Recovery and Adaptation

The controlled nature of Lagree allows for:
- Faster recovery between sessions
- Reduced inflammation compared to high-impact exercise
- Sustainable long-term practice
- Lower risk of overuse injuries

At Tria, our instructors are trained to guide you through each movement with precision, ensuring you experience the full benefits of this scientifically-backed method.`,
    author: "Marcus Rivera",
    publishDate: "2024-11-10",
    readTime: "7 min read",
    category: "Lagree",
    tags: ["lagree", "science", "strength training", "fitness"],
    featuredImage: "/images/blog/e50eff_4965ce9844da4c3a877026c8edf3aee9~mv2.webp",
    featured: true
  },
  {
    id: "3",
    title: "Breathwork 101: Your Gateway to Inner Peace",
    slug: "breathwork-101-gateway-inner-peace",
    excerpt: "Learn fundamental breathing techniques that can transform your stress levels and deepen your connection to the present moment.",
    content: `# Breathwork 101: Your Gateway to Inner Peace

Breath is our most fundamental life force, yet it's often the most overlooked tool for transformation. At Tria, we integrate conscious breathing into every practice, recognizing its power to shift our entire state of being.

## The Science of Breath

Breathing directly affects our nervous system:
- **Sympathetic activation**: Short, shallow breaths trigger stress response
- **Parasympathetic activation**: Deep, slow breaths promote calm and healing

## Essential Techniques for Beginners

### 1. Three-Part Breath (Dirga Pranayama)
- Inhale into belly, ribs, then chest
- Exhale in reverse order
- Promotes full oxygen exchange and nervous system balance

### 2. Box Breathing
- Inhale for 4 counts
- Hold for 4 counts
- Exhale for 4 counts
- Hold empty for 4 counts
- Perfect for anxiety management

### 3. 4-7-8 Breath
- Inhale for 4
- Hold for 7
- Exhale for 8
- Naturally calms the nervous system

## Integrating Breathwork into Daily Life

- **Morning practice**: 5 minutes of conscious breathing to set intentions
- **Transition moments**: Use breath to shift between activities
- **Stress response**: Return to breath when overwhelmed
- **Evening wind-down**: Breathing practice before sleep

## Breathwork in Movement

At Tria, we teach breath-synchronized movement:
- **Yoga**: Vinyasa sequences linked to breath rhythm
- **Lagree**: Breath patterns that support sustained effort
- **Meditation**: Breath as anchor for present-moment awareness

Your breath is always with you, ready to serve as a bridge between stress and serenity, tension and ease.`,
    author: "Luna Martinez",
    publishDate: "2024-11-05",
    readTime: "4 min read",
    category: "Mindfulness",
    tags: ["breathwork", "meditation", "stress relief", "mindfulness"],
    featuredImage: "/images/blog/e50eff_6f9a8f3cfb954f388ca626de776193eb~mv2.avif"
  },
  {
    id: "4",
    title: "Building a Sustainable Wellness Routine",
    slug: "building-sustainable-wellness-routine",
    excerpt: "Practical strategies for creating wellness habits that stick, without overwhelming your already busy schedule.",
    content: `# Building a Sustainable Wellness Routine

Creating lasting change in your wellness journey isn't about perfect daily routines or dramatic transformations. It's about building sustainable practices that integrate seamlessly into your life.

## Start Small, Think Big

The key to sustainable wellness is progression, not perfection:

### Week 1-2: Foundation Building
- 5 minutes of morning breathing
- One mindful meal per day
- 10-minute evening stretch

### Week 3-4: Adding Movement
- 2 classes per week (yoga or Lagree)
- Daily 5-minute meditation
- One nature walk weekly

### Week 5-8: Deepening Practice
- 3 classes per week
- 15-minute daily mindfulness practice
- Weekly meal prep session

## The Four Pillars of Sustainable Wellness

### 1. Movement That You Enjoy
- Find activities that energize rather than drain you
- Mix gentle and challenging practices
- Listen to your body's needs

### 2. Consistent Sleep Schedule
- Regular bedtime and wake time
- Digital sunset 1 hour before bed
- Create calming bedtime ritual

### 3. Nourishing Nutrition
- Focus on whole, unprocessed foods
- Stay hydrated throughout the day
- Practice mindful eating

### 4. Stress Management Tools
- Regular breathwork practice
- Boundary setting
- Community connection

## Making It Stick

### Track Your Why, Not Just Your What
Instead of just logging workouts, track:
- How you feel after practice
- Energy levels throughout the day
- Sleep quality improvements
- Stress management success

### Build Your Support System
- Find an accountability partner
- Join the Tria community
- Celebrate small wins
- Be patient with yourself

Remember: Wellness is not a destination but a lifelong journey of small, loving choices.`,
    author: "Sarah Chen",
    publishDate: "2024-10-28",
    readTime: "6 min read",
    category: "Wellness",
    tags: ["wellness routine", "habits", "lifestyle", "sustainability"],
    featuredImage: "/images/blog/e50eff_c78d109da0aa423bbfb77544310d05a9~mv2.webp"
  }
];