import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type ProfileProps = {
  src?: string
  fallback: string
  name?: string
  message?: string
}

const ProfilePix: React.FC<ProfileProps> = ({ src, fallback, name}) => {
  return (
    <div className="flex w-full h-full items-center border-2 border-white ">
      <Avatar className="w-full h-full rounded-none shadow-none border-none">
        <AvatarImage src={src} alt={name}  className="w-full h-full rounded-none shadow-none"/>
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      {/* <div>
        {name && <p className="font-semibold text-sm">{name}</p>}
        {message && <p className="text-muted-foreground text-sm">{message}</p>}
      </div> */}
    </div>
  )
}

export default ProfilePix
