'use client'

import { Power, Swords, Star } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesGrid } from '@/components/sections/FeatureGrid'

import { ReviewMarquee } from "@/components/ReviewMarquee"
import { Video } from "@/components/Video"

export default function Page() {
  

  const features = [
    {
      icon: <Power className="h-5 w-5 sm:h-6 sm:w-6 text-[#E9967A]" />,
      title: "Unreal Engine Graphics", 
      description: "Experience stunning, high-quality visuals with smooth gameplay powered by Unreal Engine."
    },
    {
      icon: <Swords className="h-5 w-5 sm:h-6 sm:w-6 text-[#E9967A]" />,
      title: "Red vs Blue Battles",
      description: "Team up in exciting Red vs Blue matches, filled with strategy and fast-paced action."
    },
    {
      icon: <Star className="h-5 w-5 sm:h-6 sm:w-6 text-[#E9967A]" />,
      title: "Wide Weapon Variety",
      description: "Choose from a diverse range of futuristic guns for every combat situation."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 sm:py-16 bg-[#EFE9D5]">
      <HeroSection
        title="Dive into"
        highlightedText="Velocity Edge"
        description="A high-speed, futuristic battle for supremacy" ctaText={'Play Now'} ctaLink={''}/>
      
      <FeaturesGrid features={features} />

      <section className="py-12 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          See Velocity Edge in Action
        </h2>
        <Video />
      </section>

      <section className="py-12 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          What are We Offering
        </h2>
        <ReviewMarquee />
      </section>
    </div>
  )
}