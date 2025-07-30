"use client"

import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper/modules"
import { Heart, Star, Smile, Sun, Gift, ArrowRight } from "lucide-react"
import "swiper/css"
import "swiper/css/effect-cards"

export default function SecondScreen({ onNext }) {
  const thankYouCards = [
    {
      text: "Happy Birthday, Ananya 🎂 — May your day be full of smiles!",
      icon: Heart,
      gradient: "from-pink-400 via-pink-500 to-fuchsia-500",
      glow: "shadow-pink-500/50",
      iconColor: "text-white",
    },
    {
      text: "You deserve all the happiness in the world today 🌸",
      icon: Star,
      gradient: "from-yellow-400 via-amber-500 to-orange-500",
      glow: "shadow-yellow-500/50",
      iconColor: "text-white",
    },
    {
      text: "Keep shining bright like the star you are ✨",
      icon: Smile,
      gradient: "from-emerald-400 via-green-500 to-teal-500",
      glow: "shadow-green-500/50",
      iconColor: "text-white",
    },
    {
      text: "Wishing you laughter, fun, and unforgettable memories 🥳"
      ,
      icon: Sun,
      gradient: "from-orange-400 via-yellow-500 to-amber-600",
      glow: "shadow-orange-500/40",
      iconColor: "text-white",
    },
    {
      text: "Cheers to another amazing year ahead 🎁",
      icon: Gift,
      gradient: "from-violet-400 via-purple-500 to-indigo-500",
      glow: "shadow-purple-500/50",
      iconColor: "text-white",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8">

      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12 relative z-10"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent leading-tight relative z-10"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          style={{ backgroundSize: "200% 200%" }}
        >
          Some words from my heart to yours...
        </motion.h2>
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.3, 1],
            filter: [
              "drop-shadow(0 0 20px rgba(236, 72, 153, 0.6))",
              "drop-shadow(0 0 40px rgba(236, 72, 153, 0.9))",
              "drop-shadow(0 0 20px rgba(236, 72, 153, 0.6))",
            ],
          }}
          transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
          className="text-pink-500"
        >
          <Gift size={48} />
        </motion.div>
      </motion.div>

      {/* cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full max-w-xs mb-12 relative z-10"
      >
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards]}
          className="w-full h-80"
          cardsEffect={{
            perSlideOffset: 8,
            perSlideRotate: 2,
            rotate: true,
            slideShadows: true,
          }}
        >
          {thankYouCards.map((card, index) => {
            const IconComponent = card.icon
            return (
              <SwiperSlide key={index} className="overflow-hidden rounded-3xl">
                <motion.div
                  className={`w-full h-full bg-gradient-to-br ${card.gradient} rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-2xl ${card.glow} relative overflow-hidden `}
                  transition={{ duration: 0.3 }}
                >
                  {/* Premium background effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 left-4 w-2 h-2 bg-white/40 rounded-full animate-pulse delay-300"></div>

                  {/* Icon with premium animation */}
                  {card.icon &&
                    <motion.div
                      className={`mb-6 p-4 bg-white/20 rounded-full backdrop-blur-sm ${card.iconColor} shadow-xl border border-white/30`}
                      animate={{
                        y: [-5, 5, -5],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <IconComponent size={32} strokeWidth={2} />
                    </motion.div>
                  }

                  {/* Text with premium styling */}
                  <p className="text-lg font-medium text-white leading-relaxed relative z-10 drop-shadow-lg">
                    {card.text}
                  </p>

                  {/* Premium shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </motion.div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </motion.div>

      {/* button */}
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="relative px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white text-xl font-semibold rounded-full shadow-2xl overflow-hidden group border border-white/70"
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
        <span className="relative z-10 flex gap-2">
          Keep going 🌸
          <ArrowRight size={20} className="mt-0.5" />
        </span>
      </motion.button>
    </div>
  )
}

