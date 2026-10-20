'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import AnimatedSection from '@/components/AnimatedSection'
import { profile } from '@/data/profile'

const contactInfo = [
  { icon: <Mail size={18} />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: <Phone size={18} />, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: <MapPin size={18} />, label: 'Location', value: profile.location, href: '#' },
]

// Web3Forms access keys are meant to be public; submissions go to the email the key was issued for
const WEB3FORMS_KEY = 'e990c431-cc44-4295-b6e6-565dbbbcacf6'

const socialLinks = [
  { icon: <Github size={18} />, label: 'GitHub', href: profile.social.github },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', href: profile.social.linkedin },
  { icon: <FaXTwitter size={16} />, label: 'X (Twitter)', href: profile.social.twitter },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const botcheck = (e.currentTarget.elements.namedItem('botcheck') as HTMLInputElement).checked
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: 'Portfolio Contact Form',
          subject: `Portfolio: ${form.subject}`,
          name: form.name,
          email: form.email,
          message: form.message,
          botcheck,
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message)
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setError(`Sorry, your message couldn't be sent. Please try again or email me at ${profile.email}.`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-[#080808] min-h-screen">
      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden dot-grid">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <AnimatedSection>
            <p className="section-label">Let's Talk</p>
            <h1 className="text-6xl font-black text-white mb-5">
              Get in <span className="text-orange-500">Touch</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
              Have a project in mind? I'd love to hear about it. Let's build something great together.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Main ────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Left — Info */}
          <AnimatedSection direction="left" className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-white font-bold text-2xl mb-2">Contact Information</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just a friendly chat.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-[#111] border border-white/5 rounded-xl hover:border-orange-500/25 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-500/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs">{item.label}</p>
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div>
              <p className="text-zinc-600 text-xs uppercase tracking-widest mb-3">Social</p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-zinc-500 hover:text-orange-400 hover:border-orange-500/40 transition-all"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Available for Work</span>
              </div>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Open to remote full-time roles and freelance projects. Typical response time: within 24 hours.
              </p>
            </div>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection delay={0.15} direction="right" className="lg:col-span-8">
            <div className="bg-[#111] border border-white/5 rounded-3xl p-8 md:p-10">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-4">
                    <CheckCircle size={28} className="text-green-400" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-zinc-500 text-sm max-w-xs">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="mt-6 px-6 py-2.5 text-sm font-semibold text-orange-500 border border-orange-500/30 rounded-full hover:bg-orange-500/10 transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot: hidden from people, bots that tick it are rejected by Web3Forms */}
                  <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-zinc-400 text-xs font-medium uppercase tracking-wide">
                        Full Name <span className="text-orange-500">*</span>
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-[#0d0d0d] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-orange-500/60 focus:bg-[#111] transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-zinc-400 text-xs font-medium uppercase tracking-wide">
                        Email <span className="text-orange-500">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-[#0d0d0d] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-orange-500/60 focus:bg-[#111] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-zinc-400 text-xs font-medium uppercase tracking-wide">
                      Subject <span className="text-orange-500">*</span>
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project inquiry, collaboration..."
                      className="w-full bg-[#0d0d0d] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-orange-500/60 focus:bg-[#111] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-zinc-400 text-xs font-medium uppercase tracking-wide">
                      Message <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project, goals, timeline..."
                      className="w-full bg-[#0d0d0d] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-orange-500/60 focus:bg-[#111] transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-orange-500 text-black font-bold rounded-xl hover:bg-orange-400 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
