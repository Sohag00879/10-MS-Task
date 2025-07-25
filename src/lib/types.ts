export interface Media {
  name: string
  resource_type: string
  resource_value: string
  thumbnail_url?: string
}

export interface ChecklistItem {
  color: string
  icon: string
  id: string
  list_page_visibility: boolean
  text: string
}

export interface CtaText {
  name: string
  value: string
}

export interface SectionValue {
  description?: string
  has_instructor_page?: boolean
  image?: string
  name?: string
  short_description?: string
  slug?: string
  icon?: string
  subtitle?: string
  title?: string
  text?: string
  checklist?: string[]
  file_type?: string
  file_url?: string
  video_thumbnail?: string
  background?: {
    image: string
    primary_color: string
    secondary_color: string
  }
  cta?: {
    clicked_url: string
    color: string
    text: string
  }
  description_color?: string
  thumbnail?: string
  title_color?: string
  top_left_icon_img?: string
  // FAQ specific fields
  answer?: string
  question?: string
  // Testimonial specific fields
  testimonial?: string
  profile_image?: string
  thumb?: string
  video_type?: string
  video_url?: string
}

export interface Section {
  type: string
  name: string
  description: string
  bg_color: string
  order_idx: number
  values: SectionValue[]
}

export interface CourseData {
  slug: string
  id: number
  title: string
  description: string
  platform: string
  type: string
  modality: string
  old_info: any
  start_at: string
  media: Media[]
  checklist: ChecklistItem[]
  seo: any[] // Assuming SEO data might be an array of objects
  cta_text: CtaText
  sections: Section[]
  is_cohort_based_course: boolean
  secondary_cta_group: any[]
  delivery_method: string
}

export interface ApiResponse {
  code: number
  data: CourseData
  error: any[]
  message: string
  payload: any[]
  status_code: 200
}
