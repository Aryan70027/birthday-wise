"use client"

import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCreative, Navigation } from "swiper/modules"
import { Camera, Heart, Sparkles } from "lucide-react"
import "swiper/css"
import "swiper/css/effect-creative"
import "swiper/css/navigation"

export default function ThirdScreen({ onNext }) {
  const photos = [
    { src: "/images/1.jpg", alt: "Memory 1" },
    { src: "/images/2.jpg", alt: "Memory 2" },
    { src: "/images/3.jpg", alt: "Memory 3" },
    { src: "/images/4.jpg", alt: "Memory 4" },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8">
      {/* Floating photo-themed decorations */}
      {/* <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400/40"
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {i % 3 === 0 ? (
              <Camera size={24} />
            ) : i % 3 === 1 ? (
              <Heart size={20} fill="currentColor" />
            ) : (
              <Sparkles size={18} />
            )}
          </motion.div>
        ))}
      </div> */}

      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-10 relative z-10"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          style={{ backgroundSize: "200% 200%" }}
        >
          A Birthday Gallery Just for You 📸
        </motion.h2>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 10, -10, 0],
            filter: [
              "drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))",
              "drop-shadow(0 0 40px rgba(59, 130, 246, 0.9))",
              "drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))",
            ],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          className="text-blue-500"
        >
          <Camera size={48} />
        </motion.div>
      </motion.div>

      {/* Premium photo gallery */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full max-w-sm mb-12 relative z-10"
      >
        <Swiper
          grabCursor={true}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          navigation={true}
          modules={[EffectCreative, Navigation]}
          className="w-full h-100 md:h-120 rounded-3xl premium-photo-swiper"
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="w-full h-full bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 rounded-3xl p-5 shadow-2xl relative overflow-hidden"
                transition={{ duration: 0.3 }}
              >
                {/* Premium frame effect */}
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden shadow-xl relative">
                  <img src={photo.src || "/placeholder.svg"} alt={photo.alt} className="w-full h-full object-cover" />

                  {/* Premium overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none"></div>

                  {/* Corner decorations with icons */}
                  <div className="absolute top-3 right-3 text-pink-400">
                    <Heart size={16} fill="currentColor" />
                  </div>
                  <div className="absolute bottom-3 left-3 text-purple-400">
                    <Sparkles size={14} />
                  </div>
                </div>

                {/* Premium shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>

              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Premium button */}
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
          y: -5,
        }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="relative px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-xl font-semibold rounded-full shadow-2xl overflow-hidden group border border-white/70 z-10"
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
        <span className="relative z-10 flex gap-2">
          One more thing...
          <Sparkles size={20} className="mt-0.5"/>
        </span>
      </motion.button>
    </div>
  )
}
