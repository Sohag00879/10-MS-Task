"use client"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { SectionValue } from "@/lib/types"
import { motion } from "framer-motion"
import Image from "next/image"

interface CourseFeaturesProps {
  features: SectionValue[]
  sectionTitle: string
}

export function CourseFeatures({ features, sectionTitle }: CourseFeaturesProps) {
  if (!features || features.length === 0) return null

  return (
    <AnimatedSection className="space-y-6 mt-16">
      <h2 className="text-3xl font-bold text-black border-b-2 border-green-500 pb-2">{sectionTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white rounded-xl">
              <CardHeader className="flex flex-row items-center space-x-4 p-0 mb-4">
                {feature.icon && feature.icon !== "0" && (
                  <Image
                    src={feature.icon || "/placeholder.svg"}
                    alt={feature.title || "Feature icon"}
                    width={48}
                    height={48}
                    className="w-10 h-10 object-contain"
                  />
                )}
                <CardTitle className="text-xl font-semibold text-green-600">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-700">{feature.subtitle}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  )
}
