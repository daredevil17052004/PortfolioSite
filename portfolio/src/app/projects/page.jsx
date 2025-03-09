import React from 'react'
import LetterGlitch from '@/components/LetterGlitch/LetterGlitch'

const page = () => {
    return (
        <div className="relative w-full h-screen bg-transparent px-20 text-text font-chakra">
            {/* LetterGlitch as Background */}
            <div className="absolute top-0 left-0 w-full h-screen z-[-1]">
                <LetterGlitch
                    glitchSpeed={50}
                    centerVignette={false}
                    outerVignette={false}
                    smooth={true}
                />
            </div>
        </div>
    )
}

export default page