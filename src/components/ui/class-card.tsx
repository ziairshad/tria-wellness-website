import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface ClassCardProps {
  title: string;
  instructor: string;
  duration: string;
  level: string;
  description: string;
  schedule: string[];
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  image: string;
}

export function ClassCard({
  title,
  instructor,
  duration,
  level,
  description,
  schedule,
  gradientFrom,
  gradientVia,
  gradientTo,
  image,
}: ClassCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none p-0">
      <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo}`}>
      </div>
      <CardContent className="p-4 sm:p-5">
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-serif font-medium mb-1.5">{title}</h3>
            <p className="text-sm font-sans text-muted-foreground mb-2">
              {description}
            </p>
          </div>

          <div className="space-y-1.5 text-sm">
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">Instructor:</span>
              <span className="text-muted-foreground">{instructor}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">Duration:</span>
              <span className="text-muted-foreground">{duration}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">Level:</span>
              <span className="text-muted-foreground">{level}</span>
            </div>
          </div>

          <div className="pt-1.5">
            <p className="text-xs font-medium text-foreground mb-2">Schedule:</p>
            <div className="grid grid-cols-2 gap-1 text-[11px] text-muted-foreground">
              {schedule.map((time, index) => (
                <span key={index}>{time}</span>
              ))}
            </div>
          </div>

          <Button className="w-full h-10 text-sm mt-3">Book Now</Button>
        </div>
      </CardContent>
    </Card>
  );
}
