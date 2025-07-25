"use client"
import { CheckCircle2 } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { motion } from "framer-motion"
import type { SectionValue } from "@/lib/types"

interface CoursePointersProps {
  pointers: SectionValue[]
  sectionTitle: string
}

export function CoursePointers({ pointers, sectionTitle }: CoursePointersProps) {
  if (!pointers || pointers.length === 0) return null

  return (
    <AnimatedSection id="learn" className="space-y-6">
      <h2 className="text-3xl font-bold text-green-700 border-b-2 border-lime-400 pb-2">{sectionTitle}</h2>
      <ul className="space-y-4 text-lg text-gray-700 list-none pl-0">
        {pointers.map((pointer, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="flex items-start gap-3"
          >
            <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
            <span>{pointer.text}</span>
          </motion.li>
        ))}
      </ul>
    </AnimatedSection>
  )
}
