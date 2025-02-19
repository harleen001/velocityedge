"use client"

import Link from 'next/link'

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Button } from "@/components/ui/button"

import { ArrowUpRight } from 'lucide-react'

export function Header() {
  
 

 


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#EFE9D5]/80 backdrop-blur-sm border-b-2 border-border h-14">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
           
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#E9967A] rounded-sm flex items-center justify-center border-2 border-b-3 border-r-3 border-black">
                <span className="text-black text-base sm:text-xl">🀄</span>
              </div>
              <span className="font-semibold text-sm sm:text-base">Velocity Edge</span>
          
          </div>
          
          <nav className="flex items-center space-x-2 sm:space-x-4">
            { (
              <>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link 
                        href="https://github.com/KartikLabhshetwar/mind-mentor" 
                        target="_blank"
                        className="hidden sm:inline-block px-4 py-1.5 bg-[#E9967A] border-2 border-b-4 border-r-4 border-black rounded-lg hover:bg-[#E9967A] hover:border-b-2 hover:border-r-2 transition-all duration-100 text-sm font-medium shadow-sm hover:shadow active:border-b-2 active:border-r-2"
                      >
                       Download Now
                      </Link>
                    </TooltipTrigger>
                    
                  </Tooltip>
                </TooltipProvider>
                { (
                  <div className="flex gap-1 sm:gap-2">
                    <Button
                      variant="outline"
                    
                      className="border-2 border-black text-xs sm:text-sm px-2 sm:px-4"
                    >
                     Creator   <ArrowUpRight />
                    </Button>
                   
                  </div>
                ) }
              </>
            ) }

           
          </nav>
        </div>
      </div>
    </header>
  )
}