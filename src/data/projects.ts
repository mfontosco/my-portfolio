export interface Project {
  id: number
  title: string
  description: string
  gradient: string
  emoji: string
  tags: string[]
  category: 'Frontend' | 'Backend' | 'Fullstack' | 'Mobile'
  liveUrl: string
  githubUrl: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'ShopSphere E-Commerce',
    description:
      'A full-featured e-commerce platform with real-time inventory, Stripe payments, and an admin dashboard for managing products and orders.',
    gradient: 'bg-gradient-to-br from-orange-900/60 to-zinc-950',
    emoji: '🛍️',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma'],
    category: 'Fullstack',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'TaskFlow Pro',
    description:
      'A collaborative project management tool with real-time updates, drag-and-drop kanban boards, team workspaces, and advanced analytics.',
    gradient: 'bg-gradient-to-br from-blue-900/60 to-zinc-950',
    emoji: '📋',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis'],
    category: 'Fullstack',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'WeatherSense Dashboard',
    description:
      'An interactive weather analytics dashboard with geolocation, 7-day forecasts, historical data visualization, and severe weather alerts.',
    gradient: 'bg-gradient-to-br from-cyan-900/60 to-zinc-950',
    emoji: '🌤️',
    tags: ['React', 'Redux', 'Chart.js', 'OpenWeather API', 'Tailwind'],
    category: 'Frontend',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'ConnectHub Social',
    description:
      'A social networking platform with real-time messaging, posts, stories, notifications, and a content recommendation engine.',
    gradient: 'bg-gradient-to-br from-purple-900/60 to-zinc-950',
    emoji: '💬',
    tags: ['React', 'Firebase', 'TailwindCSS', 'Zustand'],
    category: 'Frontend',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'DevAPI Gateway',
    description:
      'A high-performance REST API gateway with rate limiting, JWT auth, request logging, and an interactive developer portal.',
    gradient: 'bg-gradient-to-br from-green-900/60 to-zinc-950',
    emoji: '⚙️',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'Swagger'],
    category: 'Backend',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'FitTrack Mobile App',
    description:
      'A cross-platform fitness tracking app with workout logging, progress charts, meal planning, and wearable device integration.',
    gradient: 'bg-gradient-to-br from-red-900/60 to-zinc-950',
    emoji: '💪',
    tags: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'HealthKit'],
    category: 'Mobile',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
]
