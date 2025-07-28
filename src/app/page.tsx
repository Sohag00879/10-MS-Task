import { CourseChecklist } from "@/components/course-checklist"
import { CourseDetails } from "@/components/course-details"
import { CourseExclusiveFeatures } from "@/components/course-exclusive-features"
import { CourseFeatures } from "@/components/course-features"
import { CourseHeader } from "@/components/course-header"
import { CourseHero } from "@/components/course-hero"
import { CourseInstructors } from "@/components/course-instructors"
import { CoursePointers } from "@/components/course-pointers"
import getCourseData from "@/hooks/getCourseData"
import stripHtml from "@/hooks/stripHtml"
import type { Metadata } from "next"
import Link from "next/link"

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}): Promise<Metadata> {
  const resolvedSearchParams = await searchParams
  const lang = resolvedSearchParams.lang || "en"
  const data = await getCourseData(lang)

  if (!data) {
    return {
      title: "Course Landing Page",
      description: "A professional landing page for an online course.",
    }
  }

  const descriptionText = stripHtml(data.description)
  const thumbnailUrl = data.media.find((m) => m.name === "thumbnail")?.resource_value || "/placeholder.svg"

  return {
    title: data.title,
    description: descriptionText,
    openGraph: {
      title: data.title,
      description: descriptionText,
      images: [{ url: thumbnailUrl }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: descriptionText,
      images: [thumbnailUrl],
    },
  }
}

export default async function CourseLandingPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const resolvedSearchParams = await searchParams
  const lang = resolvedSearchParams.lang || "bn"
  const data = await getCourseData(lang)

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-50 text-red-700">
        <p>Failed to load course data. Please try again later.</p>
      </div>
    )
  }

  const media = data.media
  const instructors = data.sections.find((s) => s.type === "instructors")?.values || []
  const features = data.sections.find((s) => s.type === "features")?.values || []
  const pointers = data.sections.find((s) => s.type === "pointers")?.values || []
  const featureExplanations = data.sections.find((s) => s.type === "feature_explanations")?.values || []
  const aboutSections = data.sections.find((s) => s.type === "about")?.values || []
  const checklist = data.checklist || []

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-lime-50 text-gray-800">
      <CourseHeader currentLang={lang} />
      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <CourseHero title={data.title} description={data.description} media={media} ctaText={data.cta_text.name} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-10">
          <div className="lg:col-span-2 space-y-8">
            <CourseInstructors
              instructors={instructors}
              sectionTitle={data.sections.find((s) => s.type === "instructors")?.name || "Course Instructors"}
            />
            <CourseFeatures
              features={features}
              sectionTitle={data.sections.find((s) => s.type === "features")?.name || "How the course is laid out"}
            />
            <CoursePointers
              pointers={pointers}
              sectionTitle={
                data.sections.find((s) => s.type === "pointers")?.name || "What you will learn by doing the course"
              }
            />
            <CourseExclusiveFeatures
              featureExplanations={featureExplanations}
              sectionTitle={
                data.sections.find((s) => s.type === "feature_explanations")?.name || "Course Exclusive Feature"
              }
            />
            <CourseDetails
              aboutSections={aboutSections}
              sectionTitle={data.sections.find((s) => s.type === "about")?.name || "Course Details"}
            />
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-10">
              <CourseChecklist checklist={checklist} sectionTitle={"এই কোর্সে যা যা থাকছে"} />
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} 10 Minute School. All rights reserved.</p>
          <nav className="mt-4 space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
