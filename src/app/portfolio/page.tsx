'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

type Category = 'All' | 'Frontend' | 'Backend' | 'Fullstack' | 'Mobile'

const categories: Category[] = ['All', 'Fullstack', 'Frontend', 'Backend', 'Mobile']

export default function Portfolio() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="bg-[#080808] min-h-screen">
      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden dot-grid">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <AnimatedSection>
            <p className="section-label">My Work</p>
            <h1 className="text-6xl font-black text-white mb-5">
              Project <span className="text-orange-500">Portfolio</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
              A curated selection of projects spanning frontend, backend, and fullstack development. Each one built with attention to detail, performance, and user experience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Filter + Grid ────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Filter tabs */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    active === cat
                      ? 'bg-orange-500 text-black shadow-[0_0_20px_rgba(249,115,22,0.3)]'
                      : 'bg-[#111] border border-white/8 text-zinc-400 hover:border-orange-500/30 hover:text-orange-400'
                  }`}
                >
                  {cat}
                  <span
                    className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                      active === cat ? 'bg-black/20' : 'bg-white/5'
                    }`}
                  >
                    {cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length}
                  </span>
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.08}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-zinc-600 text-lg">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="bg-[#111] border border-white/5 rounded-3xl p-10 md:p-14 text-center hover:border-orange-500/15 transition-colors">
              <p className="section-label justify-center">Collaborate</p>
              <h2 className="text-3xl font-black text-white mb-4">
                Have a project idea?
              </h2>
              <p className="text-zinc-500 max-w-md mx-auto mb-8 text-sm leading-relaxed">
                I'm always excited to take on new challenges. Let's build something remarkable together.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange-500 text-black font-bold rounded-full hover:bg-orange-400 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all text-sm"
              >
                Start a Project
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
