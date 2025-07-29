"use client"

import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { MediaCarousel } from "./meda-carousel"

interface CourseHeroProps {
  title: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  media: any
  ctaText: string
  price?: string
}

export function CourseHero({ title, description, media, ctaText, price = "1000 BDT" }: CourseHeroProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      {/* Left Column */}
      <div className="lg:col-span-2 space-y-8">
        {/* Title & Description */}
        <AnimatedSection className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-black leading-tight"
          >
            {title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 leading-relaxed prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </AnimatedSection>
      </div>

      {/* Right Column */}
      <div className="lg:col-span-1 space-y-8">
        {/* Media Carousel */}
        <AnimatedSection delay={0.3} className="space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MediaCarousel media={media} title={title} />
          </motion.div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.5} className="space-y-4">
          <Card className="p-6 bg-gradient-to-r from-green-100 to-lime-100 rounded-xl ">
            <CardTitle className="text-2xl font-bold text-green-800 mb-4">
              <span className="text-black"><span className="text-4xl">৳</span>{price}</span>
            </CardTitle>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
              <Button className="w-full py-3 text-lg font-semibold bg-green-600 text-white hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg">
                {ctaText}
              </Button>
            </motion.div>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}
