import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type ReviewProps = {
  src?: string
  fallback: string
  name?: string
  message?: string
}

const Review: React.FC<ReviewProps> = ({ src, fallback, name}) => {
  return (
    <div className="flex  items-center border-2 border-whit ">
      <Avatar className=" ">
        <AvatarImage src={src} alt={name}  className=" "/>
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      {/* <div>
        {name && <p className="font-semibold text-sm">{name}</p>}
        {message && <p className="text-muted-foreground text-sm">{message}</p>}
      </div> */}
    </div>
  )
}

export default Review
