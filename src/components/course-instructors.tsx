"use client"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AnimatedSection } from "@/components/ui/animated-section"
import { motion } from "framer-motion"
import type { SectionValue } from "@/lib/types"

interface CourseInstructorsProps {
  instructors: SectionValue[]
  sectionTitle: string
}

export function CourseInstructors({ instructors, sectionTitle }: CourseInstructorsProps) {
  if (!instructors || instructors.length === 0) return null

  return (
    <AnimatedSection id="instructors" className="space-y-6">
      <h2 className="text-3xl font-bold text-green-700 border-b-2 border-lime-400 pb-2">{sectionTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {instructors.map((instructor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="flex flex-col md:flex-row items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-xl">
              <Avatar className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 md:mr-6 border-4 border-lime-300">
                <AvatarImage src={instructor.image || "/placeholder.svg"} alt={instructor.name || "Instructor"} />
                <AvatarFallback>{instructor.name?.charAt(0) || "I"}</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-green-700">{instructor.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{instructor.short_description}</p>
                {instructor.description && (
                  <div
                    className="text-gray-700 text-sm prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: instructor.description }}
                  />
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  )
}
