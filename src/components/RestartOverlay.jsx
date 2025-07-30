"use client"

import { motion, AnimatePresence } from "motion/react"
import { Heart, Sparkles, RotateCw } from "lucide-react"

export default function RestartOverlay({ show, onRestart }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="fixed inset-0 bg-gradient-to-br from-pink-900 via-purple-900 to-blue-900 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 2,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              bounce: 0.3,
            }}
            className="text-center relative max-w-2xl"
          >

            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0],
                filter: [
                  "drop-shadow(0 0 40px rgba(255, 255, 255, 0.6))",
                  "drop-shadow(0 0 80px rgba(255, 255, 255, 0.9))",
                  "drop-shadow(0 0 40px rgba(255, 255, 255, 0.6))",
                ],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="text-pink-300 mb-5 md:mb-8"
            >
              <Heart size={80} fill="currentColor" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight"
            >
              Once again, many many returns of the day 🎂
              <br />
              <span className="bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-300 bg-clip-text text-transparent">
                Wishing you birthday in coder style 🎉
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1.5 }}
              className="text-2xl text-pink-100 mb-10 font-bold flex flex-col items-center justify-center gap-2"
            >
              Want to feel the magic once more?
              <Sparkles size={24} className="text-pink-200" />
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 1.5, type: "spring", bounce: 0.6 }}
              whileHover={{
                scale: 1.2,
                boxShadow: "0 30px 60px rgba(255, 255, 255, 0.3), 0 0 0 2px rgba(255, 255, 255, 0.1)",
                y: -15,
              }}
              whileTap={{ scale: 0.9 }}
              onClick={onRestart}
              className="relative px-12 py-5 bg-gradient-to-r from-white via-pink-100 to-white text-gray-800 text-2xl font-black rounded-full shadow-2xl overflow-hidden group border-2 border-white/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <span className="relative z-10 flex items-center gap-3">
                Start Again
                <motion.span>
                  <RotateCw size={24} />
                </motion.span>
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Heart size={24} fill="currentColor" />
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
