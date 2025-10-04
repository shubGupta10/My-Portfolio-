"use client"

import React, { useEffect, useState } from 'react'

function LoadingScreen({
    onComplete,
    text = "<Shubham Gupta/>",
    typingSpeed = 100,
    delayBeforeComplete = 1000
}) {
    const [displayText, setDisplayText] = useState("")

    useEffect(() => {
        let index = 0
        let timeoutId

        const interval = setInterval(() => {
            if (index <= text.length) {
                setDisplayText(text.substring(0, index))
                index++
            } else {
                clearInterval(interval)

                timeoutId = setTimeout(() => {
                    onComplete?.()
                }, delayBeforeComplete)
            }
        }, typingSpeed)

        return () => {
            clearInterval(interval)
            clearTimeout(timeoutId)
        }
    }, [text, typingSpeed, delayBeforeComplete, onComplete])

    return (
        <div className='fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center'>
            <div className='mb-4 text-4xl font-mono font-bold'>
                {displayText}
                <span className='animate-blink ml-1'>|</span>
            </div>

            <div className='w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden'>
                <div className='w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar' />
            </div>
        </div>
    )
}

export default LoadingScreen