"use client"
import { AnimatedSection } from "@/components/ui/animated-section"
import type { ChecklistItem } from "@/lib/types"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

interface CourseChecklistProps {
  checklist: ChecklistItem[]

  sectionTitle: string
}

export function CourseChecklist({ checklist, sectionTitle }: CourseChecklistProps) {
  if (!checklist || checklist.length === 0) return null

  return (
    <AnimatedSection className="space-y-6 border p-6 rounded-lg bg-white">
      <h2 className="text-2xl font-bold text-black">{sectionTitle}</h2>
      <ul className="space-y-4">
        {checklist
          // .filter((item) => item.list_page_visibility)
          .map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {item.icon && item.icon !== "0" ? (
                <Image
                  src={item.icon || "/placeholder.svg"}
                  alt="Checklist icon"
                  width={32}
                  height={32}
                  className="w-6 h-6 object-contain flex-shrink-0"
                />
              ) : (
                <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
              )}
              <span className="text-gray-700 text-base">{item.text}</span>
            </motion.li>
          ))}
      </ul>
    </AnimatedSection>
  )
}
