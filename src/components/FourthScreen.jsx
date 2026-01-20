"use client"

import { motion } from "motion/react"
import { useState, useEffect, useRef } from "react"
import { Heart, Sparkles, Star } from "lucide-react"

export default function FourthScreen({ onShowOverlay }) {
  const [displayedText, setDisplayedText] = useState("")
  const [showButton, setShowButton] = useState(false)
  const scrollRef = useRef(null)

  const specialMessage = `Dear Kaustubh ,
Happy Birthday 🎉
Every year you somehow get better, and honestly… I’m really glad I get to know you a little more with time.
Your smile has this habit of making normal days feel special, and being around you just feels easy and nice.
Thanks for the laughs, the little moments, and for being you.
On your birthday, I just wish you happiness, success, and lots of moments that make you smile the way you make others smile.
Stay the same — there’s something genuinely special about you. ✨
`

  const endingText = "And now... a little birthday surprise for you 🎂"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < specialMessage.length) {
        setDisplayedText(specialMessage.slice(0, index + 1))
        index++

        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
      } else {
        clearInterval(timer)
        setTimeout(() => setShowButton(true), 500)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8">

      {/* message container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl mb-12 relative z-10 will-change-transform"
      >
        <div className="relative">
          {/* decorative elements */}
          <div className="absolute -top-4 -left-4 text-pink-400">
            <Heart size={24} fill="currentColor" />
          </div>
          <div className="absolute -top-4 -right-4 text-purple-400">
            <Sparkles size={20} />
          </div>
          <div className="absolute -bottom-4 -left-4 text-blue-400">
            <Star size={18} fill="currentColor" />
          </div>
          <div className="absolute -bottom-4 -right-4 text-pink-400">
            <Heart size={20} fill="currentColor" />
          </div>

          {/* note container */}
          <div className="bg-gradient-to-br from-white/95 via-pink-50/95 to-purple-50/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/40 relative overflow-hidden">
            {/* background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-purple-100/50 to-blue-100/50"></div>

            {/* Decorative corner elements */}
            <div className="absolute top-4 right-4 text-pink-400/60">
              <Heart size={12} fill="currentColor" />
            </div>
            <div className="absolute bottom-4 left-4 text-purple-400/60">
              <Sparkles size={10} />
            </div>

            <div
              ref={scrollRef}
              className="max-h-96 overflow-y-auto scrollbar-hide relative z-10 pr-4"
              style={{ scrollBehavior: "smooth" }}
            >
              <p className="text-gray-800 leading-relaxed text-lg whitespace-pre-line font-medium">
                {displayedText}
                {displayedText.length !== specialMessage.length && <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                  className="inline-block w-0.5 h-[18px] bg-gradient-to-b from-pink-500 to-purple-500 ml-1 rounded-full"
                />}
              </p>
            </div>
          </div>

          {/* Outer glow */}
          <div className={`absolute inset-0 bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-blue-400/20 rounded-3xl blur-2xl opacity-60 ${showButton && "pointer-events-none"}`}></div>
        </div>
      </motion.div>

      {/* Ending text and button */}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center relative z-10"
        >
          <motion.p
            className="text-gray-700 text-xl mb-4 font-bold flex flex-col items-center justify-center gap-2"
            animate={{
              textShadow: [
                "0 0 20px rgba(236, 72, 153, 0.4)",
                "0 0 40px rgba(236, 72, 153, 0.7)",
                "0 0 20px rgba(236, 72, 153, 0.4)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            {endingText}
            <motion.span
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-pink-500"
            >
              <Heart size={28} fill="currentColor" />
            </motion.span>
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 25px 50px rgba(236, 72, 153, 0.5)",
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onShowOverlay}
            className="relative px-10 py-4 bg-gradient-to-r from-pink-600 via-red-600 to-pink-700 text-white text-xl font-semibold rounded-full shadow-2xl overflow-hidden group border border-white/70"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
            <span className="relative z-10 flex gap-2">
              Show me what it is
              <Heart size={20} fill="currentColor" className="mt-0.5" />
            </span>
          </motion.button>
        </motion.div>
      )}
    </div>
  )
      }
