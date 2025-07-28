"use client"
import { AnimatedButton } from "@/components/ui/animated-button";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import logo from "../../public/10mslogo-svg.svg";

interface CourseHeaderProps {
  currentLang: string
}

export function CourseHeader({ currentLang }: CourseHeaderProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleLanguageChange = (lang: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("lang", lang)
    localStorage.setItem('lang', lang);
    router.push(`?${params.toString()}`)
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-bold text-green-700 hover:text-green-900 transition-colors"
        >
          <Image src={logo} alt="logo" className="w-18 h-10" />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#overview" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">
            Overview
          </Link>
          <Link
            href="#instructors"
            className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors"
          >
            Instructors
          </Link>
          <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">
            Features
          </Link>
          <Link href="#learn" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">
            What You will Learn
          </Link>
          <Link href="#details" className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">
            Details
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex space-x-2">
            <AnimatedButton
              variant={currentLang === "en" ? "default" : "outline"}
              size="sm"
              onClick={() => handleLanguageChange("en")}
              className={
                currentLang === "en"
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "text-gray-600 border-gray-300 hover:bg-gray-100"
              }
            >
              EN
            </AnimatedButton>
            <AnimatedButton
              variant={currentLang === "bn" ? "default" : "outline"}
              size="sm"
              onClick={() => handleLanguageChange("bn")}
              className={
                currentLang === "bn"
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "text-gray-600 border-gray-300 hover:bg-gray-100"
              }
            >
              বাংলা
            </AnimatedButton>
          </div>
          <AnimatedButton
            variant="outline"
            className="hidden md:inline-flex bg-green-600 text-white hover:bg-green-700 hover:text-white transition-colors"
          >
            Sign In
          </AnimatedButton>
        </div>
      </div>
    </header>
  )
}
