"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react"

interface ResumeCardProps {
  altText: string
  title: string
  subtitle?: string
  badges?: readonly string[]
  period: string
  points?: readonly string[]
}

export const ResumeCard = ({ altText, title, subtitle, badges, period, points }: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="relative pb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-primary">
            <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${altText}`} alt={altText} />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">{title}</h3>
            {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
          </div>
          <div className="sm:absolute bottom-2 right-6 text-xs text-muted-foreground">{period}</div>
        </div>
        {badges && badges.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <Badge variant="secondary" key={index} className="text-xs">
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>
      {points && points.length > 0 && (
        <>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full px-6 py-2 text-sm text-primary hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Close Points
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Show Points
              </>
            )}
          </button>
          {isExpanded && (
            <CardContent>
              <ul className="mt-2 space-y-2">
                {points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Briefcase className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          )}
        </>
      )}
    </Card>
  )
}

