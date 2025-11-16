import { ClassData, ServiceData, InstructorData, StudioFeature, StudioSpace, ServiceFeature } from "@/types";

export const CLASSES_DATA: ClassData[] = [
  {
    title: "Vinyasa Flow",
    instructor: "Sarah Chen",
    duration: "75 minutes",
    level: "All Levels",
    description: "Dynamic sequences linking breath with movement for strength, flexibility, and mindful awareness.",
    schedule: ["Mon • 9:00 AM", "Wed • 6:00 PM", "Fri • 9:00 AM", "Sun • 5:00 PM"],
    gradientFrom: "from-primary/30",
    gradientVia: "via-primary/20",
    gradientTo: "to-primary/10",
    image: "/images/classes/Vinyasa Flow.jpg"
  },
  {
    title: "Lagree Method",
    instructor: "Marcus Rivera",
    duration: "50 minutes",
    level: "Intermediate",
    description: "High-intensity, low-impact training that builds strength, endurance, and lean muscle mass.",
    schedule: ["Tue • 7:00 AM", "Thu • 6:30 PM", "Sat • 8:00 AM", "Sun • 10:00 AM"],
    gradientFrom: "from-accent/30",
    gradientVia: "via-accent/20",
    gradientTo: "to-accent/10",
    image: "/images/classes/lagree-method.webp"
  },
  {
    title: "Restorative Yoga",
    instructor: "Luna Kim",
    duration: "90 minutes",
    level: "All Levels",
    description: "Gentle, passive poses held for extended periods to promote deep relaxation and healing.",
    schedule: ["Wed • 7:30 PM", "Fri • 6:00 PM", "Sat • 4:00 PM", "Sun • 7:00 PM"],
    gradientFrom: "from-secondary/30",
    gradientVia: "via-secondary/20",
    gradientTo: "to-secondary/10",
    image: "/images/classes/restorative-yoga.webp"
  },
  {
    title: "Power Flow",
    instructor: "James Wilson",
    duration: "60 minutes",
    level: "Advanced",
    description: "Vigorous, athletic yoga practice building heat, strength, and stamina through challenging poses.",
    schedule: ["Mon • 6:00 PM", "Wed • 12:00 PM", "Fri • 6:00 PM", "Sat • 9:00 AM"],
    gradientFrom: "from-primary/40",
    gradientVia: "via-accent/20",
    gradientTo: "to-primary/10",
    image: "/images/classes/power-flow.webp"
  },
  {
    title: "Mindfulness Meditation",
    instructor: "Aria Patel",
    duration: "45 minutes",
    level: "All Levels",
    description: "Guided meditation sessions focusing on breath awareness, presence, and inner peace.",
    schedule: ["Tue • 8:00 AM", "Thu • 7:00 PM", "Sat • 5:30 PM", "Sun • 9:00 AM"],
    gradientFrom: "from-muted/40",
    gradientVia: "via-muted/30",
    gradientTo: "to-primary/10",
    image: "/images/classes/mindful-meditation.webp"
  },
  {
    title: "Prenatal Yoga",
    instructor: "Maya Singh",
    duration: "60 minutes",
    level: "Prenatal",
    description: "Safe, nurturing practice designed specifically for expecting mothers and growing families.",
    schedule: ["Mon • 10:30 AM", "Wed • 2:00 PM", "Fri • 10:30 AM", "Sat • 11:00 AM"],
    gradientFrom: "from-secondary/40",
    gradientVia: "via-accent/20",
    gradientTo: "to-secondary/10",
    image: "/images/classes/prenatal-yoga.jpg"
  }
];

export const INSTRUCTORS_DATA: InstructorData[] = [
  {
    name: "Sarah Chen",
    specialty: "Yoga & Mindfulness",
    initials: "SC",
    gradient: "from-primary/30 to-primary/10",
    bgColor: "bg-primary/20",
    description: "With over 10 years of experience, Sarah brings a grounding presence to every class, helping students find their center through mindful movement."
  },
  {
    name: "Marcus Rivera",
    specialty: "Lagree Method",
    initials: "MR",
    gradient: "from-accent/30 to-accent/10",
    bgColor: "bg-accent/20",
    description: "Marcus combines his background in athletic training with Lagree precision to create challenging yet accessible classes for all fitness levels."
  },
  {
    name: "Jordan Kim",
    specialty: "Lagree Method Expert",
    initials: "JK",
    gradient: "from-accent/20 to-accent/10",
    bgColor: "bg-accent/20",
    description: "Jordan's precision and attention to form ensures every Lagree session maximizes strength building while maintaining safety and proper alignment."
  },
  {
    name: "Luna Martinez",
    specialty: "Wellness & Recovery",
    initials: "LM",
    gradient: "from-secondary/30 to-secondary/10",
    bgColor: "bg-primary/20",
    description: "Luna specializes in restorative practices and helps clients overcome challenges and maintain balance through personalized wellness approaches."
  }
];

export const SERVICES_DATA: ServiceData[] = [
  {
    title: "Group Classes",
    description: "Expertly guided yoga and Lagree sessions in a supportive community environment.",
    includes: ["Vinyasa Flow", "Lagree Method", "Restorative Yoga", "Meditation"],
    gradientColors: "from-primary to-accent",
    iconBg: "bg-primary/10",
    iconColor: "bg-primary",
    dotColor: "bg-accent"
  },
  {
    title: "Private Sessions",
    description: "One-on-one personalized guidance tailored to your unique wellness goals.",
    includes: ["Personal Training", "Injury Recovery", "Mindfulness Coaching", "Wellness Consultation"],
    gradientColors: "from-accent to-secondary",
    iconBg: "bg-accent/10",
    iconColor: "bg-accent",
    dotColor: "bg-primary"
  },
  {
    title: "Wellness Programs",
    description: "Comprehensive programs for sustainable wellness and life transformation.",
    includes: ["Stress Management", "Nutrition Guidance", "Life Coaching", "Workshops"],
    gradientColors: "from-secondary to-primary/60",
    iconBg: "bg-secondary/10",
    iconColor: "bg-secondary",
    dotColor: "bg-secondary"
  },
  {
    title: "Special Events",
    description: "Unique experiences and retreats for deeper connection and transformation.",
    includes: ["Weekend Retreats", "Teacher Training", "Community Events", "Seasonal Workshops"],
    gradientColors: "from-primary/60 to-accent",
    iconBg: "bg-primary/5",
    iconColor: "bg-primary/60",
    dotColor: "bg-primary/60"
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
    gradient: "from-primary/20 to-primary/10"
  },
  {
    name: "Lagree\nStudio",
    gradient: "from-accent/20 to-accent/10"
  },
  {
    name: "Meditation\nRoom",
    gradient: "from-secondary/30 to-secondary/10"
  }
];

export const SERVICE_FEATURES: ServiceFeature[] = [
  {
    title: "Expert Guidance",
    description: "Certified instructors with years of experience in their specialized fields",
    iconBg: "bg-primary/10",
    iconColor: "bg-primary"
  },
  {
    title: "Personalized Approach",
    description: "Every service is tailored to meet your individual needs and wellness goals",
    iconBg: "bg-accent/10",
    iconColor: "bg-accent"
  },
  {
    title: "Holistic Focus",
    description: "Integrating mind, body, and spirit for complete wellness transformation",
    iconBg: "bg-secondary/10",
    iconColor: "bg-secondary"
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
  { href: "#services", label: "Services" }
];