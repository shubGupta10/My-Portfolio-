import React from 'react';
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Calendar } from "lucide-react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

const ProjectCard = ({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) => {
  return (
    <Card className={cn(
      "group relative flex flex-col overflow-hidden border bg-card transition-all duration-300 hover:shadow-xl",
      "hover:translate-y-[-2px] ",
      className
    )}>
      <Link
        href={href || "#"}
        className="block overflow-hidden"
      >
        <div className="relative h-48 w-full overflow-hidden">
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          )}
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>
      </Link>

      <CardHeader className="space-y-2 p-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold tracking-tight">
            {title}
          </CardTitle>
        </div>
        
        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
          <Calendar size={14} />
          <time>{dates}</time>
        </div>

        {link && (
          <div className="hidden text-sm text-muted-foreground underline print:block">
            {link.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
        )}
      </CardHeader>

      <CardContent className="flex-grow space-y-6 px-4">
        <Markdown className="prose prose-sm max-w-none text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="rounded-md px-2 py-0.5 text-xs font-medium"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      {links && links.length > 0 && (
        <CardFooter className="mt-4 p-4 pt-0">
          <div className="flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                className="transition-colors hover:opacity-80"
              >
                <Badge 
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;