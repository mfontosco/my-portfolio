export interface Project {
  id: number
  title: string
  description: string
  gradient: string
  emoji: string
  image?: string
  tags: string[]
  category: 'Frontend' | 'Backend' | 'Fullstack' | 'Mobile'
  // Shown with the phone-style screenshot and counted under Mobile, whatever its category
  mobileApp?: boolean
  liveUrl: string
  githubUrl?: string
  featured: boolean
}

// Fullstack projects also count as Frontend and Backend work; mobile apps also count as Mobile
export function inCategory(project: Project, category: Project['category']) {
  if (project.category === category) return true
  if (category === 'Mobile') return !!project.mobileApp
  return project.category === 'Fullstack' && (category === 'Frontend' || category === 'Backend')
}

export const projects: Project[] = [
  {
    id: 1,
    title: '234 Deals',
    description:
      "Nigeria's online marketplace for buying and selling everything from cars and real estate to electronics and services, with vendor dashboards, seller messaging, promoted listings and companion iOS and Android apps.",
    gradient: 'bg-gradient-to-br from-orange-900/60 to-zinc-950',
    emoji: '🛒',
    image: '/234deals.png',
    tags: ['Next.js'],
    category: 'Fullstack',
    liveUrl: 'https://234deals.com',
    featured: true,
  },
  {
    id: 2,
    title: 'SnookerZ Pool',
    description:
      'An online pool gaming platform where players across Nigeria and Africa compete in matches and tournaments.',
    gradient: 'bg-gradient-to-br from-green-900/60 to-zinc-950',
    emoji: '🎱',
    image: '/snookerz.png',
    tags: [],
    category: 'Fullstack',
    liveUrl: 'https://snookerz.com',
    featured: true,
  },
  {
    id: 3,
    title: 'ExcelMind College Admin',
    description:
      'An all-in-one school management platform that helps schools simplify admissions, automate student records and keep parents engaged from a single dashboard.',
    gradient: 'bg-gradient-to-br from-blue-900/60 to-zinc-950',
    emoji: '🎓',
    image: '/excelmind.png',
    tags: [],
    category: 'Fullstack',
    liveUrl: 'https://excelmindcollege.theexcelmind.com/admin/login',
    featured: true,
  },
  {
    id: 4,
    title: 'PlaX',
    description:
      'A complete benefit administration platform covering the full cycle: enumerating candidates, verifying their data, disbursing benefits and recovering funds where necessary.',
    gradient: 'bg-gradient-to-br from-purple-900/60 to-zinc-950',
    emoji: '📋',
    image: '/plax.png',
    tags: [],
    category: 'Fullstack',
    liveUrl: 'https://plax.ng',
    featured: false,
  },
  {
    id: 6,
    title: 'FaasPay by WallX',
    description:
      'Cross-border payments app. I built the Node.js payment APIs and FiatMatch wallet and KYC integration, cut API response times 35%, and worked on the admin frontend.',
    gradient: 'bg-gradient-to-br from-emerald-900/60 to-zinc-950',
    emoji: '💳',
    image: '/faaspay.png',
    tags: ['Node.js', 'Express', 'MongoDB', 'FiatMatch', 'Fintech'],
    category: 'Fullstack',
    mobileApp: true,
    liveUrl: 'https://apps.apple.com/us/app/faaspay-by-wallx/id6590625075',
    featured: false,
  },
]
