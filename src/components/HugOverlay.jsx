"use client"

import { motion, AnimatePresence } from "motion/react"
import { Heart, Sparkles } from "lucide-react"

export default function HugOverlay({ show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 bg-gradient-to-br from-pink-950/70 via-purple-950/70 to-pink-950/70 backdrop-blur-2xl z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0, rotate: -360, y: 200 }}
            animate={{ scale: 1, rotate: 0, y: 0 }}
            exit={{ scale: 0, rotate: 360, y: -200 }}
            transition={{
              duration: 1.5,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              bounce: 0.4,
            }}
            className="bg-gradient-to-br from-white via-pink-50 to-purple-50 rounded-3xl py-8 px-6 text-center shadow-2xl max-w-lg w-full relative overflow-hidden border border-white/70"
          >
            {/* Premium background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 via-purple-100/30 to-blue-100/30"></div>

            {/* Floating decorative elements */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-pink-400/60"
                style={{
                  left: `${15 + i * 10}%`,
                  top: `${10 + (i % 2) * 70}%`,
                }}
                animate={{
                  y: [-15, 15, -15],
                  rotate: [0, 360],
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                {i % 2 === 0 ? <span className="text-2xl">🎂</span> : <span className="text-2xl">🎁</span>}
              </motion.div>
            ))}

            <motion.div
              className="mb-8 relative z-10 text-pink-500 flex justify-center"
              animate={{
                filter: [
                  "drop-shadow(0 0 30px rgba(236, 72, 153, 0.6))",
                  "drop-shadow(0 0 50px rgba(236, 72, 153, 0.9))",
                  "drop-shadow(0 0 30px rgba(236, 72, 153, 0.6))",
                ],
              }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <img src="/gifs/hug.gif" className="w-40 md:w-52" alt="" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-3xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 relative z-10"
            >
              Happy Birthday, Ananya! 🎉
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="text-gray-700 text-xl mb-8 font-bold relative z-10 leading-relaxed flex flex-col items-center justify-center gap-2"
            >
              I wish I could make today as special as you are… because you truly deserve the best. 🎂✨
              <Heart size={20} fill="currentColor" className="text-pink-500" />
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 1, type: "spring", bounce: 0.6 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)",
                y: -5,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="relative px-10 py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700 text-white text-xl font-semibold rounded-full shadow-2xl overflow-hidden group z-10 border border-white/70"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              <span className="relative z-10 flex gap-2">
                I feel it
                <Heart size={20} fill="currentColor" className="mt-0.5" />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
