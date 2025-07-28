"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedSection } from "@/components/ui/animated-section"
import type { SectionValue } from "@/lib/types"
import { motion } from "framer-motion"

interface CourseDetailsProps {
  aboutSections: SectionValue[]
  sectionTitle: string
}

export function CourseDetails({ aboutSections, sectionTitle }: CourseDetailsProps) {
  if (!aboutSections || aboutSections.length === 0) return null

  return (
    <AnimatedSection id="details" className="space-y-6 mt-16">
      <h2 className="text-3xl font-bold text-black border-b-2 border-green-500 pb-2">
        {sectionTitle}
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {aboutSections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <AccordionItem
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-md mb-4 overflow-hidden"
            >
              <AccordionTrigger className="text-lg font-bold px-6 py-4 text-left">
                <span
                  className="block w-full text-left"
                  dangerouslySetInnerHTML={{ __html: section.title || "" }}
                />
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-4 text-gray-700">
                <div
                  className="prose prose-green max-w-none text-16"
                  dangerouslySetInnerHTML={{ __html: section.description || "" }}
                />
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </AnimatedSection>
  )
}
