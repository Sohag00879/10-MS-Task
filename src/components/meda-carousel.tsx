"use client"

import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface MediaItem {
    name: string
    resource_type: "video" | "image"
    resource_value: string
    thumbnail_url?: string
}

interface MediaCarouselProps {
    media: MediaItem[]
    title: string
}

export function MediaCarousel({ media, title }: MediaCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const previewMedia = media.filter((item) => item.name === "preview_gallery")
    if (previewMedia.length === 0) return null

    const currentMedia = previewMedia[currentIndex]

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % previewMedia.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + previewMedia.length) % previewMedia.length)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <div className="space-y-4">
            {/* Main Media Display */}
            <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                    >
                        {currentMedia.resource_type === "video" ? (
                            <div className="relative w-full h-full">
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${currentMedia.resource_value}?rel=0`}
                                    title={`${title} - Video ${currentIndex + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    scrolling="no"
                                    style={{ overflow: "hidden" }}
                                />
                            </div>
                        ) : (
                            <div className="relative w-full h-full">
                                <Image
                                    src={currentMedia.resource_value || "/placeholder.svg"}
                                    alt={`${title} - Image ${currentIndex + 1}`}
                                    fill
                                    className="object-cover"
                                    draggable={false}
                                />
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {previewMedia.length > 1 && (
                    <>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-white/70 text-black rounded-full w-10 h-10"
                            onClick={prevSlide}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-white/70 text-black rounded-full w-10 h-10"
                            onClick={nextSlide}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </>
                )}

                {/* Media Type Indicator */}
                {/* {currentMedia.resource_type === "video" && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-sm font-medium flex items-center gap-1">
                        <Play className="w-3 h-3" />
                        Video
                    </div>
                )} */}
            </div>

            {/* Thumbnail Navigation (Scroll hidden, drag allowed) */}
            {previewMedia.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
                    {previewMedia.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`relative flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${index === currentIndex
                                ? "border-green-500 ring-2 ring-green-200"
                                : "border-gray-300 hover:border-gray-400"
                                }`}
                        >
                            {item.thumbnail_url ? (
                                <Image
                                    src={item.thumbnail_url || "/placeholder.svg"}
                                    alt={`Thumbnail ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    draggable={false}
                                />
                            ) : item.resource_type === "video" ? (
                                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                                    <Play className="w-4 h-4 text-white" />
                                </div>
                            ) : (
                                <Image
                                    src={item.resource_value || "/placeholder.svg"}
                                    alt={`Thumbnail ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    draggable={false}
                                />
                            )}

                            {/* Video indicator on thumbnail */}
                            {item.resource_type === "video" && (
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <Play className="w-3 h-3 text-white" />
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            )}

            {/* Media Counter */}
            {previewMedia.length > 1 && (
                <div className="text-center text-sm text-gray-600">
                    {currentIndex + 1} of {previewMedia.length}
                </div>
            )}
        </div>
    )
}
