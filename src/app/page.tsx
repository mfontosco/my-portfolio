import Link from 'next/link'
import { Github, Linkedin, ArrowRight, Code2, Server, Layers, ChevronDown } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import AnimatedSection from '@/components/AnimatedSection'
import Typewriter from '@/components/Typewriter'
import ProjectCard from '@/components/ProjectCard'
import ProfilePhoto from '@/components/ProfilePhoto'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'

const services = [
  {
    icon: <Code2 size={26} />,
    title: 'Frontend Development',
    description:
      'Pixel-perfect, responsive UIs built with React and Next.js. Performance-optimized, accessible, and delightful to use.',
    tags: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
  },
  {
    icon: <Server size={26} />,
    title: 'Backend Development',
    description:
      'Scalable APIs and server-side architecture. RESTful services, real-time systems, and robust data management.',
    tags: ['Node.js', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    icon: <Layers size={26} />,
    title: 'Fullstack Solutions',
    description:
      'End-to-end product development from database schema to polished UI — shipping complete, production-ready apps.',
    tags: ['System Design', 'DevOps', 'Docker', 'AWS'],
  },
]

const stats = [
  { value: profile.stats.years, label: 'Years Experience' },
  { value: profile.stats.projects, label: 'Projects Shipped' },
  { value: profile.stats.clients, label: 'Happy Clients' },
  { value: profile.stats.contributions, label: 'GitHub Contributions / yr' },
]

const floatingBadges = [
  { label: 'React', pos: 'top-0 -left-6', delay: 'animate-float' },
  { label: 'Node.js', pos: 'top-8 -right-8', delay: 'animate-float-2' },
  { label: 'TypeScript', pos: 'bottom-10 -left-8', delay: 'animate-float-3' },
  { label: 'Next.js', pos: 'bottom-0 -right-4', delay: 'animate-float' },
]

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <div className="bg-[#080808]">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden dot-grid">
        {/* Ambient glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-600/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left — Text */}
            <div className="lg:col-span-7 space-y-7">
              <AnimatedSection delay={0.1}>
                <p className="section-label">Hi, I&apos;m</p>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
                  <span className="text-white">Mfon</span>
                  <br />
                  <span className="shimmer-text">Paulinus</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="flex items-center gap-3 text-xl">
                  <span className="text-zinc-500">I'm a</span>
                  <Typewriter />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
                  {profile.bio}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/portfolio"
                    className="group inline-flex items-center gap-2 px-8 py-3.5 bg-orange-500 text-black font-bold rounded-full hover:bg-orange-400 transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.45)] text-sm"
                  >
                    View My Work
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/15 text-white font-medium rounded-full hover:border-orange-500/50 hover:text-orange-400 transition-all text-sm"
                  >
                    Get in Touch
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="flex items-center gap-4 pt-2">
                  <span className="text-zinc-600 text-xs uppercase tracking-widest">Find me on</span>
                  <div className="flex gap-3">
                    {[
                      { href: profile.social.github, label: 'GitHub', icon: <Github size={16} /> },
                      { href: profile.social.linkedin, label: 'LinkedIn', icon: <Linkedin size={16} /> },
                      { href: profile.social.twitter, label: 'X (Twitter)', icon: <FaXTwitter size={14} /> },
                    ].map((s, i) => (
                      <Link
                        key={i}
                        href={s.href}
                        aria-label={s.label}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-orange-400 hover:border-orange-500/40 transition-all"
                      >
                        {s.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — Photo */}
            <AnimatedSection delay={0.3} direction="right" className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Pulsing glow */}
                <div className="absolute inset-0 rounded-full bg-orange-500/15 blur-2xl animate-pulse-glow" />

                {/* Rotating gradient ring */}
                <div className="absolute -inset-2 rounded-full overflow-hidden animate-spin-slow">
                  <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#f97316,#fb923c,#fdba74,#f97316)] rounded-full" />
                </div>
                <div className="absolute -inset-2 rounded-full bg-[#080808] scale-[0.93]" />

                {/* Photo container */}
                <ProfilePhoto size="hero" />

                {/* Floating skill badges */}
                {floatingBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className={`absolute ${badge.pos} ${badge.delay} px-3 py-1.5 bg-[#111] border border-white/10 rounded-xl text-xs font-mono font-bold text-orange-400 shadow-lg backdrop-blur-sm z-10`}
                  >
                    {badge.label}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-16">
            <div className="flex flex-col items-center gap-2 text-zinc-600">
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <ChevronDown size={16} className="animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="border-y border-white/5 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-4xl font-black text-orange-500 mb-1">{stat.value}</p>
                  <p className="text-zinc-500 text-sm">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="section-label">What I Do</p>
            <h2 className="text-4xl font-black text-white mb-4">
              Services I Offer
            </h2>
            <p className="text-zinc-500 max-w-xl mb-14">
              From idea to deployment — I handle every layer of the stack with care and precision.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.12}>
                <div className="group h-full bg-[#111] border border-white/5 rounded-2xl p-7 hover:border-orange-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(249,115,22,0.07)]">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-5 group-hover:bg-orange-500/15 transition-colors">
                    {svc.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{svc.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-5">{svc.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs bg-white/5 text-zinc-500 rounded-lg border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-14">
              <div>
                <p className="section-label">Selected Work</p>
                <h2 className="text-4xl font-black text-white">Featured Projects</h2>
              </div>
              <Link
                href="/portfolio"
                className="hidden md:flex items-center gap-2 text-orange-500 hover:text-orange-300 font-semibold text-sm transition-colors group"
              >
                All Projects
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.12}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-300 font-semibold text-sm"
            >
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="relative rounded-3xl bg-gradient-to-br from-orange-500/10 via-[#111] to-[#111] border border-orange-500/20 p-12 md:p-16 text-center overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl" />
              <div className="relative">
                <p className="section-label justify-center">Let's Collaborate</p>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
                  Ready to build something <br />
                  <span className="text-orange-500">exceptional?</span>
                </h2>
                <p className="text-zinc-400 max-w-lg mx-auto mb-9 leading-relaxed">
                  I'm available for freelance projects and full-time opportunities. Let's turn your vision into reality.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-orange-500 text-black font-bold rounded-full hover:bg-orange-400 hover:shadow-[0_0_40px_rgba(249,115,22,0.45)] transition-all text-sm"
                >
                  Start a Conversation
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
