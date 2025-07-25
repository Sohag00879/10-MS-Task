"use client"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { motion } from "framer-motion"
import type { SectionValue } from "@/lib/types"

interface CourseExclusiveFeaturesProps {
  featureExplanations: SectionValue[]
  sectionTitle: string
}

export function CourseExclusiveFeatures({ featureExplanations, sectionTitle }: CourseExclusiveFeaturesProps) {
  if (!featureExplanations || featureExplanations.length === 0) return null

  return (
    <AnimatedSection className="space-y-6">
      <h2 className="text-3xl font-bold text-green-700 border-b-2 border-lime-400 pb-2">{sectionTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featureExplanations.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white rounded-xl">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-semibold text-lime-600 mb-2">{feature.title}</CardTitle>
                {feature.file_url && (
                  <Image
                    src={feature.file_url || "/placeholder.svg"}
                    alt={feature.title || "Feature image"}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2 text-gray-700 list-none pl-0">
                  {feature.checklist?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  )
}
