import type { CourseData as CourseDataType, ApiResponse as ApiResponseDataType } from "@/lib/types"
const API_BASE_URL = "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course"



export default async function getCourseData(lang = "en"): Promise<CourseDataType | null> {
  try {
    const response = await fetch(`${API_BASE_URL}?lang=${lang}`, {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web", // Required for SEO data
      },
      next: {
        revalidate: 3600, // ISR: Revalidate data every hour
      },
    })


    if (!response.ok) {
      console.error(`Failed to fetch data: ${response.status} ${response.statusText}`)
      return null
    }


    const apiResponse: ApiResponseDataType = await response.json()
    if (apiResponse.code !== 200) {
      console.error("API returned an error:", apiResponse.message)
      return null
    }


    return apiResponse.data
  } catch (error) {
    console.error("Error fetching course data:", error)
    return null
  }
}