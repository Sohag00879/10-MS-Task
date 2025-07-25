"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedSection } from "@/components/ui/animated-section"
import { motion } from "framer-motion"
import type { SectionValue } from "@/lib/types"

interface CourseFAQProps {
  faqItems: SectionValue[]
  sectionTitle: string
}

export function CourseFAQ({ faqItems, sectionTitle }: CourseFAQProps) {
  if (!faqItems || faqItems.length === 0) return null

  return (
    <AnimatedSection id="faq" className="space-y-6">
      <h2 className="text-3xl font-bold text-green-700 border-b-2 border-lime-400 pb-2">{sectionTitle}</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <AccordionItem value={`item-${index}`} className="bg-white rounded-lg shadow-md mb-4">
              <AccordionTrigger className="text-lg font-semibold text-green-700 hover:text-lime-600 px-6 py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700 prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: item.answer || "" }} />
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </AnimatedSection>
  )
}
