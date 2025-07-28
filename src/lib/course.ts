export interface MediaItem {
  name: string;
  resource_value: string;
  resource_type: "video" | "image";
}

export interface RawMedia {
  name: string;
  resource_value: string;
  resource_type: string;
}

export interface Instructor {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface FeatureExplanation {
  title: string;
  description: string;
}

export interface AboutSection {
  title: string;
  content: string;
}

export type SectionValue =
  | Instructor
  | Feature
  | FeatureExplanation
  | AboutSection
  | string;

export interface InstructorSection {
  type: "instructors";
  name: string;
  values: Instructor[];
}

export interface FeatureSection {
  type: "features";
  name: string;
  values: Feature[];
}

export interface PointerSection {
  type: "pointers";
  name: string;
  values: string[];
}

export interface FeatureExplanationSection {
  type: "feature_explanations";
  name: string;
  values: FeatureExplanation[];
}

export interface AboutSectionType {
  type: "about";
  name: string;
  values: AboutSection[];
}

export type CourseSection =
  | InstructorSection
  | FeatureSection
  | PointerSection
  | FeatureExplanationSection
  | AboutSectionType;

export interface CourseData {
  title: string;
  description: string;
  media: RawMedia[];
  cta_text: { name: string };
  sections: CourseSection[];
  checklist: string[];
}
