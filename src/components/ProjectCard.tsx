import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-[#111111] border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(249,115,22,0.08)]">
      {/* Image / gradient area */}
      <div className={`h-48 ${project.gradient} relative overflow-hidden`}>
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 1024px) 368px, (min-width: 768px) 50vw, 100vw"
              className={`transition-transform duration-700 group-hover:scale-105 ${
                project.mobileApp ? 'object-contain py-3' : 'object-cover object-top'
              }`}
            />
            {/* Darken the top so the badges stay readable on light screenshots */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl select-none">{project.emoji}</span>
          </div>
        )}
        {/* Shine on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-orange-500 text-black text-xs font-bold rounded-full uppercase tracking-wide">
            {project.category}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-white text-lg font-bold mb-2 group-hover:text-orange-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-white/5 text-zinc-400 text-xs rounded-lg border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-white/5">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-orange-500 hover:text-orange-300 text-sm font-semibold transition-colors"
          >
            <ExternalLink size={13} />
            {project.mobileApp ? 'View App' : 'Visit Site'}
          </Link>
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-500 hover:text-white text-sm font-medium transition-colors"
            >
              <Github size={13} />
              Source
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
