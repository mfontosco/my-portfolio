import Link from 'next/link'
import { ArrowRight, MapPin, Mail, Phone, Calendar } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import ProfilePhoto from '@/components/ProfilePhoto'
import { profile } from '@/data/profile'

const skillCategories = [
  { label: 'Frontend', skills: profile.skills.frontend, color: 'from-orange-500/20 to-orange-600/5' },
  { label: 'Backend', skills: profile.skills.backend, color: 'from-blue-500/20 to-blue-600/5' },
  { label: 'Tools & DevOps', skills: profile.skills.tools, color: 'from-green-500/20 to-green-600/5' },
]

export default function About() {
  return (
    <div className="bg-[#080808] min-h-screen">
      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden dot-grid">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <AnimatedSection>
            <p className="section-label">Get to Know Me</p>
            <h1 className="text-6xl font-black text-white mb-5">
              About <span className="text-orange-500">Me</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
              {profile.bio}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Bio & Photo ─────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Photo */}
          <AnimatedSection direction="left" className="lg:col-span-4">
            <div className="relative">
              <div className="relative w-full max-w-sm mx-auto aspect-[4/5] rounded-3xl overflow-hidden border border-white/5">
                <ProfilePhoto size="about" className="rounded-3xl" />
              </div>

              {/* Info card */}
              <div className="mt-6 bg-[#111] border border-white/5 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-3 text-zinc-400 text-sm">
                  <MapPin size={14} className="text-orange-500 shrink-0" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400 text-sm">
                  <Mail size={14} className="text-orange-500 shrink-0" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400 text-sm">
                  <Phone size={14} className="text-orange-500 shrink-0" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400 text-sm">
                  <Calendar size={14} className="text-orange-500 shrink-0" />
                  <span>Available for new projects</span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">Open to Work</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <div className="lg:col-span-8 space-y-8">
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl font-black text-white mb-6">
                Fullstack Developer &<br />
                <span className="text-orange-500">Digital Craftsman</span>
              </h2>
              {profile.longBio.split('\n\n').map((para, i) => (
                <p key={i} className="text-zinc-400 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Object.entries(profile.stats).map(([key, val]) => (
                  <div
                    key={key}
                    className="bg-[#111] border border-white/5 rounded-2xl p-4 text-center hover:border-orange-500/20 transition-colors"
                  >
                    <p className="text-2xl font-black text-orange-500">{val}</p>
                    <p className="text-zinc-500 text-xs mt-1 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-orange-500 text-black font-bold rounded-full hover:bg-orange-400 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all text-sm"
              >
                Let's Work Together
                <ArrowRight size={14} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Skills ──────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="section-label">Tech Stack</p>
            <h2 className="text-4xl font-black text-white mb-14">
              Skills & Technologies
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((cat, ci) => (
              <AnimatedSection key={cat.label} delay={ci * 0.12}>
                <div className={`bg-gradient-to-br ${cat.color} bg-[#111] border border-white/5 rounded-2xl p-6 h-full`}>
                  <h3 className="text-white font-bold text-base mb-5">{cat.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 bg-[#080808]/60 text-zinc-300 text-sm rounded-full border border-white/8 hover:border-orange-500/40 hover:text-orange-300 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ──────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="section-label">Journey</p>
            <h2 className="text-4xl font-black text-white mb-14">
              Work Experience
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/40 via-orange-500/20 to-transparent hidden sm:block" />

            <div className="space-y-8">
              {profile.experience.map((exp, i) => (
                <AnimatedSection key={exp.company} delay={i * 0.12}>
                  <div
                    className={`relative flex flex-col sm:flex-row gap-6 ${
                      i % 2 === 0 ? 'sm:pr-[50%] sm:pl-0' : 'sm:pl-[50%] sm:pr-0'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="hidden sm:block absolute left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-orange-500 border-2 border-[#080808] shadow-[0_0_10px_rgba(249,115,22,0.6)]" />

                    <div
                      className={`flex-1 bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-orange-500/20 transition-all ${
                        i % 2 === 0 ? 'sm:mr-8' : 'sm:ml-8'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-white font-bold text-base">{exp.role}</h3>
                          <p className="text-orange-500 text-sm font-medium">{exp.company}</p>
                        </div>
                        <span className="text-zinc-600 text-xs whitespace-nowrap border border-white/5 px-3 py-1 rounded-full shrink-0">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-zinc-500 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
