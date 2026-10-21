export const profile = {
  name: 'Mfon Paulinus',
  firstName: 'Mfon',
  lastName: 'Paulinus',
  role: 'Fullstack Developer',
  email: 'mstrings11@gmail.com',
  phone: '+234 814 376 4679',
  location: 'Nigeria',
  availability: 'Open to remote roles',
  cvUrl: '/Paulinus_Mfon_Fullstack_Developer_CV.pdf',
  bio: 'Fullstack developer building production web apps across fintech, ecommerce and education. React and Next.js on the front, Node.js and NestJS APIs behind them, and payment flows that hold up in production.',
  longBio: `With over 6 years of hands-on experience, I build React and Next.js interfaces backed by Node.js, Express and NestJS APIs, with equal depth on both sides of the stack. I have delivered 25+ web applications for startups and SMEs in fintech, healthcare, ecommerce and education.

I handle the parts of payment work that break in production: gateway integration with Paystack, Flutterwave, Stripe and FiatMatch, webhook and callback verification, and reconciliation against provider records. I care about performance, whether that means indexing slow MongoDB queries or removing a polling loop that fired 720 requests an hour. I'm currently contracting and available for remote engagements.`,
  stats: [
    { value: '6+', label: 'Years Experience' },
    { value: '25+', label: 'Apps Delivered' },
    { value: '1,000+', label: 'Daily Users Served' },
    { value: '2,000+', label: 'GitHub Contributions / yr' },
  ],
  skills: {
    frontend: ['TypeScript', 'React', 'Next.js', 'React Native', 'Redux', 'Zustand', 'Tailwind CSS', 'Chakra UI'],
    backend: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'JWT & RBAC', 'PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'TypeORM', 'Sequelize'],
    tools: ['Stripe', 'Paystack', 'Flutterwave', 'FiatMatch', 'Dojah', 'SendGrid', 'Firebase', 'Docker', 'CI/CD', 'AWS', 'GCP', 'DigitalOcean', 'Jest', 'Git'],
  },
  experience: [
    {
      role: 'Fullstack Developer',
      company: 'Freelance & Contract',
      period: 'Apr 2023 – Present',
      highlights: [
        'Building 234DEALS, a live multi-vendor marketplace (Next.js, Node.js, Express): CSR vendor support dashboard with scoped permissions, drag-and-drop hero management with Cloudinary, referral QR codes and an AI product description generator.',
        'Removed a polling loop firing roughly 720 requests an hour and cut image payloads with caching and Next.js Image optimisation.',
        'Delivered 25+ web apps for SMEs and startups, including Paystack, Flutterwave and Stripe checkout, webhook verification and transaction state handling.',
        'Set up Docker-based CI/CD pipelines, reducing deployment time by 40%.',
      ],
    },
    {
      role: 'Fullstack Developer (Contract)',
      company: 'Thelix Holdings',
      period: 'Sep 2025 – Mar 2026',
      highlights: [
        'Built features for a multi-school management portal with a NestJS backend.',
        'Developed the behaviour tracker module for recording student conduct across classes and terms.',
        'Built the company-wide dashboard aggregating reporting across all business units.',
      ],
    },
    {
      role: 'Fullstack Developer (Contract)',
      company: 'WALLX Diaspora',
      period: 'Apr 2025 – Aug 2025',
      highlights: [
        'Architected Node.js and Express REST APIs for a cross-border payments platform (FaasPay).',
        'Integrated FiatMatch for CAD wallet crediting and automated KYC verification through SendGrid.',
        'Cut API response times by 35% by profiling slow MongoDB queries and adding compound indexes.',
      ],
    },
    {
      role: 'Fullstack Developer',
      company: 'ITSKILLSCENTER',
      period: 'Feb 2020 – Apr 2023',
      highlights: [
        'Built the Peppermart ecommerce dashboard in Next.js and Tailwind CSS, serving 1,000+ daily active users.',
        'Built a fullstack blog platform with React, Redux, Node.js, Express and MongoDB.',
        'Created responsive UI components and shared state patterns reused across client projects.',
      ],
    },
  ],
  social: {
    github: 'https://github.com/mfontosco',
    linkedin: 'https://www.linkedin.com/in/mfon-paulinus-21ab5a1b9/',
    twitter: 'https://x.com/PaulinusMfon',
  },
}
