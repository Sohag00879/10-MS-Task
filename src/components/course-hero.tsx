"use client"
import { Card, CardTitle } from "@/components/ui/card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedSection } from "@/components/ui/animated-section"
import { motion } from "framer-motion"

interface CourseHeroProps {
  title: string
  description: string
  youtubeVideoId: string
  ctaText: string
}

export function CourseHero({ title, description, youtubeVideoId, ctaText }: CourseHeroProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      {/* Left Column */}
      <div className="lg:col-span-2 space-y-8">
        {" "}
        {/* Reduced space-y */}
        {/* Title & Description */}
        <AnimatedSection id="overview" className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-green-800 leading-tight"
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
        {" "}
        {/* Reduced space-y */}
        {/* Trailer */}
        <AnimatedSection delay={0.3} className="space-y-4">
          <h2 className="text-2xl font-bold text-green-700">Product Trailer</h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-full aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </AnimatedSection>
        {/* CTA */}
        <AnimatedSection delay={0.5} className="space-y-4">
          <Card className="p-6 shadow-lg bg-gradient-to-r from-green-100 to-lime-100 rounded-xl">
            <CardTitle className="text-2xl font-bold text-green-800 mb-4">
              Price: <span className="text-lime-600">1000 BDT</span>
            </CardTitle>
            <AnimatedButton className="w-full py-3 text-lg font-semibold bg-green-600 text-white hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg">
              {ctaText}
            </AnimatedButton>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}
