import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { profile } from '@/data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link href="/" className="text-xl font-black">
              <span className="text-white">M</span>
              <span className="text-orange-500">P</span>
              <span className="text-white">.</span>
            </Link>
            <p className="text-zinc-600 text-sm mt-1">Fullstack Developer</p>
          </div>

          <div className="flex items-center gap-6">
            {(['Home', 'About', 'Portfolio', 'Contact'] as const).map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-zinc-500 hover:text-orange-400 text-sm transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={profile.social.github}
              target="_blank"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-orange-400 hover:border-orange-500/50 transition-all"
            >
              <Github size={15} />
            </Link>
            <Link
              href={profile.social.linkedin}
              target="_blank"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-orange-400 hover:border-orange-500/50 transition-all"
            >
              <Linkedin size={15} />
            </Link>
            <Link
              href={profile.social.twitter}
              target="_blank"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-orange-400 hover:border-orange-500/50 transition-all"
            >
              <Twitter size={15} />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Mfon Paulinus. Crafted with passion.
          </p>
        </div>
      </div>
    </footer>
  )
}
