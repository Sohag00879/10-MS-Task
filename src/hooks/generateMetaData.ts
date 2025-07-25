import { Metadata } from "next"
import getCourseData from "./getCourseData"
import stripHtml from "./stripHtml"

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { lang?: string }
}): Promise<Metadata> {
  const lang = searchParams.lang || "en"
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