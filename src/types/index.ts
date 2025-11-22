export interface ClassData {
  title: string;
  instructor: string;
  duration: string;
  level: string;
  description: string;
  schedule: string[];
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  image: string;
}

export interface ServiceData {
  title: string;
  description: string;
  includes: string[];
  gradientColors: string;
  iconBg: string;
  iconColor: string;
  dotColor: string;
}

export interface InstructorData {
  name: string;
  specialty: string;
  initials: string;
  gradient: string;
  bgColor: string;
  description: string;
}

export interface StudioFeature {
  title: string;
  description: string;
}

export interface StudioSpace {
  name: string;
  gradient: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage?: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featuredImage: string;
  featured?: boolean;
}

export interface BlogCategory {
  name: string;
  slug: string;
  description: string;
  color: string;
}