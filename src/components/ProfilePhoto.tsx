'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Props {
  className?: string
  size?: 'hero' | 'about'
}

export default function ProfilePhoto({ className = '', size = 'hero' }: Props) {
  const [imgError, setImgError] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <div className={`absolute inset-0 overflow-hidden rounded-full ${className}`}>
      {/* Fallback — hidden once image loads */}
      {(!imgLoaded || imgError) && (
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center z-0">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-orange-500/20 border-2 border-orange-500/40 flex items-center justify-center mx-auto mb-2">
              <span className="text-3xl font-black text-orange-500">MP</span>
            </div>
            {size === 'hero' && !imgError && (
              <p className="text-zinc-600 text-xs">Loading...</p>
            )}
          </div>
        </div>
      )}

      {/* Actual photo */}
      {!imgError && (
        <Image
          src="/mfon-profile-square.jpg"
          alt="Mfon Paulinus"
          fill
          sizes="(min-width: 1024px) 384px, 320px"
          className={`object-cover z-10 ${size === 'hero' ? 'scale-110 origin-top' : 'object-top'}`}
          priority
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
        />
      )}
    </div>
  )
}
